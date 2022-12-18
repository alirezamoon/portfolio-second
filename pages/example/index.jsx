import Animation from "components/example/animation"
import Sidebar from "components/example/sidebar"
import Slider from "components/example/slider"
import Slider2 from "components/example/slider2"

const Example = () => {
  return (
    <div className="relative flex">
      <main className="grow">
        <h1 className="mx-auto text-center bg-red-300 text-white p-1">
          Main Content
        </h1>
        {/* <Slider /> */}
        <Slider2 />
      </main>
      <Sidebar />
    </div>
  )
}

export default Example
