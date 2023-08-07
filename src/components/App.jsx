import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtons = event => {
    const st = event.target.textContent;
    console.dir(st);

    // Past
    // setState(prevState => ({
    //   [st]: prevState[st] + 1,
    // }));

    // !Present
    switch (st) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    // const sum = Object.values(state).reduce((acc, el) => (acc += el));
    const sum = good + bad + neutral;
    return sum;
  };
  const countPositiveFeedbackPercentage = () => {
    // const { good, bad, neutral } = state;
    const percentage = Math.round((good / countTotalFeedback()) * 100);
    return percentage;
  };

  // render() {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={Object.keys(state)}
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtons}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
  // }
};
