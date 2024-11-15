import { FC, ReactNode } from "react";
import ICard from "../interfaces/ICard";

interface IContributeCard extends ICard {
  index: number,
  IconSvg: ReactNode
}

const ContributeCard: FC<IContributeCard> = ({ IconSvg, iconUrl, iconAlt, title, text, index }) => {
  console.log(IconSvg)
  let gridOrder = "md:order-first"

  if (index % 2 != 0) {
    gridOrder = "md:order-last"
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center py-8`}>
      <div className={`${gridOrder}`}>
        <h3 className="text-[#1C2430] text-3xl">{title}</h3>
        <p className="text-slate-800 leading-tight text-xl">
          {text}
        </p>
      </div>
      <div className="flex justify-center items-center">
        {IconSvg}
        {/*<img src={iconUrl} alt={iconAlt} className="mx-auto max-w-32" / >*/}
      </div>
    </div>
  )
}

export default ContributeCard;
