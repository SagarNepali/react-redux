import { createStore } from "redux";
import bankReducer from "./../reducers/bankReducer";

const bankStore = createStore(bankReducer);

export default bankStore;