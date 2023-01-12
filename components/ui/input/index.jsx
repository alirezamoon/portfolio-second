const MyInput = ({ register, type = "text", error }) => {
  console.log("error:", error)
  return (
    <div className="w-full relative">
      <input
        type={type}
        autoComplete="off"
        className="h-12 w-full outline-none px-5 bg-gray-2000 text-gray-1000 peer 
      placeholder-gray-1000 placeholder:capitalize"
        placeholder={register.name}
        {...register}
      />
      <div
        className={` h-[1px] duration-500 ${
          error
            ? " bg-red-main w-full "
            : " bg-teal-main peer-focus:w-full w-0 "
        }`}
      />
      {/* {error && <div className="bg-red-main h-[1px] duration-500 w-full" />} */}
    </div>
  )
}

export default MyInput
