const initialState = {
  disableTab: false,
  data: {},
};

const RootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "input_data2":
      return {
        ...state,
        disableTab: actions.value,
      };
    default:
      return state;
  }
};

export default RootReducer;
