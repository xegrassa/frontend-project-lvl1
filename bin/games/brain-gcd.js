#!/usr/bin/env node

import _ from 'lodash';
import engine from '../src/index.js';

const gcd = (num1, num2) => {
  let first = num1;
  let second = num2;
  if (first < 0) {
    first = -first;
  }
  if (second < 0) second = -second;
  if (second > first) { const temp = first; first = second; second = temp; }
  // eslint-disable-next-line no-constant-condition
  while (true) {
    first %= second;
    if (first === 0) return second;
    second %= first;
    if (second === 0) return first;
  }
};

const genQuestionAndAnswer = () => {
  const questionNumber1 = _.random(1, 100);
  const questionNumber2 = _.random(1, 100);
  const question = `${questionNumber1} ${questionNumber2}`;
  const answer = gcd(questionNumber1, questionNumber2);
  return {
    question,
    answer: answer.toString(),
  };
};

const rule = 'Find the greatest common divisor of given numbers.';
engine(rule, genQuestionAndAnswer);
