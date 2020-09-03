import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';

export default class App extends Component {
  static defaultProps = {
    feedback: 0,
    total: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return (this.total = Object.values(this.state).reduce(
      (acc, value) => acc + value
    ));
  };

  countPositiveFeedbackPercentage = () => {
    return (this.feedback = Math.round((this.state.good * 100) / this.total));
  };

  hendleFeedback = e => {
    const field = e.target.textContent;
    this.setState(prevState => {
      return {
        [field]: prevState[field] + 1,
      };
    });
  };

  render() {
    const states = this.state;
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions onLeaveFeedback={this.hendleFeedback} />
        </Section>

        <Section>
          {this.total > 0 ? (
            <Statistics
              good={states.good}
              neutral={states.neutral}
              bad={states.bad}
              total={this.total}
              positivePercentage={this.feedback}
            />
          ) : (
            <Notification message='No feedback given' />
          )}
        </Section>
      </div>
    );
  }
}
