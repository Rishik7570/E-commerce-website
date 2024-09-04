import { createContext, ReactNode, useState } from "react";
import { products } from "../assets/assets";

type shopprops = {
    children:ReactNode
}

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
}

export const ShopContext = createContext<shopcontext | null>(null)

const ShopContextProvider = (props:shopprops)=> {

    const currency = '$'
    const deliveryfee = 10
    const [search,setSearch] = useState('')
    const [showsearch,setShowsearch] = useState(false)

    const value = {
        products,currency,deliveryfee,
        search,setSearch,showsearch,setShowsearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider