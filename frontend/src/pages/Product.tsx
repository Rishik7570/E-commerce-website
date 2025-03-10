import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/shopcontext"
import { product } from "../components/LatestCollection"
import { assets } from "../assets/assets"
import RelatedProducts from "../components/RelatedProducts"


const Product = () => {

const {productId} = useParams()
const context = useContext(ShopContext)
const [productdata,setProductdata] = useState<product | null>(null)
const [image,setImage] = useState('')
const [size,setSize] = useState('')

const fetchproductdata = async()=>{

  if(context){
    context.products.map((item)=>{
      if(item._id === productId){
        setProductdata(item)
        setImage(item.image[0])
        return null
      }
    })
  }

}

useEffect(()=>{
  fetchproductdata()
},[productId,context?.products])

  return productdata ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productdata?.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} alt=""
                   className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

         {/* Product description */}
         <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productdata?.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{context?.currency}{productdata?.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productdata?.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
                {productdata?.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} 
                    key={index}>{item}</button>
                ))}
            </div>
          </div>
          <button onClick={()=>context?.addtocart(productdata._id,size)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
         </div>
      </div>

      {/* Description and Review */}

      <div className="mt-20">
          <div className="flex">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quidem sed est iste exercitationem delectus inventore molestias velit quos autem veritatis voluptatibus, 
                  libero ex doloribus pariatur sapiente nihil, accusamus eos expedita?
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quidem sed est iste exercitationem delectus inventore molestias velit quos autem veritatis voluptatibus, 
                  libero ex doloribus pariatur sapiente nihil, accusamus eos expedita?
              </p>
          </div>
      </div>

      {/* Display related products */}

      <RelatedProducts category={productdata.category} subCategory={productdata.subCategory}/>
      
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
