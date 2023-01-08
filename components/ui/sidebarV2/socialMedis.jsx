import Linkedin from "../svg/linkedin"
import Telegram from "../svg/telegram"

const SocialMedia = () => {
  return (
    <div className="flex md:flex-col gap-3 md:mx-auto md:mb-11 [&>a:hover_path]:fill-teal-main cursor-pointer items-center">
      <a href="https://t.me/alirez97/" target="_blank" rel="noreferrer">
        <Telegram />
      </a>
      <a
        href="https://www.linkedin.com/in/alireza-khanamani-aa84901b9/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
    </div>
  )
}

export default SocialMedia
