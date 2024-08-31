import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import Title from "./Title"
import Productitem from "./Productitem";


type latest = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean
}

const LatestCollection = () => {

    const context = useContext(ShopContext)
    const [latestProducts,setLatestProducts] = useState<latest[]>([])

    useEffect(()=>{
      if(context){
      setLatestProducts(context.products.slice(0,10))
      }
    },[])
    

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quisquam natus vitae sed</p>
      </div>

      {/* Rendering products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {
          latestProducts.map((item,index)=>(
            <Productitem key={index} _id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
