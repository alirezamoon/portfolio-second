import A from "../a"
import Menu from "./menu"

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-darker w-16 justify-between">
      <A className={"text-4xl mt-4"} />
      <Menu />
    </div>
  )
}

export default Sidebar
