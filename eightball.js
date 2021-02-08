//magic 8-ball with random outputs (could add a user prompt for them to )

let userName = ''
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Will I really learn JavaScript?';
console.log(`You asked \'${userQuestion}\'.... ${userName} What do you think? `)

const randomNumber = Math.floor(Math.random()*8);

let eightBall = randomNumber;
switch (eightBall) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`8-ball says: ${eightBall}`);


