import { createContext, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import CartAction from "./types"
import { ICartLSItem, ICartState, IOrderItem } from "@/app/types/types"
import ITEM_ACTION_TYPES from "./actions"
import localItems from "@/app/data/localItems"



const initialState: ICartState = {
    items: []
}

interface ICartContext {
    items: ICartLSItem[],
    total: number,
    orderItems: IOrderItem[],
    addToCart: (newItem: { id: string }) => void,
    removeFromCart: (itemId: string) => void,
    clearCart: () => void
}

interface ICartProviderProps {
    children: ReactNode
}

export const LS_CART_LABEL = 'cart'



const CartContext = createContext<ICartContext | undefined>(undefined)

const cartReducer = (state: ICartState, action: CartAction): ICartState => {
    switch (action.type) {
        case ITEM_ACTION_TYPES.ADD_ITEM: {
            const { id } = action.payload

            const existingItems = state.items.find(item => item.id === id)

            if(existingItems) {
                return {
                    items: state.items.map(item => item.id === id ? { ...item, amount: item.amount + 1} : item)
                }
            } else {
                return {
                    items: [...state.items, {...action.payload, amount: 1 } ]
                }
            }
        }

        case ITEM_ACTION_TYPES.LOAD_CART: {

            return {
                items: action.payload
            }
        }

        case ITEM_ACTION_TYPES.REMOVE_ITEM: {
            const removeId = action.payload

            const itemToRemove = state.items.find(item => item.id === removeId)

            if(itemToRemove) {
                if(itemToRemove.amount > 1) {
                    return {
                        items: state.items.map(item => item.id !== removeId ? item : {...item, amount: item.amount - 1})
                    }
                }
                
                return {
                    items: state.items.filter(item => item.id !== removeId)
                }
            }
            return state
        }

        case ITEM_ACTION_TYPES.CLEAR_CART: {
            return {
                items: []
            }
        }

        default: {
            return state
        }
    }
}

const CartProvider = ({ children }: ICartProviderProps) => {
    const [state, dispatch] = useReducer<React.Reducer<ICartState, CartAction>>(cartReducer, initialState)
    const [isLoaded, setIsLoaded] = useState(false)

    const { orderItems, total } = useMemo(() => {
        const items = state.items || [];

        // Сотируем с помощью map и разглаживаем массивы с помощью flat - пустые не попадут в результат
        const orderItems: IOrderItem[] = items.flatMap(item => {
          const localItem = localItems.find(li => li.id === item.id);
          return localItem 
            ? [{
                id: item.id,
                title: localItem.title,
                amount: item.amount,
                price: localItem.price,
                image_link: localItem.image_link,
              }] 
            : [];
        });

        const total = orderItems.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        );

        return { orderItems, total };
    }, [state.items]);

    useEffect(()=> {
        const savedCart = localStorage.getItem(LS_CART_LABEL)

        if(savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart) as ICartLSItem[]
                dispatch({ type: ITEM_ACTION_TYPES.LOAD_CART, payload: parsedCart})
            } catch {
                console.error('Не удалось получить корзину из localStorage')
            }
        }
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if(!isLoaded) return;
        localStorage.setItem(LS_CART_LABEL, JSON.stringify(state.items))
    }, [state.items, isLoaded])

    const addToCart = (newItem: { id: string }) => {
        dispatch({ type: ITEM_ACTION_TYPES.ADD_ITEM, payload: newItem })
    }

    const removeFromCart = (itemId: string) => {
        dispatch({ type: ITEM_ACTION_TYPES.REMOVE_ITEM, payload: itemId})
    }

    const clearCart = () => {
        dispatch({ type: ITEM_ACTION_TYPES.CLEAR_CART })
    }

    const value: ICartContext = {
        items: state.items,
        total,
        orderItems,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={ value }>
            { children }
        </CartContext.Provider>
    )
}

const useCart = (): ICartContext => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error('useCart вне CartProvider')
    }
    return context
}

export {
    CartProvider,
    useCart
}