import A from "components/ui/a"

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
        <p className="tag">&#8826;html&#8827;</p>
        <div className="ml-6 [&>div]:ml-12 flex-1 flex flex-col justify-between">
          <p className="tag">&#8826;body&#8827;</p>
          <div>
            <div>
              <p className="tag">&#8826;h1&#8827;</p>
              <h1 className="text-white text-7xl font-bold ml-6">
                <span>Hi,</span>
                <br />
                <span>I'm </span>
                <A className="!inline-block !text-7xl" />
                <span>lireza</span>
                <br />
                <span>web developer</span>
              </h1>
              <p className="tag">&#8826;/h1&#8827;</p>
            </div>
            <div>
              <p className="tag">&#8826;p&#8827;</p>
              <p className="ml-6 text-gray-1000">
                Front End Developer / ReactJs / NextJs
              </p>
              <p className="tag">&#8826;/p&#8827;</p>
            </div>
            <div className="button">
              <p className="tag">&#8826;button&#8827;</p>
              <button
                className="border border-teal-main text-teal-main rounded px-4 py-1 ml-6 my-1
                                [&:hover]:bg-teal-main [&:hover]:text-gray-main2 transition-colors duration-300"
              >
                Contact me!
              </button>
              <p className="tag">&#8826;/button&#8827;</p>
            </div>
          </div>
          <p className="tag">&#8826;/body&#8827;</p>
        </div>
        <p className="tag">&#8826;/html&#8827;</p>
      </div>
    </div>
  )
}

export default Home
