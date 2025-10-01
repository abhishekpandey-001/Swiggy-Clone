import { createSlice } from "@reduxjs/toolkit";



// example:
// {
//     id: 1234,
//     name: "Wednesday Chicken Bucket",
//     category: "slicer",
//     quantity:1(will increase)
// }





const cart = createSlice({
    name:'cartSlice',
    initialState:{
        items:[]
    },

    reducers:{
        addItems:  (state, action)=>{
            state.items.push({...action.payload, quantity:1})
        },

        IncrementItems: (state, action)=>{

        },

        DecrementItems: (state, action)=>{

        }
    }
})

export const {addItems, IncrementItems, DecrementItems} = cart.actions;
export default cart.reducer;