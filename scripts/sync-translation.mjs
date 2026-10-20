import fs from 'fs/promises';
import path from 'path';
import { translate } from 'google-translate-api-x';

const DOCS_DIR = './docs';
const I18N_DIR = './i18n/en/docusaurus-plugin-content-docs/current';

async function translateText(text) {
  if (!text || !text.trim()) return text;
  try {
    const res = await translate(text, { from: 'pt', to: 'en' });
    return res.text;
  } catch (err) {
    console.warn(`Error translating text: ${err.message}`);
    return text;
  }
}

async function processMarkdown(content) {
  let frontMatterStr = '';
  let body = content;

  if (content.startsWith('---')) {
    const parts = content.split('---');
    if (parts.length >= 3) {
      const fmContent = parts[1];
      body = parts.slice(2).join('---');

      const fmLines = [];
      for (const line of fmContent.split('\n')) {
        if (line.startsWith('title:')) {
          const val = line.replace('title:', '').trim().replace(/^["']|["']$/g, '');
          const translatedVal = await translateText(val);
          fmLines.push(`title: "${translatedVal}"`);
        } else if (line.startsWith('description:')) {
          const val = line.replace('description:', '').trim().replace(/^["']|["']$/g, '');
          const translatedVal = await translateText(val);
          fmLines.push(`description: "${translatedVal}"`);
        } else {
          fmLines.push(line);
        }
      }
      frontMatterStr = `---\n${fmLines.join('\n')}\n---\n`;
    }
  }

  const exportBlocks = [];
  body = body.replace(/^export\s+const[\s\S]*?^\];?\s*$/gm, (match) => {
    exportBlocks.push(match);
    return `__EXPORT_BLOCK_${exportBlocks.length - 1}__`;
  });

  const codeBlocks = [];
  body = body.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  const inlineCodes = [];
  body = body.replace(/`[^`\n]+`/g, (match) => {
    inlineCodes.push(match);
    return `__INLINE_CODE_${inlineCodes.length - 1}__`;
  });

  const lines = body.split('\n');
  const translatedLines = [];

  for (const line of lines) {
    const stripped = line.trim();
    if (
      stripped &&
      !stripped.startsWith('import ') &&
      !stripped.startsWith('export ') &&
      !stripped.startsWith('<') &&
      !stripped.startsWith('{') &&
      !stripped.startsWith('__CODE_BLOCK_') &&
      !stripped.startsWith('__EXPORT_BLOCK_')
    ) {
      const translated = await translateText(stripped);
      const indent = line.match(/^\s*/)[0];
      translatedLines.push(indent + translated);
    } else {
      translatedLines.push(line);
    }
  }

  let translatedBody = translatedLines.join('\n');

  inlineCodes.forEach((code, idx) => {
    translatedBody = translatedBody.replace(`__INLINE_CODE_${idx}__`, () => code);
  });
  codeBlocks.forEach((code, idx) => {
    translatedBody = translatedBody.replace(`__CODE_BLOCK_${idx}__`, () => code);
  });
  exportBlocks.forEach((code, idx) => {
    translatedBody = translatedBody.replace(`__EXPORT_BLOCK_${idx}__`, () => code);
  });

  return frontMatterStr + translatedBody;
}

async function processCategoryJson(filepath) {
  const content = await fs.readFile(filepath, 'utf-8');
  const data = JSON.parse(content);

  if (data.label) {
    data.label = await translateText(data.label);
  }
  if (data.link?.title) {
    data.link.title = await translateText(data.link.title);
  }
  if (data.link?.description) {
    data.link.description = await translateText(data.link.description);
  }

  return JSON.stringify(data, null, 2);
}

async function buildSidebarJson() {
  const SIDEBAR_ID = 'tutorialSidebar';
  const file = './i18n/en/docusaurus-plugin-content-docs/current.json';
  const result = {};

  async function walkCategories(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walkCategories(p);
      } else if (entry.name === '_category_.json') {
        const data = JSON.parse(await fs.readFile(p, 'utf-8'));
        if (!data.label) continue;

        const base = `sidebar.${SIDEBAR_ID}.category.${data.label}`;
        result[base] = {
          message: await translateText(data.label),
          description: `The label for category '${data.label}' in sidebar '${SIDEBAR_ID}'`,
        };
        if (data.link?.title) {
          result[`${base}.link.generated-index.title`] = {
            message: await translateText(data.link.title),
            description: `The generated-index page title for category '${data.label}' in sidebar '${SIDEBAR_ID}'`,
          };
        }
        if (data.link?.description) {
          result[`${base}.link.generated-index.description`] = {
            message: await translateText(data.link.description),
            description: `The generated-index page description for category '${data.label}' in sidebar '${SIDEBAR_ID}'`,
          };
        }
      }
    }
  }

  await walkCategories(DOCS_DIR);
  await fs.writeFile(file, JSON.stringify(result, null, 2), 'utf-8');
}

async function syncAndTranslate() {
  console.log('Synchronizing and translating /docs using Node.js...');

  await fs.rm(I18N_DIR, { recursive: true, force: true });
  await fs.mkdir(I18N_DIR, { recursive: true });

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(dir, entry.name);
      const relPath = path.relative(DOCS_DIR, srcPath);
      const destPath = path.join(I18N_DIR, relPath);

      if (entry.isDirectory()) {
        await fs.mkdir(destPath, { recursive: true });
        await walk(srcPath);
      } else if (entry.isFile()) {
        await fs.mkdir(path.dirname(destPath), { recursive: true });

        if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
          console.log(`Translating: ${relPath}`);
          const content = await fs.readFile(srcPath, 'utf-8');
          const translated = await processMarkdown(content);
          await fs.writeFile(destPath, translated, 'utf-8');
        } else if (entry.name === '_category_.json') {
          console.log(`Translating category: ${relPath}`);
          const translated = await processCategoryJson(srcPath);
          await fs.writeFile(destPath, translated, 'utf-8');
        } else {
          await fs.copyFile(srcPath, destPath);
        }
      }
    }
  }

  await walk(DOCS_DIR);
  await buildSidebarJson();
  console.log('Synchronization and translation completed successfully!');
}

syncAndTranslate().catch((err) => {
  console.error('Synchronization failed:', err);
  process.exit(1);
});
