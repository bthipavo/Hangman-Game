
	var listofWords = ["One Direction", "New Kids on The Block", "Backstreet Boys", "Boyz II Men", "Jonas Brother", "EXO", "98 Degrees", "Big Bang", "Hanson", "Westlife", "The Jackson 5", "New Edition"];
	var startGame = 0;
	var currentWord = "";
	var guessArray = [];
	var guessArrayCounter = 0;
	var numberGuesses = 0;
	var numberLeft = 0;
	var currentWordCount = 0;
	var numberWins = -1;
	var numberLoss = 0;
	var totalGuesses = 7;
	var letters2, letters3, appendLetter;

	function newGame() {
		startGame = 1;
		currentWord = "";
		guessArray = [];
		guessArrayCounter = 0;
		numberGuesses = 0;
		numberLeft = 0;
		currentWordCount = 0;
		totalGuesses = 7;
		document.getElementById("win").innerHTML = "";
		document.getElementById("letter").innerHTML = "";
		// letters3 = "";
		appendLetter = "";
		document.getElementById("errors").innerHTML = "";
		document.getElementById("ltrGuessed").innerHTML = "";
		document.getElementById("numGuesses").innerHTML = "";
		document.getElementById("numWin").innerHTML = numberWins;
		document.getElementById("numLoss").innerHTML = numberLoss;
		document.getElementById("guessLeft").innerHTML = totalGuesses;
		this.getWord();

	}

//checks to see if there is a game going on
	function checkGame(letter) {
		if (currentWordCount > 0) checkLetters(letter);
		if(currentWordCount == 0 && startGame == 0) {
				numberWins++;
				this.newGame();
			}
		if(currentWordCount == 0) {
			startGame--;
		}
		if ((totalGuesses - numberLeft) == 0 && startGame ==0){
			numberLoss++;
			this.newGame();
		}
		if ((totalGuesses - numberLeft) == 0)
			startGame--;
	}
//function randomly picks a word from the list//
	function getWord() {

		currentWord = this.listofWords[Math.floor(Math.random()*this.listofWords.length)];
		currentWordCount = (currentWord.replace(/\s+/g, "").length);
		this.printBlanks();
		console.log(currentWord + "current word count " + currentWordCount);

	}


//check letters entered and puts them into array, also checks for dupes
	function checkLetters(letter) {
		// console.log("checking letters " + letter);
		var count = 0;
		if(currentWordCount == 0)
			startGame--;
		for (var i = 0; i<guessArray.length; i++) {
			if (letter == guessArray[i]) {
				count++;
			}
			else {
				count = count;
			}
		}
		if (count > 0) {
			guessArray = guessArray;
			document.getElementById("errors").innerHTML=("letter has already been entered");
		}
		else {
			guessArray.push(letter);
			numberGuesses++;
			document.getElementById("errors").innerHTML="";
			this.printLetters();
			this.correctGuess(letter);


		}
		document.getElementById("numGuesses").innerHTML = numberGuesses;
		console.log(letter);
		console.log(currentWord);
	}

	function correctGuess(letter) {
		// console.log("in correct guess function " + currentWord);
		var counter1 = 0;
		// console.log("letter being type " + letter);
		for (var i = 0; i < currentWord.length; i++) {
			if (letter.toUpperCase() == currentWord[i].toUpperCase()) {
				currentWordCount--;
				letters3[i].style.opacity = 1;
				console.log("word count " + currentWordCount);
			}
			else {
				counter1++;
				}
			if (currentWordCount == 0) {
				// numberWins++;
				document.getElementById("win").innerHTML = " yay you win!";
			}
			if (counter1 >= currentWord.length) {
				remainingGuesses();
			}

		}

	}

	//print letters guessed

	function printLetters() {
		// console.log(" counter guess " + (numberGuesses-1));
		document.getElementById("ltrGuessed").innerHTML += guessArray[numberGuesses-1] + " ";

	}

	function printBlanks() {
		letters2 = document.getElementById("letter");
		
		letters3 = letters2.children;
		// console.log(" current word length" + currentWord.length);
        for (var i = 0; i < currentWord.length; i++) {
            appendLetter = ('<li class="letter">' + currentWord.charAt(i).toUpperCase() + '</li>');
            letters2.insertAdjacentHTML('beforeend', appendLetter);
            letters3[i].style.opacity = 0;

        //}
	}	

}
	function remainingGuesses() {
		numberLeft++;
		document.getElementById("guessLeft").innerHTML = (totalGuesses - numberLeft);
		console.log(" number left " + (totalGuesses-numberLeft));
		if ( (totalGuesses - numberLeft) <= 0) {
			// numberLoss++;
			console.log("number loss " +numberLoss);
			document.getElementById("win").innerHTML = " you lose!";
		}

	} 


	function resetGame() {
		numberWins = -1;
		numberLoss = 0;
		this.newGame();

	}


