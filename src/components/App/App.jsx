import React, { useState } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

const App = () => {
  const [stateBth, setStateBth] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleCliclFeedback = option => {
    // const name = e.target.name;
    setStateBth({ ...stateBth, [option]: stateBth[option] + 1 });
  };

  const countTotalFeedback = obj => {
    return Object.values(obj).reduce((total, amount) => (total += amount), 0);
  };
  const countPositiveFeedbackPercentage = (count, good) => {
    if (count > 0) {
      return Math.round((good / count) * 100);
    }
  };

  const options = Object.keys(stateBth);
  const total = countTotalFeedback(stateBth);
  const prosent = countPositiveFeedbackPercentage(total, stateBth.good);

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleCliclFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics state={stateBth} total={total} prosent={prosent} />
      </Section>
    </div>
  );
};

export default App;
