import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtons = event => {
    const st = event.target.textContent;
    console.dir(st);
    this.setState(prevState => ({
      [st]: prevState[st] + 1,
    }));
  };

  countTotalFeedback = () => {
    // const sum = this.state.good + this.state.bad + this.state.neutral;
    const sum = Object.values(this.state).reduce((acc, el) => (acc += el));
    return sum;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const percentage = Math.round((good / this.countTotalFeedback()) * 100);
    return percentage;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtons}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
