import { createAction, createReducer } from "@reduxjs/toolkit"
import { GET_ITEMS } from "@/app/store/actions/types"


interface IItemState {
    value: {

    }
}

const initialState = {
    value: {}
} satisfies IItemState as IItemState

const getItems = createAction(GET_ITEMS)

const itemReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getItems, (state, /*action*/) => {
        return state
    })
})

export default itemReducer