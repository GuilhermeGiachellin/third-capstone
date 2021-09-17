import PropTypes from 'prop-types';
import './styles/details.css';

const Details = ({ props }) => {
  const titlesArray = [
    'Name', 'Rating', 'Rank', 'Previous rank', 'Highest Rating', 'Games played',
    'Games won', 'Games lost',
  ];

  const infoArray = [
    props.name, props.details.rating,
    props.rank, props.details.previous_rating,
    props.details.highest_rating, props.details.games,
    props.details.wins, props.details.losses,
  ];

  const detailsInfoDisplay = [];

  for (let i = 1; i < 8; i += 1) {
    detailsInfoDisplay.push(
      <li key={i} className="details_list">
        <span className="info_text">{titlesArray[i]}</span>
        <span className="info_text">{infoArray[i]}</span>
      </li>,
    );
  }

  return (
    <div key={props.id}>
      <div className="headline">
        <h1>{props.name}</h1>
      </div>
      <div className="stats_title_cnt">
        <h4>Player Stats</h4>
      </div>
      <ul>
        {detailsInfoDisplay}
      </ul>
    </div>
  );
};

Details.propTypes = {
  props: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.node.isRequired,
};

export default Details;
