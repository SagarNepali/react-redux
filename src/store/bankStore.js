import { createStore, applyMiddleware } from "redux";
import bankReducer from "./../reducers/bankReducer";


const logger = (store)=>(next)=>(action)=>{
	console.log('Dispatching: ',action);
	return next(action);
}

const bankStore = createStore(bankReducer, applyMiddleware(logger));

export default bankStore;