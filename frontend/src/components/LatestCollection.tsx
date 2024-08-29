import { useContext } from "react"
import { ShopContext } from "../context/shopcontext"
import Title from "./Title"


const LatestCollection = () => {

    const context = useContext(ShopContext)
    

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quisquam natus vitae sed</p>
      </div>
    </div>
  )
}

export default LatestCollection
