import _ from 'lodash';
import engine from '../src/index.js';

const genQuestionAndAnswer = () => {
  const questionNumber1 = _.random(0, 20);
  const questionNumber2 = _.random(0, 20);
  const operationSymbol = _.sample(['+', '-', '*']);
  const operation = {
    '+': _.add,
    '-': _.subtract,
    '*': _.multiply,
  };
  const question = `${questionNumber1} ${operationSymbol} ${questionNumber2}`;
  const answer = operation[operationSymbol](questionNumber1, questionNumber2);
  return {
    question: question,
    answer: answer.toString(),
  };
};

const rule = 'What is the result of the expression?';
engine(rule, genQuestionAndAnswer);
