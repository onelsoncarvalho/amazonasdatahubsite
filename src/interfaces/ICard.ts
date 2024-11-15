import { ReactNode } from "react";

interface ICard {
  index?: number;
  key?: React.Key,
  iconUrl: string,
  iconAlt: string,
  IconSvg: ReactNode,
  title: string,
  text: string,
  className?: string
}

export default ICard;

