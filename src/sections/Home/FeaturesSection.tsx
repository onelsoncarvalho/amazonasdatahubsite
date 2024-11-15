import Container from "@site/src/components/Container";
import Card from "@site/src/components/Card";
import CTAButtons from "@site/src/components/CTA";
import { cardDataBr, cardDataEn } from "@site/src/data/cardData";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const FeaturesSection = () => {
  const { i18n } = useDocusaurusContext();
  const cardData = i18n.currentLocale === "en" ? cardDataEn : cardDataBr
  console.log(cardDataEn[0])

  return (
    <section className="bg-[#1C2430]">
      <Container>
        <div className="col-span-full mx-auto flex flex-col items-center">
          <h2 className="text-slate-50 tracking-tighter leading-none md:text-4xl text-center">
            <Translate id="featuressection.title">
              O conhecimento na palma de suas mãos
            </Translate>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center justify-items-center content-center mt-16">
            {cardData.map(({
              IconSvg,
              iconUrl,
              iconAlt,
              title,
              text
            }) => (
              <Card
                key={title}
                IconSvg={IconSvg}
                iconUrl={iconUrl}
                iconAlt={iconAlt}
                title={title}
                text={text}
              />
            ))}
          </div>

          <CTAButtons className="mt-16" />
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection;
