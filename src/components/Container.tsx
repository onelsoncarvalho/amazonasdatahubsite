import { FC } from "react"
import IComponent from "../interfaces/IComponent"

const Container: FC<IComponent> = ({ children, className }) => {
  return (
    <div className={`container px-12 mx-auto py-16 h-full grid gap-12 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ${className}`}>
      {children}
    </div>
  )
}
export default Container
