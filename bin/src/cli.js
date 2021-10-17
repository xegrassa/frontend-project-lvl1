import readlineSync from 'readline-sync';

function askName() {
  return readlineSync.question('May I have your name? ');
}

export default askName;
