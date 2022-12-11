const initialState = {
  disableTab: true,
  drop2Value: "",
  data: [
    {
      id: 1,
      question: "What is the capital of the USA?",
    },
    {
      id: 2,
      question: "What currency is used in the USA?",
    },
    {
      id: 3,
      question: "How many stars are there on the US flag?",
    },
  ],
};

const RootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "input_data2":
      return {
        ...state,
        disableTab: actions.value.length ? false : true,
        drop2Value: actions.value,
      };
    default:
      return state;
  }
};

export default RootReducer;
