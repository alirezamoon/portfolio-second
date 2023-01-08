const About = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
        <p className="tag">&#8826;html&#8827;</p>
        <div className="ml-6 [&>div]:ml-12 flex-1 flex flex-col justify-between">
          <p className="tag">&#8826;body&#8827;</p>
          <div>
            <div>
              <p className="tag">&#8826;h2&#8827;</p>
              <h2 className="top-title">My, Myself & I</h2>
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
  )
}

export default About
