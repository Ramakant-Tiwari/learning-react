import {createStore} from "redux";

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

const counterStore = createStore(counterReducer);

export default counterStore;