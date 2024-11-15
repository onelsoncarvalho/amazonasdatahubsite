import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Container from "@site/src/components/Container";
import ContributeCard from "@site/src/components/ContributeCard";
import { contributeCardDataBr, contributeCardDataEn } from "@site/src/data/cardData";

const ContributeSection = () => {
  const { i18n } = useDocusaurusContext();
  const contributeCardData = i18n.currentLocale === "en" ? contributeCardDataEn : contributeCardDataBr

  return (
    <section className="bg-slate-50 bg-hero-light bg-no-repeat bg-top">
      <Container>
        <div className="col-span-full flex flex-col items-center">
          <h2 className="text-[#1A222C] tracking-tighter leading-none md:text-4xl text-center">
            <Translate id="contributesection.title">
              Faça parte da história
            </Translate>
          </h2>

          <p className="text-slate-800 leading-tight text-xl text-center max-w-prose">
            <Translate id="contributesection.description">
              Se você tem ou conhece alguém que possa disponibilizar uma base de dados com dados do Amazonas, seja qual for a área de pesquisa ou estudo, por exemplo, dados agronômicos, dados climáticos, dados de saúde, entre em contato conosco.
            </Translate>
          </p>

          <div className="mt-8 flex flex-col gap-2 md:gap-8">
            {/* Presentation*/}
            {contributeCardData.map((item, index) => (
              <ContributeCard
                IconSvg={item.IconSvg}
                index={index}
                key={item.title}
                iconUrl={item.iconUrl}
                iconAlt={item.iconAlt}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContributeSection;

