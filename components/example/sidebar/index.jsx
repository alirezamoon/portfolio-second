import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`hidden md:block transition-all duration-1000 ${
          isOpen ? "w-96" : "w-32"
        }`}
      >
        <div
          className={` h-full fixed top-0 right-0 bg-blue-400 p-1 transition-all duration-1000 ${
            isOpen ? "w-96" : "w-32"
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-400 text-white p-1"
          >
            toggle
          </button>
          {isOpen && (
            <ul className={isOpen ? "animate-opacity" : "animate-opacityR"}>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
            </ul>
          )}
          {!isOpen && (
            <h1 className={isOpen ? "animate-opacityR" : "animate-opacity"}>
              sidebar
            </h1>
          )}
        </div>
      </div>
      <div className="md:hidden">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 top-0 bg-red-400 text-white p-1"
          >
            open
          </button>
        )}
        <div
          className={`w-96 bg-blue-400 h-full fixed top-0 right-0 p-5 border-l border-white ${
            isOpen ? "animate-sidebarOpen" : "animate-sidebarClose"
          }`}
        >
          <div className="flex justify-between">
            <h1 className="text-white">sidebar</h1>
            <p
              className="text-white font-bold cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              X
            </p>
          </div>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
