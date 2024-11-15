import { FC, ReactNode } from "react"
import ICard from "../interfaces/ICard"
interface ICardNew extends ICard {
  IconSvg: ReactNode
}

const Card: FC<ICardNew> = ({ IconSvg, iconUrl, iconAlt, title, text, className }) => {
  console.log(IconSvg)

  return (
    <div className={`bg-slate-100 opacity-90 max-w-full rounded-lg p-8 ${className} h-full max-h-full`}>
      <div className="flex flex-col gap-2">
        <div className="max-w-58">
          {IconSvg}
        </div>
        <h3 className="uppercase">{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Card;
