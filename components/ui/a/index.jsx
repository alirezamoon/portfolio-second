import Link from "next/link"

const A = ({ className }) => {
  return (
    <Link
      className={`block text-center cursor-pointer font-logo w-fit
                  bg-clip-text text-transparent text-6xl ${className}`}
      style={{
        background:
          "linear-gradient(60deg, #fc0853 31%, #fc0853 65%, #08fdd8 65%, #08fdd8 72%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      href="/"
    >
      A
    </Link>
  )
}

export default A
