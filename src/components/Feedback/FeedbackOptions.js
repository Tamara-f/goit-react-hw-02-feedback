import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type='button' onClick={onLeaveFeedback}>
      good
    </button>
    <button type='button' onClick={onLeaveFeedback}>
      neutral
    </button>
    <button type='button' onClick={onLeaveFeedback}>
      bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
