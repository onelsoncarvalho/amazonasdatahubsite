import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../sections/Home/HeaderSection';
import StudySection from "../sections/Home/StudySection";
import FeaturesSection from "../sections/Home/FeaturesSection";
import ContributeSection from "../sections/Home/ContributeSection";
import ContactSection from "../sections/ContactSection";
import WhySection from '../sections/Home/WhySection';
import CustomFooter from "../components/CustomFooter"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Página Inicial`}
      description={`${siteConfig.tagline}`}>
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V8XCSGBSKS"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V8XCSGBSKS');
        </script>
      </head>
      <main>
        <HomepageHeader />
        <WhySection />
        <StudySection />
        <FeaturesSection />
        <ContributeSection />
        <ContactSection />
        <CustomFooter />
      </main>
    </Layout>
  );
}

