import { useCart } from "@/app/contexts/cart/CartContext"
import { useEffect, useState } from "react"
/*
interface IUseCount {
    id: string
}
*/
//{ [count: number, addCount: ()=> void, removeCount: () => void] } 

function useCount(id: string)
: [number, ()=> void, () => void] {
    const {addToCart, items, removeFromCart} = useCart()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const currentItem = items.find(item => item.id === id)
        if(currentItem) setCount(currentItem.amount)
        else setCount(0)
    }, [items])
    //TODO: get count from localStorage

    const addCount = () => {
        addToCart({ id })
        //if(count < 99) setCount(count + 1)
        //else setCount(99)
        //TODO: write value to localStorage
    }

    const removeCount = () => {
        removeFromCart(id)
        //if(count > 0) setCount(count - 1)
        //else setCount(0)
        //TODO: write value to localStorage
    }

    return [count, addCount, removeCount]
} 

export default useCount