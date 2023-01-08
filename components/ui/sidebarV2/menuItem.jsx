import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import HomeIcon from "../svg/homeIcon"
import MessageIcon from "../svg/messageIcon"
import SettingIcon from "../svg/settingIcon"
import UserIcon from "../svg/userIcon"

const MenuItem = ({ data }) => {
  const router = useRouter()

  const [icon, setIcon] = useState(null)

  useEffect(() => {
    switch (data.key) {
      case "home":
        setIcon(<HomeIcon />)
        break
      case "about":
        setIcon(<UserIcon />)
        break
      case "skills":
        setIcon(<SettingIcon />)
        break
      case "contact":
        setIcon(<MessageIcon />)
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
        className="relative w-full h-full flex justify-center items-center  
                  [&:hover>p]:opacity-100 [&:hover>div]:opacity-0"
      >
        <div className="transition-opacity duration-300">{icon}</div>
        <p
          className="absolute top-1/2 -translate-y-1/2 w-full text-center opacity-0
                     transition-opacity duration-300 text-teal-main text-sm"
        >
          {data.title}
        </p>
      </Link>
    </div>
  )
}

export default MenuItem
