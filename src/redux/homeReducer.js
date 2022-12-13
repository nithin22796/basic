const initialState = {
  drop1Value: "",
  inputValue: "",
  drop2Value: "",
  disableTab: true,
};

const HomeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "drop1":
      return {
        ...state,
        drop1Value: actions.value,
      };
    case "input":
      return {
        ...state,
        inputValue: actions.value,
      };
    case "drop2":
      return {
        ...state,
        drop2Value: actions.value,
      };
    case "tab_disabled":
      return {
        ...state,
        disableTab: actions.value,
      };
    default:
      return state;
  }
};

export default HomeReducer;
