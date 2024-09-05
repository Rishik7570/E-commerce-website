import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import { product } from "./LatestCollection"
import Title from "./Title"
import Productitem from "./Productitem"



type props = {
  category:string
  subCategory:string
}

const RelatedProducts = ({category,subCategory}:props) => {

  const context = useContext(ShopContext)
  const [related,setRelated] = useState<product[]>([])

  useEffect(() => {
    if (context && context.products.length > 0) {

     let productscopy = context.products
     productscopy = productscopy.filter((item)=>category===item.category && subCategory===item.subCategory)
     setRelated(productscopy.slice(0,5))
  
    }
  }, [category, subCategory, context])

    
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS"/>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          related.map((item,index)=>(
            <Productitem key={index} _id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
