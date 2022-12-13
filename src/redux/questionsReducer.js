const initialState = {
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

const QuestionsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default QuestionsReducer;
