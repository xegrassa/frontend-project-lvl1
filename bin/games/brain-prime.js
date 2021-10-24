#!/usr/bin/env node

import _ from 'lodash';
import engine from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const genQuestionAndAnswer = () => {
  const number = _.random(1, 250);
  let answer;
  if (isPrime(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return {
    question: number,
    answer,
  };
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(rule, genQuestionAndAnswer);
