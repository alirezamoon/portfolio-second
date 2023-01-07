const A = ({ className }) => {
  return (
    <a
      className={`block text-center cursor-pointer font-logo w-fit
                  bg-clip-text text-transparent text-6xl ${className}`}
      style={{
        background:
          "linear-gradient(60deg, #fc0853 31%, #fc0853 65%, #08fdd8 65%, #08fdd8 72%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      A
    </a>
  )
}

export default A
