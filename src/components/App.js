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

  hendleFeedback = ({ target }) => {
    const field = target.textContent;
    this.setState(prevState => {
      return {
        [field]: prevState[field] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const feedback = Math.round((good / total) * 100);
    let IsShowNotification;
    if (total === 0) {
      IsShowNotification = true;
    }

    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions onLeaveFeedback={this.hendleFeedback} />
        </Section>

        <Section>
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={feedback}
            />
          )}
          {IsShowNotification && <Notification message='No feedback given' />}
        </Section>
      </div>
    );
  }
}
