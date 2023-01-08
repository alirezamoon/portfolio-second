import useWindowSize from "components/hooks/windowSize"
import { useEffect, useState } from "react"
import TagCloud from "react-tag-cloud"

const TextShpere = () => {
  const [update, setUpdate] = useState(0)
  const { width } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      setUpdate((prev) => prev + 1)
    }, 3000)
  }, [update])

  return (
    <div className="items-center flex flex-col justify-center py-5 w-full h-full flex-1">
      <div className="flex flex-col h-full max-w-5xl w-full flex-1">
        <TagCloud
          className="flex-1 [&_div]:text-gray-light [&_.teal]:text-[#fc0853] [&_div]:duration-1000 duration-1000"
          style={{
            fontFamily: "sans-serif",
            // fontSize: () => Math.round(Math.random() * 50) + 16,
            fontSize: width > 768 ? 30 : 14,
            padding: 5,
            flex: 1,
            color: "#fff",
          }}
        >
          <div className="teal">JavaScript</div>
          <div>TypeScript</div>
          <div>HTML5</div>
          <div className="teal">ReactJS</div>
          <div>CSS3</div>
          <div>React-Redux</div>
          <div className="teal">NextJS</div>
          <div>Context-Api</div>
          <div>Formik</div>
          <div className="teal">React-Query</div>
          <div>Git</div>
          <div>Restful-Api</div>
          <div className="teal">Redux-Toolkit</div>
          <div>Axios</div>
          <div>Framer-Motion</div>
          <div className="teal">Tailwind-CSS</div>
          <div>Chakra-UI</div>
          <div>React-Bootstap</div>
          <div>Material-UI</div>
        </TagCloud>
      </div>
    </div>
  )
}

export default TextShpere
