
var game = confirm("Would you like to play Word Guess?")

if (game){
    alert("Great! Try to guess the mystery word.");
}
else {
        alert("Maybe some other time");
    }

    var randomWordArr = ["monkey", "zebra", "elephant", "snake", "giraffe"];
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length )];
    
    var a;
    var count = 0;
    var answerArr = [];

    function StartUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_";
    }

    a = answerArr.join(" ");
    document.getElementById("answer").innerHTML = a;
    }

    function Letter() {
        var letter = document.getElementById("letter").value;
        if (letter.length > 0)
        {
            for (var i = 0; i < randomWord.length; i++)
            {
                if (randomWord === letter)
                {
                    answerArr[i] = letter;
                }
            }
            count++;
            document.getElementById("Counter").innerHTML = "# of clicks: " + count;
            document.getElementById("answer").innerHTML = answerArr.join(" ");
        }
        
    }