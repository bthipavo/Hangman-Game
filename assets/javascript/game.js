
//capture key
function hangMan(event){ 
	console.log("in JS");
	document.write("Hello World<br>");
	// var letter = event.key;

	var currentWord = "";
	currentWord = game.getWord();
	document.write(currentWord + "<br>");
	game.createLetters();
	
}

var game = {

	listofWords: ["Backstreet Boys", "98 Degrees", "NSYNC"],

//function randomly picks a word from the list//
	getWord: function() {
		console.log(this.listofWords[Math.floor(Math.random()*this.listofWords.length)])
		// currentWord = this.listofWords[Math.floor(Math.random()*this.listofWords.length)];
		return this.listofWords[Math.floor(Math.random()*this.listofWords.length)];
;
	},

	createLetters: function() {
		for(i=0; i<currentWord.length; i++) {
			document.write("_ ");
		}
	},

	checkLetters: function() {

	}
}
