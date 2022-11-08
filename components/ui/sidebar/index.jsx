import Menu from "./menu"
import SocialMedia from "./socialMedia"

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="w-32 bg-gray-darker flex flex-col h-full justify-between"
    >
      <div className="bg-black h-44 flex flex-col items-center justify-center">
        <a
          className="block text-6xl text-center cursor-pointer font-logo bg-clip-text  text-transparent "
          style={{
            background:
              "linear-gradient(60deg, #fc0853 31%, #fc0853 52%, #08fdd8 52%, #08fdd8 72%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A
        </a>
        <p className="text-white text-2xl font-bold mb-3">Alireza</p>
        <p className="text-gray-lighter text-xs">web developer</p>
      </div>
      <Menu />
      <SocialMedia />
      <div></div>
    </div>
  )
}

export default Sidebar
