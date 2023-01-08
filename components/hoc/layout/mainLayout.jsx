import useWindowSize from "components/hooks/windowSize"
import Sidebar from "../../ui/sidebarV2"

const MainLayout = ({ children }) => {
  const { width, height } = useWindowSize()

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{ height: width > 768 ? height - 1 : height }}
    >
      <Sidebar />
      <main className="w-full bg-gray-main2 p-2 sm:p-6 md:p-12 flex-1 flex flex-col [&>div]:h-full [&>div]:flex-1">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
