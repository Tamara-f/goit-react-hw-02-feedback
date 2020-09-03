import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = 0;
  total = 0;

  countPositiveFeedbackPercentage = () => {
    return this.total !== 0
      ? Math.round((this.state.good * 100) / this.total)
      : '0';
  };
  countTotalFeedback = () => {
    this.total += 1;
  };

  hendleFeedback = e => {
    const field = e.target.textContent;
    this.setState(prevState => {
      return {
        [field]: prevState[field] + 1,
      };
    });

    this.countTotalFeedback();
  };

  render() {
    const states = this.state;
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
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message='No feedback given' />
          )}
        </Section>
      </div>
    );
  }
}
