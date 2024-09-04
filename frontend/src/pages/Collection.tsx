import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import { assets } from "../assets/assets"
import Title from "../components/Title"
import { product } from "../components/LatestCollection"
import Productitem from "../components/Productitem"


const Collection = () => {

  const context = useContext(ShopContext)
  const [showfilter,setShowfilter] = useState(false)
  const [filterproducts,setFilterproducts] = useState<product[]>([])
  const [category,setCategory] = useState<string[]>([])
  const [subcategory,setSubcategory] = useState<string[]>([])
  const [sorttype,setSorttype] = useState('relevant')

  const togglecategory = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }

  const togglesubcategory = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(subcategory.includes(e.target.value)){
      setSubcategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubcategory(prev=> [...prev,e.target.value])
    }
  }

  const applyfilter = ()=>{
    if(context){
      let productcopy = context.products.slice()

      if(context.search && context.showsearch){
        productcopy = productcopy.filter(item=> item.name.toLowerCase().includes(context.search.toLowerCase()))
      }
      if(category.length > 0){
        productcopy = productcopy.filter(item => category.includes(item.category))
      }
      if(subcategory.length > 0){
        productcopy = productcopy.filter(item =>subcategory.includes(item.subCategory))
      }

      setFilterproducts(productcopy)
    }
  }

  const sortbyPrice = ()=>{

    let fpcopy = filterproducts.slice()

    switch(sorttype){
      case 'low-high':
        setFilterproducts(fpcopy.sort((a,b)=>(a.price - b.price)))
        break;

      case 'high-low':
        setFilterproducts(fpcopy.sort((a,b)=>(b.price - a.price)))
        break;
      
      default:
        applyfilter()
        break;
    }

  }

  
  useEffect(()=>{
    applyfilter()
  },[category,subcategory,context?.search,context?.showsearch])

  useEffect(()=>{
    sortbyPrice()
  },[sorttype])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={()=>setShowfilter(!showfilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} />
        </p>

        {/* Category fliter */}
        <div className={`border border-gray-300 pl-5 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col font-light text-sm gap-2 text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglecategory} value={'Men'}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglecategory} value={'Women'}/> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglecategory} value={'Kids'}/> Kids
            </p>
          </div>
        </div>

        {/* Sub-category */}
        <div className={`border border-gray-300 pl-5 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col font-light text-sm gap-2 text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglesubcategory} value={'Topwear'}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglesubcategory} value={'Bottomwear'}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglesubcategory} value={'Winterwear'}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product sort */}
          <select onChange={(e)=>setSorttype(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterproducts.map((item,index)=>(
              <Productitem key={index} _id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
