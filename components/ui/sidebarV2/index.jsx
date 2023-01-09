import A from "../a"
import Menu from "./menu"
import SocialMedia from "./socialMedis"

const Sidebar = () => {
  return (
    <div>
      <div
        className="flex md:flex-col flex-wrap bg-gray-darker w-full md:w-16 justify-between items-center
                  px-2 md:px-0 h-16 md:h-full fixed top-0 left-0"
      >
        <A className={"text-4xl md:mt-4 md:mx-auto animate-navLogo"} />
        <Menu />
        <SocialMedia />
      </div>
      <div className="md:hidden h-16 w-full" />
      <div className={`hidden md:block h-screen w-16 bg-red-500`} />
    </div>
  )
}

export default Sidebar
