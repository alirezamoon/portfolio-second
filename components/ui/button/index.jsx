const MyButton = ({ onClick, children, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-teal-main text-teal-main rounded px-4 py-1  
                hover:bg-teal-main hover:text-gray-main2 duration-500
                disabled:bg-teal-main disabled:text-gray-main2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default MyButton
