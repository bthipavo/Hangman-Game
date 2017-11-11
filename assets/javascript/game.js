
	var listofWords = ["One Direction", "New Kids on The Block", "Backstreet Boys", "Boyz II Men", "Jonas Brother", "EXO", "98 Degrees", "Big Bang", "Hanson", "Westlife", "The Jackson 5", "New Edition"];
	var newGame = 0;
	var currentWord = "";
	var guessArray = [];
	var guessArrayCounter = 0;
	var numberGuesses = 0;
	var currentWordCount = 0;
	var letters2, letters3, blankInput;

//checks to see if there is a game going on
	function checkGame() {
		if (currentWord) newGame = 1;
			else newGame = 0;
		console.log("new game going on? " + newGame);
		return newGame;
	}
//function randomly picks a word from the list//
	function getWord() {

		currentWord = this.listofWords[Math.floor(Math.random()*this.listofWords.length)];
		currentWordCount = currentWord.replace(/\s+/g, "").length;
		this.printBlanks();
		console.log(currentWord + "current word count " + currentWordCount);

	}

	// createLetters: function() {
	// 	for(i=0; i<currentWord.length; i++) {
	// 		document.write("_ ");
	// 	}
	// },

//check letters entered and puts them into array, also checks for dupes
	function checkLetters(letter) {
		console.log("checking letters");
		var count = 0;
		for (i = 0; i<guessArray.length; i++) {
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
			this.printLetters();
			this.correctGuess(letter);


		}
		document.getElementById("numGuesses").innerHTML = numberGuesses;
		console.log(letter);
		console.log(currentWord);
	}

	function correctGuess(letter) {
		console.log("in correct guess function " + currentWord);

		for (i = 0; i < currentWord.length; i++) {
			if (letter.toUpperCase() == currentWord[i].toUpperCase()) {
				// (document.getElementById("letter"))[i].style.opacity = 1;
				//document.getElementById("correctWord").innerHTML += currentWord[i].toUpperCase()  + " ";
				currentWordCount--;
				letters3[i].style.opacity = 1;

				if (currentWordCount == 0) {
					document.getElementById("win").innerHTML = " yay you win!";
		}
			}
		}

	}

	//print letters guessed

	function printLetters() {
		console.log(" counter guess " + (numberGuesses-1));
		document.getElementById("ltrGuessed").innerHTML += guessArray[numberGuesses-1] + " ";

	}

	function printBlanks() {
		letters2 = document.getElementById("letter");
		var appendLetter;
		letters3 = letters2.children;
		// letters3 = letters2.children;
		// var appendLetter;
        for (i = 0; i < currentWord.length; i++) {
        	// letters2[i].style.opacity = 0.5;
            // if(currentWord.charAt(i) == ' ') {
            // 	document.getElementById("letter").insertAdjacentHTML('beforeend', 'A');
            // }
            // else {
            // // letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            appendLetter = ('<li>' + currentWord.charAt(i).toUpperCase() + '</li>');
            letters2.insertAdjacentHTML('beforeend', appendLetter);
            letters3[i].style.opacity = 0.5;

        //}
	}	
	

	console.log("letters3");
	console.log(letters3);
	console.log(letters2);
}
	function remainingGuesses() {


	} 

	function gamesPlayed() {

	}
