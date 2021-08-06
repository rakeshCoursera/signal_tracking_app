import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// root redcucer which combnes all the reducers with browser hisory object
import routesReducers from './routes/routesReducers';

const createRootReducer = (history) => combineReducers({
    routes: routesReducers,
    router: connectRouter(history),
});

export default createRootReducer;