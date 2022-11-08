import Link from "next/link"
import { useRouter } from "next/router"

const MenuItem = ({ data }) => {
  const router = useRouter()
  return (
    <div>
      <button
        className={`text-gray-light w-full border-b border-x-0 border-gray-main first:border-t hover:text-teal-main duration-300 ${
          router.pathname.includes(data.route)
            ? "text-teal-main"
            : "text-gray-light"
        } `}
      >
        <Link href={data.route}>
          <a className="h-full w-full block py-3">{data.text}</a>
        </Link>
      </button>
    </div>
  )
}

export default MenuItem
