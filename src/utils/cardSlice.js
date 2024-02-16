import { createSlice , current} from "@reduxjs/toolkit";



const cartSlice= createSlice({
    name: "cart",
    initialState: {
        items:[ ],
    },
    reducers: {
        addItem: (state, action) => {

            // /Vanialla(older) Redux => Don't Mutate state, returning wasmandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            // state = ["Mukesh"];
          state.items.length = 0;
        // return { items: [] };
        
        },
    },
});



export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer