import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

export const basketReducer =createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items=[...state.items,action.payload]
            localStorage.setItem('basket',JSON.stringify(state.items))
        },
        removeFromBasket:(state,action)=>{
            state.items=state.items.filter(p=>p.id!=action.payload)
        },
        setBasket:(state,action)=>{
            state.items=action.payload;
        },
    },
})

export const {addToBasket,removeFromBasket}=basketReducer.actions;

export const selectItems=(state)=>(state.basket.items);
export const selectTotal=(state)=>state.basket.items.reduce((total,item)=>total+item.price,0);

export default basketReducer.reducer;