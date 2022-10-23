import Sidebar from "../../ui/sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full h-full bg-gray-dark">{children}</main>
    </div>
  )
}

export default MainLayout
