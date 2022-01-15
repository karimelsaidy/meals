import {createStore} from 'redux';
import mealsReducer from './reducers/mealsReducer';

const store = createStore(mealsReducer);

export default store;