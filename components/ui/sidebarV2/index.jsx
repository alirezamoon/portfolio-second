import A from "../a"
import Menu from "./menu"
import SocialMedia from "./socialMedis"

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-darker w-16 justify-between">
      <A className={"text-4xl mt-4"} />
      <Menu />
      <SocialMedia />
    </div>
  )
}

export default Sidebar
