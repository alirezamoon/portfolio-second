import { useState } from "react"

const sliderItems = [
  <div className="bg-orange-100 w-full" key={1}>
    1
  </div>,
  <div className="bg-orange-200 w-full" key={2}>
    2
  </div>,
  <div className="bg-orange-300 w-full" key={3}>
    3
  </div>,
  <div className="bg-orange-400 w-full" key={4}>
    4
  </div>,
  <div className="bg-orange-500 w-full" key={5}>
    5
  </div>,
  <div className="bg-orange-600 w-full" key={6}>
    6
  </div>,
  <div className="bg-orange-700 w-full" key={7}>
    7
  </div>,
  <div className="bg-orange-800 w-full" key={8}>
    8
  </div>,
  <div className="bg-orange-900 w-full" key={9}>
    9
  </div>,
  <div className="bg-orange-100 w-full" key={10}>
    10
  </div>,
  <div className="bg-orange-200 w-full" key={11}>
    11
  </div>,
  <div className="bg-orange-300 w-full" key={12}>
    12
  </div>,
  <div className="bg-orange-400 w-full" key={13}>
    13
  </div>,
  <div className="bg-orange-500 w-full" key={14}>
    14
  </div>,
  <div className="bg-orange-600 w-full" key={15}>
    15
  </div>,
  <div className="bg-orange-700 w-full" key={16}>
    16
  </div>,
]

const cols = 5

const Slider2 = () => {
  const [page, setPage] = useState(0)
  return (
    <div className="py-5 flex flex-col justify-center items-center w-full">
      <div className="flex bg-amber-900 w-full h-64 max-w-screen-2xl overflow-x-hidden">
        <div
          className={`grow relative flex max-w-full transition duration-200`}
          style={{ transform: `translateX(-${page}%)` }}
        >
          {sliderItems.map((sliderPage, index) => (
            <div
              key={index}
              className={`flex h-full w-full duration-1000`}
              style={{ minWidth: `${+(100 / cols).toFixed(0)}%` }}
            >
              {sliderPage}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1 mt-1">
        <button
          onClick={() => setPage((prev) => prev - +(100 / cols).toFixed(0))}
          className="outline-amber-400 border border-amber-400
           bg-amber-100 px-8 text-amber-900 disabled:opacity-50 transition-opacity"
          disabled={page <= 0}
        >
          prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + +(100 / cols).toFixed(0))}
          disabled={page >= sliderItems.length * +(100 / cols).toFixed(0) - 100}
          className="outline-amber-400 border border-amber-400
           bg-amber-100 px-8 text-amber-900 disabled:opacity-50 transition-opacity"
        >
          next
        </button>
      </div>

      <p>{page}</p>
      <p>{sliderItems.length * +(100 / cols).toFixed(0) - 100}</p>
    </div>
  )
}

export default Slider2
