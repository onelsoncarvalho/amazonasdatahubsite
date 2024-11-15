import Translate from "@docusaurus/Translate";
import Container from "@site/src/components/Container";
import CTAButtons from "@site/src/components/CTA";

const StudySection = () => {
  return (
    <section className="bg-[#1C2430] bg-hero-light bg-contain bg-no-repeat bg-top">
      <Container>
        <div className="col-span-4 md:col-span-full md:mx-auto flex flex-col items-center justify-center">
          <h2 className="text-slate-50 tracking-tighter leading-none md:text-4xl">
            <Translate id="studysection.title">

              Estude e explore dados do Amazonas
            </Translate>
          </h2>
          <p className="text-slate-300 leading-tight text-xl text-center max-w-prose">
            <Translate id="studysection.description">
              Com esse pacote de código aberto do R, você vai ter acesso a diversas bases de dados para aplicar Deep Learning e métodos estatísticos.
            </Translate>
          </p>

          <img src={require("@site/static/img/carbon.png").default} className="md:max-w-xl rounded-full" alt="Código para gerar o gráfico da Série Temporal do Nível do Rio Negro" />

          <img src={require("@site/static/img/nivel_rionegro_amazonas.jpg").default} alt="Gráfico de Série Temporal do Nível do Rio Negro" />

          <CTAButtons className="mt-8" />
        </div>
      </Container>
    </section>
  )
}

export default StudySection;
