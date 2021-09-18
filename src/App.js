import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import NavBar from './components/navBar';
import Home from './components/home';
import Details from './components/details';
import { getData } from './redux/leaderboard/leaderboardRedux';

function App() {
  const leaderboardList = useSelector((state) => state.leaderboardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leaderboardList.length) {
      dispatch(getData());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          { leaderboardList.leaderboard.map((leaderboard) => (
            <Route key={leaderboard.id} path={`/${leaderboard.name}`}>
              <Details props={leaderboard} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
