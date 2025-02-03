
import {createStore, applyMiddleware , combineReducers} from 'redux'

import {thunk} from 'redux-thunk'
import {jobsReducer} from './reducers/jobReducer'
import { loaderReducer } from './reducers/loaderReducer';
import {usersReducer} from './reducers/usersReducer'

const rootReducer = combineReducers({
    jobsReducer:jobsReducer,
    loaderReducer:loaderReducer,
    usersReducer:usersReducer
})

const store = createStore(
    rootReducer,
      applyMiddleware(thunk)
      // other store enhancers if any
    );

  export default store;