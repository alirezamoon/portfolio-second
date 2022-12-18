import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-iconly"

const sliderItems = [
  <div className="bg-orange-100">1</div>,
  <div className="bg-orange-200">2</div>,
  <div className="bg-orange-300">3</div>,
  <div className="bg-orange-400">4</div>,
  <div className="bg-orange-500">5</div>,
  <div className="bg-orange-600">6</div>,
  <div className="bg-orange-700">7</div>,
  <div className="bg-orange-800">8</div>,
  <div className="bg-orange-900">9</div>,
  <div className="bg-orange-100">10</div>,
  <div className="bg-orange-200">11</div>,
  <div className="bg-orange-300">12</div>,
  <div className="bg-orange-400">13</div>,
  <div className="bg-orange-500">14</div>,
  <div className="bg-orange-600">15</div>,
  <div className="bg-orange-700">16</div>,
]

const Slider = () => {
  const [page, setPage] = useState(0)
  return (
    <div className="py-5">
      <div className="flex bg-amber-100">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="hidden md:block 
           bg-amber-100 px-1 text-amber-900 disabled:opacity-50 transition-opacity"
          disabled={page === 0}
        >
          <ChevronLeft set="bulk" primaryColor="rgb(120, 53, 15)" />
        </button>
        <div
          className="grow relative flex justify-center
       [&_.active]:-translate-x-1/2 [&_.active]:left-1/2 overflow-hidden"
        >
          {/* set height here */}
          <div className="w-full h-64" />
          {sliderItems.map((sliderPage, index) => (
            <div
              key={index}
              className={`flex justify-around gap-1 absolute top-0 w-full h-full
             transition-all duration-1000 ${
               page <= index
                 ? "left-1/2 translate-x-full "
                 : "left-0 -translate-x-full "
             } 
                  ${page === index ? " active " : ""}`}
            >
              <div className="w-full h-full flex justify-center [&>*]:grow">
                {sliderPage}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === sliderItems.length - 1}
          className="hidden md:block 
          bg-amber-100 px-1 text-amber-900 disabled:opacity-50 transition-opacity"
        >
          <ChevronRight set="bulk" primaryColor="rgb(120, 53, 15)" />
        </button>
      </div>

      <div className="flex justify-center gap-1 mt-1">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="outline-amber-400 border border-amber-400
           bg-amber-100 px-8 text-amber-900 disabled:opacity-50 transition-opacity"
          disabled={page === 0}
        >
          prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === sliderItems.length - 1}
          className="outline-amber-400 border border-amber-400
           bg-amber-100 px-8 text-amber-900 disabled:opacity-50 transition-opacity"
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Slider
