const Animation = () => {
  return (
    <div>
      <div className="parent bg-teal-main h-96 w-96 [&:hover_.child]:pause">
        <div className="child bg-red-400 h-1/2 w-1/2 animate-leftToRight"></div>
      </div>
    </div>
  )
}

export default Animation
