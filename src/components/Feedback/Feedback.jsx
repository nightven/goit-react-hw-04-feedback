import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import NoReviews from './NoReviews/NoReviews';
import { Header } from './Feddbeck.styled';

export const   Feedback =() => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  //змінюємо стейт відповідно до ключа
  const onClickButton = key => {
    if(key === 'good') { setGood(prevState => prevState + 1); }
    if(key === 'neutral') { setNeutral(prevState => prevState + 1); }
    if(key === 'bad') { setBad(prevState => prevState + 1); }
  };

  // вираховуємо процент позитивних відгуків
  const positivePercentage = () =>
    Math.round((good / totalCounter()) * 100);

  // загальна сума відгуків
  const totalCounter = () => good + neutral + bad;
  const keys = Object.keys(feedback);

    return (
      <div>
        <Header>Please leave feedback</Header>
        <Buttons keys={keys} onClickButton={onClickButton}></Buttons>
        <div>
          {/* рендеримо розмітку за умовою */}
          {totalCounter() === 0 ?(
            <NoReviews text="There is no feedback"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCounter()}
              positivePercentage={
                totalCounter() ? positivePercentage() : 0
              }
            />
          )}
        </div>
      </div>
    );

}
