import _ from 'lodash';
import readlineSync from 'readline-sync';
import askName from './src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const roundCount = 3;
for (let i = 0; i < roundCount; i += 1) {
  const questionNumber = _.random(0, 20);
  console.log(`Question: ${questionNumber}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = questionNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  if (answer === 'yes' && isEven) {
    console.log('Correct!');
  } else if (answer === 'no' && !isEven) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
