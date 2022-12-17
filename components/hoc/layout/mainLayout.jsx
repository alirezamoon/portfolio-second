import Sidebar from "../../ui/sidebarV2"

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full h-full bg-gray-main2">{children}</main>
    </div>
  )
}

export default MainLayout
