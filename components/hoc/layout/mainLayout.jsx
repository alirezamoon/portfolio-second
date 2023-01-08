import Sidebar from "../../ui/sidebarV2"

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <main className="w-full h-full bg-gray-main2 p-12">{children}</main>
    </div>
  )
}

export default MainLayout
