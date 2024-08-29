import { createContext, ReactNode } from "react";
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
}

export const ShopContext = createContext<shopcontext | null>(null)

const ShopContextProvider = (props:shopprops)=> {

    const currency = '$'
    const deliveryfee = 10

    const value = {
        products,currency,deliveryfee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider