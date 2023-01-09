import A from "components/ui/a"
import Link from "next/link"
import { useState } from "react"

const Home = () => {
  const [bgAuto, setBgAuto] = useState("!bg-[length:200%_auto]")

  return (
    <div className="flex justify-between p-2 sm:p-6 md:p-12">
      <div className="flex flex-col">
        <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
          <p className="tag">&#8826;html&#8827;</p>
          <div className="ml-3 md:ml-6 [&>div]:ml-3 md:[&>div]:ml-6 flex-1 flex flex-col justify-between">
            <p className="tag">&#8826;body&#8827;</p>
            <div>
              <div>
                <p className="tag">&#8826;h1&#8827;</p>
                <h1 className="text-white text-5xl md:text-7xl font-bold ml-3 md:ml-6">
                  <span>Hi,</span>
                  <br />
                  <span>I&apos;m </span>
                  <A
                    className={`!inline-block !text-5xl md:!text-7xl animate-logo lg:animate-none ${bgAuto} lg:!bg-auto`}
                    onAnimationEnd={() => setBgAuto("!bg-auto")}
                  />
                  <span>lireza</span>
                  <br />
                  <span>web developer</span>
                </h1>
                <p className="tag">&#8826;/h1&#8827;</p>
              </div>
              <div>
                <p className="tag">&#8826;p&#8827;</p>
                <p className="ml-3 md:ml-6 text-gray-1000">
                  Front End Developer / ReactJs / NextJs
                </p>
                <p className="tag">&#8826;/p&#8827;</p>
              </div>
              <div className="button">
                <p className="tag">&#8826;button&#8827;</p>
                <button
                  className="border border-teal-main text-teal-main rounded px-4 py-1 ml-3 md:ml-6 my-1
                                [&:hover]:bg-teal-main [&:hover]:text-gray-main2 transition-colors duration-300"
                >
                  <Link href="/contact">Contact me!</Link>
                </button>
                <p className="tag">&#8826;/button&#8827;</p>
              </div>
            </div>
            <p className="tag">&#8826;/body&#8827;</p>
          </div>
          <p className="tag">&#8826;/html&#8827;</p>
        </div>
      </div>
      <div className="hidden lg:flex overflow-hidden flex-1 justify-center items-center">
        <A
          className={`animate-logo text-9xl -rotate-[30deg] lg:!text-[400px] xl:!text-[600px] ${bgAuto}`}
          onAnimationEnd={() => setBgAuto("!bg-auto")}
        />
      </div>
    </div>
  )
}

export default Home
