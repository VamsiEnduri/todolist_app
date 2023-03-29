import rootReducer from "./Redux/reducers/main";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
