#!/usr/bin/env node

import _ from 'lodash';
import engine from '../src/index.js';

const isEven = (num) => (num) % 2 < 1;

const genQuestionAndAnswer = () => {
  const questionNumber = _.random(0, 20);

  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return {
    question: questionNumber,
    answer,
  };
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
engine(rule, genQuestionAndAnswer);
