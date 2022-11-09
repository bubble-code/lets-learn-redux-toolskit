import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 10
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        addAmount(state, action) {
            state.value += action.payload
        }
    },
    extraReducers:{
        
    }
})

export const { increment, addAmount } = counterSlice.actions;
export default counterSlice.reducer;