import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
    ui: uiReducer,
    product: productsReducer
})

export default reducers