import { Component } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback() {
    let valuesArr = Object.values(this.state);
    const summFeedbacks = valuesArr.reduce((acc, value) => acc + value, 0);
    return summFeedbacks;
  }

  countPositivePercentage() {
    const summFeedbacks = this.countTotalFeedback();
    const goodFeedbacksAmount = this.state.good;
    return Math.round((goodFeedbacksAmount * 100) / summFeedbacks);
  }

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedbackClick={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positiveFeedbacks={this.countPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
