import Translate from "@docusaurus/Translate";
import Container from "@site/src/components/Container";
import CTAButtons from "@site/src/components/CTA";
import MachineLearningIcon from "@site/static/img/icons/machine_learning.svg";

const WhySection = () => {
  const dataItems = [
    { id: 'whysection.item.plottableData', text: <Translate id="whysection.item.plottableData">Dados plotáveis</Translate> },
    { id: 'whysection.item.classificationData', text: <Translate id="whysection.item.classificationData">Dados de Classificação (Regressão Logística)</Translate> },
    { id: 'whysection.item.linearRegressionData', text: <Translate id="whysection.item.linearRegressionData">Dados de Regressão Linear</Translate> },
    { id: 'whysection.item.timeSeriesData', text: <Translate id="whysection.item.timeSeriesData">Dados de Séries Temporais</Translate> },
    { id: 'whysection.item.exploratoryAnalysisData', text: <Translate id="whysection.item.exploratoryAnalysisData">Dados aplicáveis em Análise Exploratória de Dados</Translate> },
    { id: 'whysection.item.educationalUse', text: <Translate id="whysection.item.educationalUse">Você pode usar esse pacote para fins didáticos e pedagógicos.</Translate> },
  ];

  return (
    <section className="bg-slate-50">
      <Container className="">
        <div className="flex flex-col justify-center col-span-4 md:col-span-4 lg:col-span-6 gap-4">
          <h1 className="text-[#1A222C]">
            <Translate id="whysection.title">
              Por que usar o Amazonas DataHub?
            </Translate>
          </h1>
          <p className="text-slate-800 leading-tight text-xl">
            <Translate id="whysection.description">
              Diversas bases de dados são disponibilizadas nesse pacote, e serão úteis tanto no aprendizado, quanto em aplicações de conceitos relacionados à Estatística.
              {/* Esse pacote do R vai te oferecer diversas bases de dados que serão úteis tanto no aprendizado de Análise Exploratória de Dados, quanto na aplicação de métodos de Machine Learning (Aprendizado de Máquina) e Deep Learning. */}
            </Translate>
          </p>

          <ul className="text-slate-800 leading-tight text-xl">
            {dataItems.map((item) => (
              <li key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>

          <CTAButtons />
        </div>
        <div className="flex items-center justify-center col-span-4 md:col-span-4 lg:col-span-6">
          <MachineLearningIcon className="max-w-full max-h-64" title="Machine Learning Illustration" />
        </div>
      </Container >
    </section >
  )
}

export default WhySection;
