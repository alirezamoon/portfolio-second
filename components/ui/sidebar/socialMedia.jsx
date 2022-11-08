import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { motion } from "framer-motion"

const SocialMedia = () => {
  const vTelegram = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeOut" },
    },
    hidden: { x: -100, y: 120, opacity: 0 },
  }
  return (
    <div className="flex justify-center [&_svg]:text-gray-light [&_svg:hover]:text-teal-main [&_svg:hover]:duration-500 ">
      {/* <button className="translate-y-10 duration-1000 animate-wiggle"> */}
      <motion.button
        layout
        animate="visible"
        initial="hidden"
        variants={vTelegram}
      >
        <FaTelegramPlane />
      </motion.button>
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
