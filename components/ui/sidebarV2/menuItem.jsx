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
    <Link
      href={data.route}
      className={`relative w-full h-12 flex justify-center items-center  
                  md:[&:hover>p]:opacity-100 md:[&:hover>svg]:opacity-0 duration-300
                  [&>*]:transition-opacity [&>*]:last:first:duration-300 ${
                    data.route !== "/"
                      ? router.pathname.includes(data.route)
                        ? " [&_path]:fill-teal-main"
                        : ""
                      : router.pathname === "/"
                      ? " [&_path]:fill-teal-main"
                      : ""
                  }`}
    >
      {icon}
      <p
        className="absolute top-1/2 -translate-y-1/2 w-full text-center opacity-0
                      text-teal-main text-sm"
      >
        {data.title}
      </p>
    </Link>
  )
}

export default MenuItem
