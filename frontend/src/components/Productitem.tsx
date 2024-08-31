import { useContext } from "react"
import { ShopContext } from "../context/shopcontext"
import { Link } from "react-router-dom"


type productprops = {
    _id:string
    name:string
    image:string[]
    price:number
}

const Productitem = ({_id,name,image,price}:productprops) => {

    const context = useContext(ShopContext)

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out" />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{context?.currency}{price}</p>
    </Link>
  )
}

export default Productitem
