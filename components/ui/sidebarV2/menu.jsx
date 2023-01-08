import { menuData } from "./menuData"
import MenuItem from "./menuItem"

const Menu = () => {
  return (
    <div className="flex md:flex-col items-center gap-6 sm:gap-14 md:gap-0 animate-menuItems">
      {menuData.map((item, index) => (
        <MenuItem data={item} key={index} />
      ))}
    </div>
  )
}

export default Menu
