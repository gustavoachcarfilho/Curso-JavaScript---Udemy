/*
Coding Challenge #1 
We're building a football betting app (soccer for my American friends 😅)! 
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data. 
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players 
3. Create an array 'allPlayers' containing all players of both teams (22 players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Create one player array for each team (variables 'players1' and 
'players2') 
*/

const [...players1] = game.players[0];
console.log(players1);

const [...players2] = game.players[1];
console.log(players2);

console.log("----Number 1 TEACHER'S SOLUTION----");
const [players1Teacher, players2Teacher] = game.players;
console.log(players1Teacher, players2Teacher);
console.log('-------------------------');
/*
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players 
*/

const [gk, ...fieldPlayers] = [...game.players[0]];
console.log(gk, fieldPlayers);

console.log("----Number 2 TEACHER'S SOLUTION----");
const [gkTeacher, ...fieldPlayersTeacher] = players1Teacher;
console.log(gkTeacher, fieldPlayersTeacher);
console.log('-------------------------');

/*
3. Create an array 'allPlayers' containing all players of both teams (22 players) 
*/

const [...allPlayers] = [...game.players];
console.log(allPlayers);

console.log("----Number 3 TEACHER'S SOLUTION----");
const allPlayersTeacher = [...players1Teacher, ...players2Teacher];
console.log(allPlayersTeacher);
console.log('-------------------------');

/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
*/

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

console.log("----Number 4 TEACHER'S SOLUTION----");
const players1FinalTeacher = [
  ...players1Teacher,
  'Thiago',
  'Coutinho',
  'Periscic',
];
console.log('-------------------------');

/*
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') 
*/

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

console.log("----Number 5 TEACHER'S SOLUTION----");
const {
  odds: { team1Teacher, x: drawTeacher, team2Teacher },
} = game;
console.log(team1Teacher, drawTeacher, team2Teacher);
console.log('-------------------------');

/*
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/

const printGoals = function (name) {
  const [...scored] = game.scored;
  if (
    name === 'Lewandowski' ||
    name === 'Gnarby' ||
    name === 'Lewandowski' ||
    name === 'Hummels'
  ) {
    console.log(name, 'scored 1 goal');
  } else {
    console.log(name, "didn't score");
  }
};

printGoals('Davies');
printGoals('Muller');
printGoals('Lewandowski');
printGoals('Kimmich');

console.log("----Number 6 TEACHER'S SOLUTION----");
const printGoalsTeacher = function (...players) {
  console.log(`${players.length} goal were scored`);
};

printGoalsTeacher('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoalsTeacher('Davies', 'Muller');
printGoalsTeacher(...game.scored);
console.log('-------------------------');

/*
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. 
*/
console.log("----Number 7 TEACHER'S SOLUTION----");
team1Teacher < team2Teacher && console.log('Team 1 is more likely to win');
team1Teacher > team2Teacher && console.log('Team 2 is more likely to win');
