import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// root redcucer which combnes all the reducers with browser hisory object

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
});

export default createRootReducer;