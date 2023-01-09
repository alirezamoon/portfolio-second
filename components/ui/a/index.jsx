import Link from "next/link"

const A = ({ className, style, ...props }) => {
  return (
    <Link
      className={`block text-center cursor-pointer font-logo w-fit
                  bg-clip-text text-transparent text-6xl ${className}`}
      style={{
        background:
          "linear-gradient(60deg, #fc0853 31%, #fc0853 65%, #08fdd8 65%, #08fdd8 72%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        ...style,
      }}
      {...props}
      href="/"
    >
      A
    </Link>
  )
}

export default A
