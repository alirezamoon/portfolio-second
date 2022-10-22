import Link from "next/link"

const MenuItem = ({ data }) => {
  return (
    <div>
      <button className="text-gray-light w-full  [&>a]:w-full [&>a]:block py-3 border-b border-x-0 border-gray-main first:border-t hover:text-teal-main  duration-300">
        <Link href={data.route}>
          <a>{data.text}</a>
        </Link>
      </button>
    </div>
  )
}

export default MenuItem
