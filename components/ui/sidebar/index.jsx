import Menu from "./menu"
import SocialMedia from "./socialMedia"

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="w-32 bg-gray-darker flex flex-col h-full justify-between"
    >
      <div className="bg-black h-44 flex flex-col items-center justify-center">
        <p className="text-white text-2xl font-bold mb-3">Alireza</p>
        <p className="text-gray-lighter text-xs">front-end developer</p>
      </div>
      <Menu />
      <SocialMedia />
      <div></div>
    </div>
  )
}

export default Sidebar
