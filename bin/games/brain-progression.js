#!/usr/bin/env node

import _ from 'lodash';
import engine from '../src/index.js';

const genQuestionAndAnswer = () => {
  const numberCount = _.random(5, 10);
  const indexSecretNumber = _.random(0, numberCount - 1);
  const startNumber = _.random(1, 50);
  const step = _.random(1, 10);

  const numbers = [];
  let tempNumber = startNumber;
  for (let i = 0; i < numberCount; i += 1) {
    numbers.push(tempNumber);
    tempNumber += step;
  }

  const answer = numbers[indexSecretNumber];
  numbers[indexSecretNumber] = '..';
  const question = numbers.join(' ');

  return {
    question,
    answer: answer.toString(),
  };
};

const rule = 'What number is missing in the progression?';
engine(rule, genQuestionAndAnswer);
