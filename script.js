// buttons for player to select their sign on browser side
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

// program's signs to choose from
const signs = ["rock", "paper", "scissors"];

// get random whole number from 0-2 to select a sign
function random(max) {
	return Math.floor(Math.random() * max);
}

// get random number to choose sign
function random(max) {
	return Math.floor(Math.random() * max);
}

// choose a random sign
function randomSign() {
	let randomSign =  signs[random(3)];
	console.log(randomSign);
}

// matchup results
function win(sign) {
	result.innerText = `Computer played ${sign}. You won due to the vagaries of fate.`
}
function lose(sign) {
	result.innerText = `Computer played ${sign}. You lost. Wow. Try harder next time.`
}
function tie(sign) {
	result.innerText = `Computer played ${sign} and you tied. I guess it could have gone worse.`
}


// event listeners for player sign selection
rock.addEventListener('click', function() {
	console.log('You clicked the rock');
	let randomSign =  signs[random(3)];
	if (randomSign === "rock") {
		tie(randomSign);
	} else if (randomSign === "scissors") {
		win(randomSign);
	} else if (randomSign === "paper") {
		lose(randomSign);
	}
});

paper.addEventListener('click', function() {
	console.log('You clicked the paper');
	let randomSign =  signs[random(3)];
	if (randomSign === "paper") {
		tie(randomSign);
	} else if (randomSign === "rock") {
		win(randomSign);
	} else if (randomSign === "scissors") {
		lose(randomSign);
	}
});

scissors.addEventListener('click', function() {
	console.log('You clicked the scissors');
	let randomSign =  signs[random(3)];
	if (randomSign === "scissors") {
		tie(randomSign);
	} else if (randomSign === "paper") {
		win(randomSign);
	} else if (randomSign === "rock") {
		lose(randomSign);
	}
});

