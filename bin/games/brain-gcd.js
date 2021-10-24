import _ from 'lodash';
import engine from '../src/index.js';

Math.gcd = function () {
  if (arguments.length == 2) {
    if (arguments[1] == 0)
      return arguments[0];
    else
      return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  }
  if (arguments.length > 2) {
    const result = Math.gcd(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i += 1)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};

const genQuestionAndAnswer = () => {
  const questionNumber1 = _.random(1, 100);
  const questionNumber2 = _.random(1, 100);
  const question = `${questionNumber1} ${questionNumber2}`;
  const answer = Math.gcd(questionNumber1, questionNumber2);
  return {
    question: question,
    answer: answer.toString(),
  };
};

const rule = 'Find the greatest common divisor of given numbers.';
engine(rule, genQuestionAndAnswer);
