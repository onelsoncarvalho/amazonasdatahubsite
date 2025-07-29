import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Container from "@site/src/components/Container";
import CTAButtons from "@site/src/components/CTA";
import dados from "../../data/idam_mandioca.json";
import aidsData from "../../data/aids_wider_count.json";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Label,
  Legend
} from 'recharts';

const StudySection = () => {

  // <img src={require("@site/static/img/study_plot.png").default} className="rounded-lg" alt="Gráfico de Série Temporal do Nível do Rio Negro" />
  const { i18n } = useDocusaurusContext();
  const plot1BrData = {
    x: 'Área plantada',
    y: 'Área colhida'
  }
  const plot1EnData = {
    x: 'Planted area',
    y: 'Harvested area'
  };

  const plot2EnData = {
    x: 'Year',
    y: 'Case count',
    female: 'Female',
    male: 'Male',
  };
  const plot2BrData = {
    x: 'Ano',
    y: 'Contagem de casos',
    female: 'Feminino',
    male: 'Masculino',
  };

  const plot1Data = i18n.currentLocale === "en" ? plot1EnData : plot1BrData;
  const plot2Data = i18n.currentLocale === "en" ? plot2EnData : plot2BrData;

  const imageName = i18n.currentLocale === "en" ? "code_cassava.png" : "code.png";
  const imageName2 = i18n.currentLocale === "en" ? "code_aids.png" : "codigo_grafico_aids.png";
  
  return (
    <section className="bg-[#1C2430] bg-hero-light bg-contain bg-no-repeat bg-top">
      <Container>
        <div className="col-span-4 md:col-span-full md:mx-auto flex flex-col items-center justify-center">
          <h2 className="text-slate-50 tracking-tighter leading-none md:text-4xl text-center">
            <Translate id="studysection.title">
              Estude e explore dados do Amazonas
            </Translate>
          </h2>
          <p className="text-slate-300 leading-tight text-xl text-center max-w-prose mb-10">
            <Translate id="studysection.description">
              {/* Com esse pacote de código aberto do R, você vai ter acesso a diversas bases de dados para aplicar Deep Learning e métodos estatísticos. */}
              As bases de dados diversificadas trazem uma gama de possibilidades e aplicações
            </Translate>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className="lg:h-1/2">
                <img src={require(`@site/static/img/${imageName}`).default} className="w-full rounded-sm mb-10 max-w-md lg:max-w-full" alt="Código para gerar o gráfico de dispersão da Produção de Mandioca no Amazonas, onde verifica-se a relação da área plantada com a área colhida" />
              </div>

          
              <div className="w-full h-auto lg:h-1/2">
                <div>
                  <h3 className="text-center text-slate-50 mb-0">
                    <Translate id="study.plot1Title">
                    Produção de Mandioca no Amazonas
                    </Translate>
                  </h3>
                  <p className="text-slate-200 text-center">
                    <Translate id="study.plot1Subtitle">
                    Área plantada x Área colhida
                    </Translate>
                  </p>
                </div>
              
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart
                    margin={{ top:20, right: 20, bottom: 20, left: 20, }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="planted" name="Área plantada" unit="ha" stroke="#FAFAFA">
                      <Label value={plot1Data.x} offset={5} position="bottom" fill="#0BEBAF"/>
                    </XAxis>
                    <YAxis type="number" dataKey="harvested" name="Área colhida" unit="ha" stroke="#FAFAFA">
                      <Label value={plot1Data.y} offset={10} position="left" angle={-90} fill="#0BEBAF" style={{ textAnchor: 'middle' }} />
                    </YAxis>
                    <Tooltip cursor={{ strokeDasharray: '3 3'}} />
                    <Scatter name="Gráfico de Dispersão" data={dados} fill="#0BEBAF" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="lg:h-1/2">
                <img src={require(`@site/static/img/${imageName2}`).default} className="w-full h-fit rounded-sm mb-10 max-w-md lg:max-w-full" alt="Código para gerar o gráfico da Série Temporal da contagem de casos de AIDS em Manaus, de 2011 a 2023" />
              </div>
              
              <div className="w-full h-auto lg:h-1/2">

                <div>
                  <h3 className="text-center text-slate-50 mb-0">
                    <Translate id="study.plot2Title">
                      Contagem de casos de AIDS em Manaus (2011-2023)
                    </Translate>
                  </h3>
                  <p className="text-slate-200 text-center">
                    <Translate id="study.plot2Subtitle">
                      Agrupado por gênero
                    </Translate>
                  </p>
                </div>
                
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={aidsData} margin={{ right: 25, left: 25, top: 10, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="0 0" vertical={false} fillOpacity={0.0} fill="#fafafa" />
                    <XAxis dataKey="year" stroke="#FAFAFA">
                      <Label value={plot2Data.x} position="bottom" fill="#fafafa" />
                    </XAxis>
                    <YAxis stroke="#FAFAFA">
                      <Label value={plot2Data.y} position="left" angle={-90} style={{ textAnchor: 'middle' }} fill="#fafafa" />
                    </YAxis>
                    <Legend verticalAlign="top" height={36} />
                    <Line type="monotone" name={plot2Data.male} dataKey="male_count" stroke="tomato" animationDuration={5000} animationBegin={400} strokeWidth={3} />
                    <Line type="monotone" name={plot2Data.female} dataKey="female_count" stroke="#facc15" animationDuration={5000} animationBegin={400} strokeWidth={3} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <CTAButtons className="mt-8 md:mt-16" />
        </div>
      </Container>
    </section>
  )
}

export default StudySection;
