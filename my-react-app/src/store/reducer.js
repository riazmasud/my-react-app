const initialState = {
  age: 21,
  history: [],
  a: 1,
  b: 1
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;

    case "AGE_UP_ASYNC":
      newState.age += action.value;
      break;

    case "AGE_DOWN_ASYNC":
      newState.age -= action.value;
      break;

    case "AGE_UP_AND_SAVE_TO_HISTORY":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };
      break;

    case "AGE_DOWN_AND_SAVE_TO_HISTORY":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value
        })
      };
      break;

    case "DEL_ITEM_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      };
      break;

    case "UPDATE_A":
      return {
        ...state,
        a: state.a + state.b
      };
      break;

    case "UPDATE_B":
      return {
        ...state,
        b: state.b + state.a
      };
      break;
  }

  return newState;
};

export default reducer;
