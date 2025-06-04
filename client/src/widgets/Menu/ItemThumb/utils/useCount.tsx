import { useState } from "react"

interface IUseCount {
    id: string
}

//{ [count: number, addCount: ()=> void, removeCount: () => void] } 

function useCount(id: string)
: [number, ()=> void, () => void] {
    const [count, setCount] = useState(0)
    //TODO: get count from localStorage

    const addCount = () => {
        if(count < 99) setCount(count + 1)
        else setCount(99)
        //TODO: write value to localStorage
    }

    const removeCount = () => {
        if(count > 0) setCount(count - 1)
        else setCount(0)
        //TODO: write value to localStorage
    }

    return [count, addCount, removeCount]
} 

export default useCount