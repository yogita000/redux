import { combineReducers } from "redux";
import itemReducer from "../reducers/itemReducer";

const rootReducer = combineReducers({
  item: itemReducer,
});
export default rootReducer;
