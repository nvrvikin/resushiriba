import { ICartLSItem } from "@/app/types/types";
import ITEM_ACTION_TYPES from "./actions";

type CartAction = 
    | { type: ITEM_ACTION_TYPES.ADD_ITEM; payload: { id: string} }
    | { type: ITEM_ACTION_TYPES.REMOVE_ITEM; payload: string }
    | { type: ITEM_ACTION_TYPES.LOAD_CART; payload: ICartLSItem[] }
    | { type: ITEM_ACTION_TYPES.CLEAR_CART }

export default CartAction