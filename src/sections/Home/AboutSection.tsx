import Translate from "@docusaurus/Translate";
import Container from "@site/src/components/Container";
import GmailIcon from "@site/static/img/icons/logo_gmail.svg";
import GitHubLogo from "@site/static/img/icons/logo_github.svg";
import Link from "@docusaurus/Link"

const AboutSection = () => {
  return (
    <section className="bg-[#1C2430] pt-20">
      <Container>
        <div className="col-span-full flex flex-col items-center justify-center">
          <h2 className="text-slate-50 tracking-tighter leading-none md:text-4xl">
            <Translate id="aboutsection.title">
              Quem somos?
            </Translate>
          </h2>

          <p className="text-slate-100 tracking-tight text-xl text-center max-w-xl">
            <Translate id="aboutsection.description">
              O Amazonas DataHub é um projeto do Programa Institucional de Bolsas de Iniciação Científica (PIBIC) da Universidade Federal do Amazonas, realizado no curso de Estatística, na área de Probabilidade e Estatística.

              Tendo como orientador o Prof. Dr. Leonardo Brandão Freitas do Nascimento e como discente voluntário do curso de Estatística, Nelson Geraldo Aquino de Carvalho, o projeto visa promover a acessibilidade a dados científicos tratados sobre o Amazonas, disponibilizando uma fonte de informações para pesquisadores, estudantes e profissionais interessados na região, além de oferecer materiais de ensino sobre a região.
            </Translate>
          </p>


          <div>
            <img src={require("@site/static/img/marca_ufam_vetor_negativo.png").default} alt="Logo da Universidade Federal do Amazonas" className="max-w-full max-h-[100px]"/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection;
