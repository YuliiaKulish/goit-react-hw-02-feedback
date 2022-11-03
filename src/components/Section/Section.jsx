import { Sect } from './Section.styled';
import { PropTypes } from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Sect>
      <h2>{title}</h2>
      {children}
    </Sect>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
