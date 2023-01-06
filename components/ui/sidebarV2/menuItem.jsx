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
    <div>
      <button
        className={`text-gray-light w-full  hover:text-teal-main duration-300 ${
          router.pathname.includes(data.route)
            ? "text-teal-main"
            : "text-gray-light"
        } `}
      >
        <Link href={data.route} className="h-full w-full block py-3 [&:hover_path]:fill-teal-main transition-all">
            {icon}
        </Link>
      </button>
    </div>
  )
}

export default MenuItem
