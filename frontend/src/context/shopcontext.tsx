import { createContext, ReactNode, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

type shopprops = {
    children:ReactNode
}

type CartItems = {
    [itemId: string]: {
      [size: string]: number;
    };
  };

type shopcontext = {
    products: {
        _id: string;
        name: string;
        description: string;
        price: number;
        image: string[];
        category: string;
        subCategory: string;
        sizes: string[];
        date: number;
        bestseller: boolean;
    }[]
    currency: string
    deliveryfee: number
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    showsearch: boolean
    setShowsearch: React.Dispatch<React.SetStateAction<boolean>>
    cartitems:CartItems
    addtocart: (itemId: string, size: string) => void
    getcartcount: () => number
}

export const ShopContext = createContext<shopcontext | null>(null)

const ShopContextProvider = (props:shopprops)=> {

    const currency = '$'
    const deliveryfee = 10
    const [search,setSearch] = useState('')
    const [showsearch,setShowsearch] = useState(false)
    const [cartitems,setCartitems] = useState<CartItems>({})

    const addtocart = (itemId: string, size: string) => {
        if(!size){
            toast.error("Size not selected")
            return;
        }

        setCartitems((prevCartitems) => {

          const cartdata = structuredClone(prevCartitems);
          if (cartdata[itemId]) {
            if (cartdata[itemId][size]) {
              cartdata[itemId][size] += 1;
            } else {
              cartdata[itemId][size] = 1;
            }
          } else {
            cartdata[itemId] = { [size]: 1 };
          }
          return cartdata;
        });
      };

    const getcartcount = ()=>{
        let totalcount = 0
        for(const items in cartitems){
            for(const item in cartitems[items]){
                try {
                    if(cartitems[items][item] > 0){
                        totalcount += cartitems[items][item]
                    }
                } catch (error) {
                   console.error(error)
                }
            }
        }
        return totalcount
    }

    const updateQuantity = async(itemId:string,size:string,quantity:number)=>{
      
    }

    const value = {
        products,currency,deliveryfee,
        search,setSearch,showsearch,setShowsearch,
        cartitems,
        addtocart,getcartcount
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider