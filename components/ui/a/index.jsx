const A = ({ className }) => {
  return (
    <a
      className={`block text-6xl text-center cursor-pointer font-logo bg-clip-text  text-transparent ${className}`}
      style={{
        background:
          "linear-gradient(60deg, #fc0853 31%, #fc0853 52%, #08fdd8 52%, #08fdd8 72%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      A
    </a>
  )
}

export default A
