import Container from "@site/src/components/Container";
import GmailIcon from "@site/static/img/icons/logo_gmail.svg";
import GitHubLogo from "@site/static/img/icons/logo_github.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C2430]">
      <Container className="border-solid border-b-0 border-x-0 border-t-2 border-slate-600">
        <div className="col-span-full md:col-span-4 lg:col-span-6 flex items-center justify-items-center h-full">
          <p className="textl-lg md:text-xl text-slate-300 m-0">Desenvolvido por Nelson Carvalho - 2024</p>
        </div>

        <div className="col-span-full md:col-span-4 lg:col-span-6 flex gap-4 justify-center md:justify-end">
          <button className="py-2 px-2 flex flex-row gap-2 bg-slate-50 text-lg rounded-full items-center border-1 border-transparent transition duration-200 hover:border-solid hover:border-1 hover:border-teal-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
            <GmailIcon title="Logo do GMail" />
          </button>
          <button className="p-2 px-4 flex flex-row gap-2 bg-black text-slate-50 text-lg rounded-full items-center border-1 border-transparent transition duration-200 hover:border-solid hover:border-1 hover:border-teal-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
            <GitHubLogo title="Logo do GitHub" />
            <span>
              onelsoncarvalho
            </span>
          </button>

        </div>
      </Container>
    </footer>
  )
}

export default Footer;
