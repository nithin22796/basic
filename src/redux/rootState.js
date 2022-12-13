import { combineReducers } from "redux";

import HomeReducer from "./homeReducer";
import QuestionsReducer from "./questionsReducer";

const RootReducer = combineReducers({
  home: HomeReducer,
  questions: QuestionsReducer,
});

export default RootReducer;
