//my javascript code will go below here
//initialize globval variables
$(document).ready(function () {

    var correctAnswers = "Correct";
    var correct = 0;
    var wrong = 0;
    var time = 60;
    
    //Start game setup 

    alert("This is a timed quiz! You have 30 seconds to select your best answer before your time runs out. Click O.K. to start!");
    gameTimer();
    $('#end-game-container').hide();

    // Function for assessing wins and losses based of the checked radio buttons
    function winsAndLosses() {

        var question1 = $('input[name="question1"]:checked').val();
        var question2 = $('input[name="question2"]:checked').val();
        var question3 = $('input[name="question3"]:checked').val();
        var question4 = $('input[name="question4"]:checked').val();
        var question5 = $('input[name="question5"]:checked').val();
        var question6 = $('input[name="question6"]:checked').val();
        var question7 = $('input[name="question7"]:checked').val();
        var question8 = $('input[name="question8"]:checked').val();

        if (question1 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question2 === correctAnswers) {
            correct++
        } else {
            wrong++
        };

        if (question3 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question4 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question5 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question6 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question7 === correctAnswers) {
            correct++
        } else {
            wrong++

        };

        if (question8 === correctAnswers) {
            correct++
        } else {
            wrong++

        };
        time = 30;
        console.log(time);


    }
//Function for time out and onclick that resets the timer, resets the form, alerts the player about their achievements, and gives them the option to continue
    function alertAndReset() {
        winsAndLosses();
        $('#end-game').text("You got " + correct + " correct and " + wrong + " wrong");
        $('#end-game-container').show();
        $('#countdown-container').hide();

        $('#trivia-form').hide();
        $('#submit').hide();
// Timeout calls to repopulate the content after the timout alert has been displayed
        setTimeout(function () {
            alert("This is a timed quiz! You have one minute to select your best answer before your time runs out. Click O.K. to start!");
            $('#countdown-container').attr("style", "text-align: center; margin-left: inherit; margin-right: inherit; margin-bottom: 10px; background-color: green !important");
            $('#countdown-container').show();
            $('#trivia-form').trigger("reset");
            $('#end-game-container').hide();
            $('#trivia-form').show();
            $('#submit').show();
            clearInterval(gameTimer);
            time = 30;


        }, 1000 * 3);



    }


//Initial start and display timer for the game play input session
    function gameTimer() {
        setInterval(function () {


            time--;
            console.log(time);
            $('#countdown').text("Time Remaining: " + time);
            if (time === 0) {
                alertAndReset();
                // alert("This is a timed quiz! You have 30 seconds to select your best answer before your time runs out. Click O.K. to start!");

            }

            if (time <= 10) {

                $('#countdown-container').attr("style", "text-align: center; margin-left: inherit; margin-right: inherit; margin-bottom: 10px; background-color: red !important");
                

            }






        }, 1000);

    };


    $('#submit').on('click', function (event) {
        clearInterval(gameTimer);
        alertAndReset();
        console.log(correct, wrong);
    
    });

});