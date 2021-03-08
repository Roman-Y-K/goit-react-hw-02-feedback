import React from 'react';
import styles from './styles.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedbackList}>
      {options.map(option => (
        <li className={styles.item} key={shortid.generate()}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
