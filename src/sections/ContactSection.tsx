import Translate from "@docusaurus/Translate";
import Container from "@site/src/components/Container";
import GmailIcon from "@site/static/img/icons/logo_gmail.svg";
import GitHubLogo from "@site/static/img/icons/logo_github.svg";
import Link from "@docusaurus/Link"

const ContactSection = () => {
  return (
    <section className="bg-[#1C2430] py-20">
      <Container>
        <div className="col-span-full flex flex-col items-center justify-center">
          <h2 className="text-slate-50 tracking-tighter leading-none md:text-4xl">
            <Translate id="contactsection.title">
              Entre em contato
            </Translate>
          </h2>

          <p className="text-slate-100 tracking-tight text-xl text-center max-w-lg">
            <Translate id="contactsection.description">
              Tem dúvidas ou deseja contribuir com alguma base de dados? Por favor, entre em contato.
            </Translate>
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <span className="py-2 px-4 flex flex-row gap-2 bg-slate-50 text-lg rounded-full items-center border-1 border-transparent transition duration-200 hover:border-solid hover:border-1 hover:border-teal-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
              <GmailIcon title={"Logo do GMail"} />
              <span className="text-black">
                nelsoncarvalho.negocios@gmail.com
              </span>
            </span>
            <Link to="https://github.com/Nelson-DevStack/amazonasdatahub" className="no-underline p-2 px-4 flex flex-row gap-2 bg-black text-slate-50 text-lg rounded-full items-center border-1 border-transparent transition duration-200 hover:border-solid hover:border-1 hover:border-teal-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
              <GitHubLogo title="Logo do GitHub" />
              <span>
                Nelson-DevStack
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection;
