import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../sections/Home/HeaderSection';
import StudySection from "../sections/Home/StudySection";
import FeaturesSection from "../sections/Home/FeaturesSection";
import ContributeSection from "../sections/Home/ContributeSection";
import ContactSection from "../sections/ContactSection";
import WhySection from '../sections/Home/WhySection';
import CustomFooter from "../components/CustomFooter"
import AboutSection from '../sections/Home/AboutSection.tsx'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Página Inicial`}
      description={`${siteConfig.tagline}`}>
      <main>
        <HomepageHeader />
        <WhySection />
        <StudySection />
        <FeaturesSection />
        <ContributeSection />
        <AboutSection />
        <ContactSection />
        <CustomFooter />
      </main>
    </Layout>
  );
}

