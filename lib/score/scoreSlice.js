import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    score: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state,action) =>{
            state.score += 1;
        }

    }
})

export const {  increment } = scoreSlice.actions;

export default scoreSlice.reducer;