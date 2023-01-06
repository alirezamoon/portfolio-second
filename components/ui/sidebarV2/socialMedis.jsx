import Linkedin from "../svg/linkedin"
import Telegram from "../svg/telegram"

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto mb-11 [&>a:hover_path]:fill-teal-main cursor-pointer">
      <a href="https://t.me/alirez97/" target="_blank">
        <Telegram />
      </a>
      <a
        href="https://www.linkedin.com/in/alireza-khanamani-aa84901b9/"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  )
}

export default SocialMedia
