const MyInput = ({ placeholder, register }) => {
  return (
    <input
      className="h-12 w-full outline-none px-5 focus:border-b-teal-main bg-gray-2000 text-gray-1000
                placeholder-gray-1000 placeholder:capitalize"
      placeholder={register.name}
      {...register}
    />
  )
}

export default MyInput
