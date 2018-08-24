/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

		function pigOut() {
			alert('Pig out!');
			nextPlayer();
		}

		function doubleTrotter() {
			roundScore += 20;
		}

		function doubleRazorback() {
			roundScore += 20;
		}

		function doubleSnouter() {
			roundScore += 40;
		}

		function doubleLeaningJowler() {
			alert('YOU GOT A DOUBLE LEANING JOWLER!!!');
			roundScore += 60;
		}



var scores, roundScore, activePlayer, dice, gamePlaying;

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	
	// document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0'
	document.getElementById('score-1').textContent = '0'
	document.getElementById('current-0').textContent = '0'
	document.getElementById('current-1').textContent = '0'

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
	if(gamePlaying) {
		var dot, pink, razorback, trotter, snouter, leaningJowler, rollScore;
		dot = '.dot';
		pink = '.pink';
		razorback = '.razorback';
		trotter = '.trotter';
		snouter = '.snouter';
		leaningJowler = '.leaningJowler';
		rollScore = 0;


		//These return numbers. Which means that we probably need an array.
		var rollScore;
		var dieArray = ['.dot', '.pink', '.razorback', '.trotter', '.snouter', '.leaningJowler'];

		var die1 = {
			'.dot': false,
			'.pink': false,
			'.razorback': false,
			'.trotter': false,
			'.snouter': false,
			'.leaningJowler': false
		}

		var die2 = {
			'.dot': false,
			'.pink': false,
			'.razorback': false,
			'.trotter': false,
			'.snouter': false,
			'.leaningJowler': false
		}

		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		die1[dieArray[dice1-1]] = true;
		die2[dieArray[dice2-1]] = true;

		console.log(dice1, dieArray[dice1-1]);
		console.log(dice2, dieArray[dice2-1]);

		if((die1['.dot'] && die2['.pink']) || (die2['.dot'] && die1['.pink'])) {
			pigOut();
		} else if (dice1 === dice2) {
			if (die1['.dot'] || die1['.pink']) {
				roundScore++;
			} else if(die1['.razorback']) {
				doubleRazorback();
			} else if(die1['.trotter']) {
				doubleTrotter();
			} else if(die1['.snouter']) {
				doubleSnouter();
			} if(die1['.leaningJowler']) {
				doubleLeaningJowler();
			}
		} else {
			addDie(dice1, dice2);
			// addDie(dice2);
		}

		function addDie(die1, die2) {
			console.log('We are here now');
			if (die1 === 1 || die1 === 2) {
			    roundScore += 0;
			    console.log(roundScore);
			}
			if (die1 === 3 || die1 === 4) {
				roundScore += 5;
				console.log(roundScore)
			}
			if (die1 === 5) {
				roundScore += 10;
				console.log(roundScore)
			}
			if (die1 === 6) {
				roundScore += 15;
				console.log(roundScore)
			}
			if (die2 === 1 || die2 === 2) {
			    roundScore += 0;
			    console.log(roundScore);
			}
			if (die2 === 3 || die2 === 4) {
				roundScore += 5;
				console.log(roundScore)
			}
			if (die2 === 5) {
				roundScore += 10;
				console.log(roundScore)
			}
			if (die2 === 6) {
				roundScore += 15;
				console.log(roundScore)
			}
		}

	// 	//Dice 1 calculator. Maybe extract this into a function that takes a die parameter, and then calculates the value

		var diceDOM1 = document.querySelector('#dice1');
		var diceDOM2 = document.querySelector('#dice2');
	// 	// diceDOM.style.display = 'block';
		// diceDOM1.src = 'dice-' + dice1 + '.png';
		// diceDOM2.src = 'dice-' + dice2 + '.png';

		diceDOM1.src = 'dice-' + (dice1) + '.png';
		diceDOM2.src = 'dice-' + (dice2) + '.png';


	// 	if(dice1 !== 0 || dice2 !== 0) {
	// 		// roundScore += rollScore;
	// 		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	// 	} else {
	// 		// alert('Pig out!')
	// 		nextPlayer();
		// }
	}
});

document.querySelector('.btn-new').addEventListener('click', init);