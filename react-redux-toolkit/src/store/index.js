import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterReducer = function(store = {counter : 0}, action) {
    switch(action.type) {
        case "INCREMENT":
            return {counter: store.counter + 1};
        case "DECREMENT":
            return {counter: store.counter - 1};
        default:
            return store;
    }
}

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0},
    reducers: {
        increment: (state) => {
           state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
})

const counterStore = configureStore({reducer: {
    counter: counterSlice.reducer
}});

export const counterActions = counterSlice.actions;
export default counterStore;