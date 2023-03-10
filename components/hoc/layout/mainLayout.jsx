import useWindowSize from "components/hooks/windowSize"
import Sidebar from "../../ui/sidebarV2"

const MainLayout = ({ children }) => {
  const { width, height } = useWindowSize()

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{ minHeight: width > 768 ? height - 1 : height }}
    >
      <Sidebar />
      <main className="w-full bg-gray-main2 flex-1 flex flex-col [&>div]:h-full [&>div]:flex-1">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
