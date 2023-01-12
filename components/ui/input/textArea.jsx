const MyTextArea = ({ register, error }) => {
  return (
    <div className="w-full relative">
      <textarea
        className="w-full outline-none p-5 focus:border-b-teal-main bg-gray-2000 text-gray-1000 peer
      h-[150px] placeholder-gray-1000 placeholder:capitalize"
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
    </div>
  )
}

export default MyTextArea
