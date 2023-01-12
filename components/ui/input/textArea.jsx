const MyTextArea = ({ placeholder, register }) => {
  return (
    <div className="w-full relative">
      <textarea
        className="w-full outline-none p-5 focus:border-b-teal-main bg-gray-2000 text-gray-1000 peer
      h-[150px] placeholder-gray-1000 placeholder:capitalize"
        placeholder={register.name}
        {...register}
      />
      <div className="bg-teal-main h-[1px] w-0 duration-500 peer-focus:w-full" />
    </div>
  )
}

export default MyTextArea
