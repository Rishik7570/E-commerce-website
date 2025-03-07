import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import { assets } from "../assets/assets"
import { useLocation } from "react-router-dom"


const Searchbar = () => {

    const context = useContext(ShopContext)
    const [visible,setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])

  return context?.showsearch && visible ? (
    <div className="border-t border-b text-center bg-gray-50">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input value={context.search} onChange={(e)=>context.setSearch(e.target.value)} type="text"
             placeholder="Search" className="flex-1 outline-none bg-inherit text-sm" />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img onClick={()=>context.setShowsearch(false)} src={assets.cross_icon} alt="" className="w-3 inline cursor-pointer" />
    </div>
  ) : null
}

export default Searchbar
