import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  const titleSpan = title.split(' ').map(el => el.slice(0, 1));
  title = title.split(' ').map(el => el.slice(1, el.length));
  return (
    <StyledSection>
      <h1>
        <span className="first">{titleSpan[0]}</span>
        {title[0] + ' '}
        <span className="second">{titleSpan[1]}</span>
        {title[1] + ' '}
        <span className="third">{titleSpan[2]}</span>
        {title[2] + ' '}
      </h1>
      {children}
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
