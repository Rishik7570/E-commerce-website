import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import Title from "../components/Title";
import { assets } from "../assets/assets";


type cart = {
  _id: string;
  size: string;
  quantity: number;
}


const Cart = () => {

  const context = useContext(ShopContext)
  const [cartdata,setCartdata] = useState<cart[]>([])

  useEffect(()=>{
    let tempdata:cart[] = []

    for(const items in context?.cartitems){
      for(const item in context.cartitems[items]){
        if(context.cartitems[items][item] > 0){
          tempdata.push({
            _id:items,
            size:item,
            quantity:context.cartitems[items][item]
          })
        }
      }
    }
    setCartdata(tempdata);
    

  },[context?.cartitems])

  return(
    <div className="border-t pt-14">

      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART"/>
      </div>

      <div className="">
        {
          cartdata.map((item,index)=>{

            const productdata = context?.products.find((product)=> product._id === item._id)

            return (
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img src={productdata?.image[0]} alt="" className="w-16 sm:w-20" />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productdata?.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{context?.currency}{productdata?.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input type="text" min={1} defaultValue={item.quantity} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" />
                <img src={assets.bin_icon} alt="" className="w-4 mr-4 sm:w-5 cursor-pointer" />
              </div>
            )

          })
        }
      </div>
      
    </div>
  )
}

export default Cart
