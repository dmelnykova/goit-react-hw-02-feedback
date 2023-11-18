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

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const good = this.state;

  // }
  
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onUpdate}
          />
        </Section>
        {/* <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )};
        </Section> */}
      </>
    );
  }
}