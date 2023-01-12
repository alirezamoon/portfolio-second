import MyButton from "components/ui/button"
import MyInput from "components/ui/input"
import MyTextArea from "components/ui/input/textArea"
import dynamic from "next/dynamic"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import toast from "react-hot-toast"
import { useState } from "react"

const Map = dynamic(() => import("./map"), {
  ssr: false,
})

const successMessage = () => toast.success("Done! thank you")
const errorMessage = () => toast.error("Something went wrong!")

const schema = yup
  .object({
    name: yup.string(),
    email: yup.string().required().email(),
    subject: yup.string(),
    message: yup.string().required(),
  })
  .required()

const Contact = () => {
  const [isLoadingSendMessage, setIsLoadingSendMessage] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    setIsLoadingSendMessage(true)
    fetch("api/message", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          successMessage()
          reset()
        } else throw new Error("some thing went wrong")
        setIsLoadingSendMessage(false)
      })
      .catch(errorMessage)
  }

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-1 flex-col p-2 sm:p-6 md:p-12">
        <div className="[&_.tag]:text-gray-tag flex-1 flex flex-col">
          <p className="tag">&#8826;html&#8827;</p>
          <div className="ml-3 md:ml-6 [&>div]:ml-3 md:[&>div]:ml-6 flex-1 flex flex-col justify-between">
            <p className="tag">&#8826;body&#8827;</p>
            <div>
              <div>
                <p className="tag">&#8826;h2&#8827;</p>
                <h2 className="top-title">Contact me</h2>
                <p className="tag">&#8826;/h2&#8827;</p>
              </div>
              <div>
                <p className="tag">&#8826;p&#8827;</p>
                <p className="ml-3 md:ml-6 text-white">
                  if you have any questions, please don&apos;t hesitate to
                  contact me...
                </p>
                <p className="tag">&#8826;/p&#8827;</p>
              </div>
              <div>
                <p className="tag">&#8826;form&#8827;</p>
                <form
                  className="flex flex-col gap-2 ml-3 md:ml-6 max-w-xl mt-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <MyInput register={register("name")} />
                    <MyInput
                      register={register("email")}
                      type="email"
                      error={Boolean(errors.email)}
                    />
                  </div>
                  <MyInput register={register("subject")} />
                  <MyTextArea
                    register={register("message")}
                    error={Boolean(errors.message)}
                  />
                  <MyButton
                    className="self-end my-3 !rounded-none !min-w-[200px] relative !h-12 tracking-widest"
                    disabled={isLoadingSendMessage}
                  >
                    {isLoadingSendMessage ? (
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline w-4 h-4 mr-3 animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#25262755"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="#252627"
                          />
                        </svg>
                        Loading...
                      </div>
                    ) : (
                      "Send Message!"
                    )}
                  </MyButton>
                </form>
                <p className="tag">&#8826;/form&#8827;</p>
              </div>
              {/* <div className="text-white ml-3 md:ml-6 flex flex-col gap-2 mt-6">
                <p>More Info:</p>
                <p>
                  <span className="text-teal-main">Email: </span>
                  <span>khanamani1998@gmail.com</span>
                </p>
                <p>
                  <span className="text-teal-main">Telegram: </span>
                  <span>@alirez97</span>
                </p>
                <p>
                  <span className="text-teal-main">Phone: </span>
                  <span>+98 913 583-3155</span>
                </p>
              </div> */}
            </div>
            <p className="tag">&#8826;/body&#8827;</p>
          </div>
          <p className="tag">&#8826;/html&#8827;</p>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[400px] [&>div]:w-full [&>div]:h-full [&>div]:bg-[#090909]">
        <Map />
      </div>
    </div>
  )
}

export default Contact
