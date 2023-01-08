import TextShpere from "components/textSphere"

const Skills = () => {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
          <p className="tag">&#8826;html&#8827;</p>
          <div className="ml-6 [&>div]:ml-12 flex-1 flex flex-col justify-between">
            <p className="tag">&#8826;body&#8827;</p>
            <div>
              <div>
                <p className="tag">&#8826;h2&#8827;</p>
                <h2 className="top-title">
                  Skills & <br /> Experience
                </h2>
                <p className="tag">&#8826;/h2&#8827;</p>
              </div>
              <div>
                <p className="tag">&#8826;p&#8827;</p>
                <p className="ml-6 text-white max-w-xl">Hip Hip</p>
                <p className="tag">&#8826;/p&#8827;</p>
              </div>
            </div>
            <p className="tag">&#8826;/body&#8827;</p>
          </div>
          <p className="tag">&#8826;/html&#8827;</p>
        </div>
      </div>
      <div className="h-full flex-1 w-full">
        <TextShpere />
      </div>
    </div>
  )
}

export default Skills
