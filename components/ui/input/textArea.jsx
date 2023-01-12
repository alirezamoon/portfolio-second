const MyTextArea = ({ placeholder, register }) => {
  return (
    <textarea
      className="w-full outline-none p-5 focus:border-b-teal-main bg-gray-2000 text-gray-1000
                h-[150px] placeholder-gray-1000 placeholder:capitalize"
      placeholder={register.name}
      {...register}
    />
  )
}

export default MyTextArea
