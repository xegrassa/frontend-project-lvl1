import readlineSync from 'readline-sync';

function askName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

export default askName;
