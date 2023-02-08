/*
Coding Challenge #2 
Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
  Odd of victory Bayern Munich: 1.33 
  Odd of draw: 3.25 
  Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
}
*/
//1.
const score = game.scored;
for (const [i, goals] of score.entries()) {
  console.log(`Goal ${i + 1}: ${goals} `);
}

console.log('----Number 1 Teacher----');
for (const [i1, jogadores] of game.scored.entries())
  console.log(`Goal ${i1 + 1}: ${jogadores} `);

//2.
let sumOdds = 0;
const odds1 = Object.values(game.odds);
console.log(odds1);

let b = 0;
for (const item of odds1) {
  sumOdds += item;
  b++;
}
console.log(sumOdds);
const avergaeOdds = sumOdds / b;
console.log(avergaeOdds);

console.log('----Number 2 Teacher----');
const odds = Object.values(game.odds);
let average1 = 0;
for (const odd1 of odds) average1 += odd1;
average1 /= odds.length;
console.log(average1);

//3.
const teamsOdds = [Object.values(game.odds)];
console.log(teamsOdds);

for (const item of odds1) {
  if (item !== 3.25) {
    item < 6.0
      ? console.log(`Odd of victory ${game.team1}: ${item}`)
      : console.log(`Odd of victory ${game.team2}: ${item}`);
  } else {
    console.log(`Odd of draw: ${item}`);
  }
}

console.log('----Number 3 Teacher----');
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//4.
const scorers = {
  Lewandowski: 1,
  Gnarby: 1,
  Lewandowski: 1,
  Hummels: 1,
};
