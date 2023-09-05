import { StyledStatistics } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const checkPercentage = () => {
    let percentage;
    if (positivePercentage > 66) {
      percentage = 'positive';
    } else if (positivePercentage < 33) {
      percentage = 'negative';
    } else {
      percentage = 'neutral';
    }
    return percentage;
  };

  return (
    <StyledStatistics>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li className={checkPercentage()}>
        Positive feedback: <span>{positivePercentage} %</span>
      </li>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
