const Contact = () => {
  return (
    <div className="flex flex-col">
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
            <div className="text-white ml-3 md:ml-6 flex flex-col gap-2 mt-6">
              <p>
                if you have any questions, please don&apos;t hesitate to contact
                me...
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
            </div>
          </div>
          <p className="tag">&#8826;/body&#8827;</p>
        </div>
        <p className="tag">&#8826;/html&#8827;</p>
      </div>
    </div>
  )
}

export default Contact