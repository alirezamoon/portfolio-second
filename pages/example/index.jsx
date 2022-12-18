import Animation from "components/example/animation"
import Sidebar from "components/example/sidebar"
import Slider from "components/example/slider"

const Example = () => {
  return (
    <div className="relative flex">
      <main className="grow">
        <h1 className="mx-auto text-center bg-red-300 text-white p-1">
          Main Content
        </h1>
        <Slider />
      </main>
      <Sidebar />
    </div>
  )
}

export default Example
