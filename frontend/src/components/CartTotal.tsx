import { useContext } from "react"
import { ShopContext } from "../context/shopcontext"
import Title from "./Title"


const CartTotal = () => {

    const context = useContext(ShopContext)
    

  return context ? (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS"/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p>SUBTOTAL</p>
            <p>{context?.currency} {context?.gettotalamount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p>Shipping fee</p>
            <p>{context?.currency} {context?.deliveryfee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <b>Total</b>
            <b>{context?.currency} {context?.gettotalamount() === 0 ? 0 : context.gettotalamount() + context.deliveryfee}.00</b>
        </div>
      </div>
    </div>
  ) : <></>
}

export default CartTotal
