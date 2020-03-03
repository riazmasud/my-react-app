const { createStore } = require("redux");

//set initial state
const initialState = {
  age: 21
};

//create reducer and add logic as to how state will change
const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.val;
  } else if (action.type === "SUBSTRACT") {
    newState.age -= action.val;
  }

  return newState;
};

//pass Reducer to createStore
const store = createStore(myReducer);

//subscribe to the store so we get notification whenever the state is updated
store.subscribe(() => {
  console.log(`state changed ${JSON.stringify(store.getState())}`);
});

//dispatch action
store.dispatch({ type: "ADD", val: 10 });

store.dispatch({ type: "SUBSTRACT", val: 5 });
