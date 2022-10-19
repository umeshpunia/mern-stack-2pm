import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {

    addToCart:(state,action)=>{
        let product=action.payload
        let pid=product._id

        let single=state.findIndex(v=>v._id==pid)

        if(single <0){
            state.push(product)
        }
        
    },
    removeFromCart:(state,action)=>{
        let product=action.payload
        let pid=product._id

        return state.filter(v=>v._id!==pid)

    }

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer