import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onUpdated = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1
      };
    });
  };

  getCountTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  feedbackPercentage = () => {
    const { good } = this.state;
    const total = this.getCountTotalFeedback();
    return (good / total) * 100;
  }

  
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.getCountTotalFeedback();
    const goodPercentage = this.feedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onUpdated}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={goodPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}