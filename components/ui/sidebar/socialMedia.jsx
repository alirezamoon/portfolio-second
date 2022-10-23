import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
const SocialMedia = () => {
  return (
    <div className="flex justify-center [&_svg]:text-gray-light [&_svg:hover]:text-teal-main [&_svg:hover]:duration-500 ">
      <button>
        <FaTelegramPlane />
      </button>
      <button className="mx-2">
        <AiFillInstagram />
      </button>
      <button>
        <FaLinkedinIn />
      </button>
    </div>
  )
}

export default SocialMedia
