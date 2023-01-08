import Sidebar from "../../ui/sidebarV2"

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="w-full min-h-full bg-gray-main2 p-2 sm:p-6 md:p-12 flex-1 [&>div]:h-full">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
