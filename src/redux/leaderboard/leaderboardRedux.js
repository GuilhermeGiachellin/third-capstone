import axios from 'axios';

// ACTIONS
const GET_LEADERBOARD = 'leaderboardStore/leaderboard/GET_LEADERBOARD';
const GET_FILTERED = 'leaderboardStore/leaderboard/GET_FILTERED';

const initialState = {
  leaderboard: [],
  filtered: [],
};
// ACTIONS CREATORS

export const playerArray = (response) => {
  response.map((player) => (
    initialState.leaderboard.push({
      id: player.profile_id,
      name: player.name,
      rank: player.rank,
      details: {
        rating: player.rating,
        previous_rating: player.previous_rating,
        highest_rating: player.highest_rating,
        games: player.games,
        wins: player.wins,
        losses: player.losses,
      },
    })));
  return initialState;
};

export const getData = () => async (dispatch) => {
  const response = await axios.get('https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=10');
  dispatch({
    type: GET_LEADERBOARD,
    payload: playerArray(response.data.leaderboard),
  });
  // return response.data.leaderboard;
};

export const getFiltered = (newArr, savedArr) => ({
  type: GET_FILTERED,
  payload: [newArr, savedArr],
});

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADERBOARD: {
      return { ...action.payload };
    }
    case GET_FILTERED: {
      return {
        ...state,
        filtered: action.payload[0],
      };
    }
    default:
      return state;
  }
};

export default reducer;
