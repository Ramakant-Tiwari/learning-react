const redux = require("redux");

const reducer = function (store = { counter: 0 }, action) {
    console.log("I am called")
  return { counter: store.counter + 1 };
};

const store = redux.legacy_createStore(reducer);

const subscriber = function () {
  console.log(store.getState());
};

store.subscribe(subscriber);

store.dispatch({ type: "DECREMENT" });
