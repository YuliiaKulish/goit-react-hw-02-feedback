import { PropTypes } from 'prop-types';
import { Btn, Wrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {Object.keys(options).map((option, index) => (
        <Btn
          key={index}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Btn>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
