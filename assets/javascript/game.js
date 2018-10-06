
var game = confirm("Would you like to play Word Guess?")

if (game){
    alert("Great! Try to guess the mystery word.");
}
else {
        alert("Maybe some other time");
}

    var randomWordArr = ["monkey", "zebra", "elephant", "snake", "giraffe"];
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length )];

    var count = 0;
    var allCount = 0;
    var correctCount = 0;
    var answerArr = [];
    var correctAnswerArr = [];
    var wins = 0;
    var losses = 0;

    function StartUp() {        
        randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length )];
         for (var i = 0; i < randomWord.length; i++) {
            correctAnswerArr[i] = "_";{document.getElementById("Counter").reset=0};
        }
        // reset guess count
        // ADD guess count to html
        // add current wins/losses to html
        // add current word to html
    };

    function Letter() {
        var letter = document.getElementById("letter").value;

        if (letter.length > 0) {

            answerArr[allCount] = letter;
            allCount++;
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    correctAnswerArr[i] = letter;
                    correctCount++;
                }                
            }
            count++;
            document.getElementById("Counter").innerHTML = "# of guesses: " + count;
            document.getElementById("answer").innerHTML = answerArr.join(" ");
            document.getElementById("correctAnswer").innerHTML = correctAnswerArr.join(" ");
            document.getElementById("letter").value = "";
        }
        if (correctCount == randomWord.length){
            wins ++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;

            alert("You Win!!!!!!!!!!!!!!!!!!!!");
            var again = confirm("Would you like to play again");
            if(again){
                StartUp();
            //    function StartUp() { randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length )];
            //         for (var i = 0; i < randomWord.length; i++) {
            //            correctAnswerArr[i] = "_";}
            }
        
        } else {
            if (count > randomWord.length) {
                losses++;
                document.getElementById("losses").innerHTML = "Losses: " + losses;
                document.getElementById("word").innerHTML = "Word: " + randomWord;

                alert("You Lose!  Better luck next time!");
                var again = confirm("Would you like to play again");
                StartUp();
            }
        }

        
    }
