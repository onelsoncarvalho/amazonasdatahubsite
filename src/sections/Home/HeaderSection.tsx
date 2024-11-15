import Container from "@site/src/components/Container";
import CTAButtons from "@site/src/components/CTA";
import Translate from '@docusaurus/Translate';

const HomepageHeader = () => {
  return (
    <header className="w-full h-full md:h-[85vh] bg-[#1C2430] bg-hero-light bg-no-repeat rounded-bl-[5rem]">
      <Container>
        <div className="flex flex-col justify-center col-span-4 md:col-span-4 lg:col-span-6">
          <h1 className="text-slate-50 tracking-tighter leading-none md:text-5xl">
            <Translate id="home.header.title">
              Amazonas DataHub: dados do estado do Amazonas para aplicar Deep Learning
            </Translate>
          </h1>
          <p className="text-slate-300 leading-tight text-xl">
            <Translate id="home.header.subtitle">
              Com esse pacote de código aberto do R, você vai ter acesso a diversas bases de dados para aplicar Deep Learning e métodos estatísticos.
            </Translate>
          </p>
          <div className="flex gap-4">
            <CTAButtons />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-4 md:col-span-4 lg:col-span-6">
          <img src={require("@site/static/img/logo_amazonasdatahub.png").default} alt="Logo do AmazonasDataHub" className="max-w-full max-h-[500px]" />
        </div>
      </Container>
    </header>
  );
}

export default HomepageHeader
