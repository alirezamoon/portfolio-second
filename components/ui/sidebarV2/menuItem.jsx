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
      case "work":
        setIcon(<Message set="bold" primaryColor="#808081" />)
        break

      default:
        break
    }
  }, [data])

  return (
    <div className="w-full">
      <button
        className={`text-gray-light w-full  hover:text-teal-main duration-300 h-12
         ${
           router.pathname.includes(data.route)
             ? "text-teal-main"
             : "text-gray-light"
         } [&:hover>a]:hidden [&:hover>p]:block`}
      >
        <Link
          href={data.route}
          className="w-full [&:hover_path]:fill-teal-main transition-all flex justify-center"
        >
          {icon}
        </Link>
        <p className="hidden leading-6 text-teal-main">{data.title}</p>
      </button>
    </div>
  )
}

export default MenuItem
