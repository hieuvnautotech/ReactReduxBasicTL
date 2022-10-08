import { createStore } from 'redux'
import rootReducer from './reducer';
//enhancer là middleware
const store = createStore(rootReducer);

export default store;