import Carousel from "./Carousel"

const Group = (props) => {
  const {group} = props

  return(
    <div className="mb-10">
      <p className="mb-10 ml-5 text-4xl font-bold dark:text-white">{group.name}</p>
      <Carousel images={group.images} />
    </div>
  )
}

export default Group
