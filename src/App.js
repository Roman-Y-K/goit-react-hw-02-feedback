import React, { Component } from 'react';
import Statistic from './Components/Statistic';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Notification from './Components/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleBtnClick = label => {
    this.setState(prevState => {
      return { [label]: (prevState[label] += 1) };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(((good + neutral) / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleBtnClick}
        />
        {total !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
