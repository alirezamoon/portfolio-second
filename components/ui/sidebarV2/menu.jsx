import { Home, Message, User } from "react-iconly"
import { menuData } from "./menuData"
import MenuItem from "./menuItem"

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      {menuData.map((item) => (
        <MenuItem data={item} />
      ))}
    </div>
  )
}

export default Menu
