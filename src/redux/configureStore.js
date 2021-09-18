import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import leaderboardReducer from './leaderboard/leaderboardRedux';

const reducer = combineReducers({
  leaderboardReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
