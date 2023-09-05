import { StyledNotification } from './Notification.styled';
import PropTypes from 'prop-types';
import image from './empty.jpeg';

const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <h2>{message}</h2>
      <img src={image} alt="question mark" width="612" />
    </StyledNotification>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
