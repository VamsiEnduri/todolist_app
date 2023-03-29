import { combineReducers } from "redux";
import { todoReducers } from "./reducer";

const rootReducer = combineReducers({
  name: todoReducers,
});
export default rootReducer;
