const MyButton = ({ onClick, children, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-teal-main text-teal-main rounded min-w-[151px] h-9
                 hover:text-gray-main2 duration-300 relative overflow-hidden group
                disabled:bg-teal-main disabled:text-gray-main2 ${className}`}
      {...props}
    >
      <span className="bg-teal-main h-full absolute top-0 left-0 z-0 w-0 group-hover:w-full duration-300" />
      <span
        className="z-10 bg-transparent absolute top-1/2 left-0 -translate-y-1/2 w-full h-full
                  flex items-center justify-center [&>*]:flex [&>*]:items-center [&>*]:justify-center"
      >
        {children}
      </span>
    </button>
  )
}

export default MyButton
