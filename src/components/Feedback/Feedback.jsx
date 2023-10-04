import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import NoReviews from './NoReviews/NoReviews';
import { Header } from './Feddbeck.styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //змінюємо стейт відповідно до ключа
  onClickButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  // вираховуємо процент позитивних відгуків
  positivePercentage = () =>
    Math.round((this.state.good / this.totalCounter()) * 100);

  // загальна сума відгуків
  totalCounter = () => this.state.good + this.state.neutral + this.state.bad;

  render() {
    
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Header>Please leave feedback</Header>
        <Buttons keys={keys} onClickButton={this.onClickButton}></Buttons>
        <div>
          {/* рендеримо розмітку за умовою */}
          {this.totalCounter() === 0 ?(
            <NoReviews text="There is no feedback"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCounter()}
              positivePercentage={
                this.totalCounter() ? this.positivePercentage() : 0
              }
            />
          )}
        </div>
      </div>
    );
  }
}
