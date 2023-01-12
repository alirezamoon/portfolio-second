import MyButton from "components/ui/button"
import MyInput from "components/ui/input"
import MyTextArea from "components/ui/input/textArea"
import dynamic from "next/dynamic"
import { useForm } from "react-hook-form"

const Map = dynamic(() => import("./map"), {
  ssr: false,
})

const Contact = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    fetch("api/message", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then((res) => console.log(res))
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
                <p className="tag">&#8826;form&#8827;</p>
                <form
                  className="flex flex-col gap-2 ml-3 md:ml-6 max-w-xl"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <MyInput register={register("name")} />
                    <MyInput register={register("email")} />
                  </div>
                  <MyInput register={register("subject")} />
                  <MyTextArea register={register("message")} />
                  <MyButton className="self-end my-3">Send Message!</MyButton>
                </form>
                <p className="tag">&#8826;/form&#8827;</p>
              </div>
              {/* <div className="text-white ml-3 md:ml-6 flex flex-col gap-2 mt-6">
                <p>
                  if you have any questions, please don&apos;t hesitate to
                  contact me...
                </p>
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
      <div className="flex-1 w-full [&>div]:w-full [&>div]:h-full [&>div]:bg-[#090909]">
        <Map />
      </div>
    </div>
  )
}

export default Contact
