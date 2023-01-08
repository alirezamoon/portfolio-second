import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Home, Message, Setting, User } from "react-iconly"

const MenuItem = ({ data }) => {
  const router = useRouter()

  const [icon, setIcon] = useState(null)

  useEffect(() => {
    switch (data.key) {
      case "home":
        setIcon(<Home set="bold" primaryColor="#808081" />)
        break
      case "about":
        setIcon(<User set="bold" primaryColor="#808081" />)
        break
      case "skills":
        setIcon(<Setting set="bold" primaryColor="#808081" />)
        break
      case "contact":
        setIcon(<Message set="bold" primaryColor="#808081" />)
        break

      default:
        break
    }
  }, [data])

  return (
    <div
      className={`w-full duration-300 h-12 md:[&:hover>.menu-item-icon]:hidden md:[&:hover>.menu-item-text]:flex
                ${
                  data.route !== "/"
                    ? router.pathname.includes(data.route)
                      ? " [&_path]:fill-teal-main"
                      : ""
                    : router.pathname === "/"
                    ? " [&_path]:fill-teal-main"
                    : ""
                }`}
    >
      <Link
        href={data.route}
        className="w-full h-full transition-all flex justify-center items-center
                [&:hover_path]:fill-teal-main  menu-item-icon"
      >
        {icon}
      </Link>
      <Link
        href={data.route}
        className="hidden text-teal-main menu-item-text h-full w-full text-center justify-center items-center"
      >
        {data.title}
      </Link>
    </div>
  )
}

export default MenuItem
