const MyInput = ({ register, type = "text" }) => {
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
      <div className="bg-teal-main h-[1px] w-0 duration-500 peer-focus:w-full" />
    </div>
  )
}

export default MyInput
