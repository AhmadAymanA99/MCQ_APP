import { combineReducers } from "redux";
import userInfo from "./userInfo";
import questions from "./questions";
import score from "./score";

const App = combineReducers({
  userInfo,
  questions,
  score,
});

export default App;
