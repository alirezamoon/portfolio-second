import { menuData } from "./menuData"
import MenuItem from "./menuItem"

const Menu = () => {
  return (
    <div className="flex flex-col">
      {menuData.map((item) => (
        <MenuItem data={item} key={item.key} />
      ))}
    </div>
  )
}

export default Menu
