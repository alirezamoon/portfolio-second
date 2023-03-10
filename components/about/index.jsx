const About = () => {
  return (
    <div className="flex flex-col h-full p-2 sm:p-6 md:p-12">
      <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
        <p className="tag">&#8826;html&#8827;</p>
        <div className="ml-3 md:ml-6 [&>div]:ml-3 md:[&>div]:ml-6 flex-1 flex flex-col justify-between">
          <p className="tag">&#8826;body&#8827;</p>
          <div>
            <div>
              <p className="tag">&#8826;h2&#8827;</p>
              <h2 className="top-title">My, Myself & I</h2>
              <p className="tag">&#8826;/h2&#8827;</p>
            </div>
            <div>
              <p className="tag">&#8826;p&#8827;</p>
              <p className="ml-3 md:ml-6 text-white max-w-xl">Hip Hip</p>
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
