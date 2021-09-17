import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './styles/home.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { getFiltered } from '../redux/leaderboard/leaderboardRedux';
import knight from './assets/knight.gif';

const Home = () => {
  const leaderboardList = useSelector((state) => state.leaderboardReducer);
  const dispatch = useDispatch();

  const displayPlayers = () => (
    (leaderboardList.leaderboard.map((leaderboard) => (
      <div key={leaderboard.id} id={leaderboard.id} className="content">
        <NavLink key={leaderboard.id} to={`/${leaderboard.name}`}>
          <FiArrowRightCircle className="arrow" />
        </NavLink>
        <h3 className="player_name">{leaderboard.name}</h3>
        <h4 className="player_mmr">
          MMR:
          {leaderboard.details.rating}
        </h4>
      </div>
    )))
  );

  const displayFiltered = () => (
    (leaderboardList.filtered.map((leaderboard) => (
      <div key={leaderboard.id} id={leaderboard.id} className="content">
        <NavLink key={leaderboard.id} to={`/${leaderboard.name}`}>
          <div className="arrow">
            <FiArrowRightCircle />
          </div>
        </NavLink>
        <h3 className="player_name">{leaderboard.name}</h3>
        <h4 className="player_mmr">
          MMR:
          {leaderboard.details.rating}
        </h4>
      </div>
    )))
  );

  const searchPlayer = (e) => {
    const saveList = leaderboardList;
    const searchString = e.target.value.toUpperCase();
    const newArray = leaderboardList.leaderboard.filter((player) => (
      player.name.toUpperCase().includes(searchString)
    ));
    dispatch(getFiltered(newArray, saveList));
  };

  return (
    <div>
      <div className="headline">
        <img className="knight" src={knight} alt="knight" />
        <h1>Current Top 10 AOE2:DE Players</h1>
        <img className="knight" src={knight} alt="knight" />
      </div>
      <div className="stats_title_cnt">
        <input placeholder="Player name" onChange={searchPlayer} />
      </div>
      <div className="content_cnt">
        {
        leaderboardList.filtered.length === 0
          ? displayPlayers(leaderboardList)
          : displayFiltered(leaderboardList)
      }
      </div>
    </div>
  );
};

export default Home;
