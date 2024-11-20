import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"
import { FC } from "react"

interface ICTAButtons {
  className?: string
}

const CTAButtons: FC<ICTAButtons> = ({ className }) => {
  return (

    <div className={`flex gap-4 ${className}`}>
      <Link to="/docs/tutorial#instalando-o-amazonasdatahub" className={"text-slate-100 bg-cyan-500 rounded-xl border-solid border-transparent shadow-sm shadow-cyan-500/50 text-base cursor-pointer border-1 border-transparent transition duration-200 hover:border-solid hover:border-1 hover:border-teal-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"}>
        <button className="w-full h-full bg-transparent border-0 py-2 px-4 text-base cursor-pointer"><Translate id="cta.tutorial">Tutorial</Translate></button>
      </Link>
      <Link to="/docs/dados/overview" className={"text-slate-900 bg-teal-400 rounded-xl shadow-sm shadow-teal-400/50 text-base border-solid border-1 border-transparent shadow-lg shadow-cyan-500/50 text-base cursor-pointer border-1 border-transparent transition duration-200 hover:border-solid hover:border-cyan-400 hover:shadow-lg hover:shadow-teal-500/50 cursor-pointer"}>
        <button className="w-full h-full bg-transparent border-0 py-2 px-4 text-base cursor-pointer"><Translate id="cta.docs">Ler a Documentação</Translate></button>
      </Link>
    </div >
  )
}

export default CTAButtons
