var myQuestions = [
  {
    question: "Who is the Boss?",
    answers: {
      a:'Me',
      b:'I',
      c:'Myself',
    },
    correctAnswer:'b'
  },

  {
    question: "Is it raining?",
    answers: {
      a:'Yes',
      b:'No',
      c:'who Knows',
    },
    correctAnswer:'b'
  }

];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions,quizContainer,resultsContainer,submitButton);

function generateQuiz(questions,quizContainer,resultsContainer,submitButton) {
  function showQuestions(questions,quizContainer) {
    var output = [];
    var answers;

    for(var i=0 ; i<questions.length ; i++)
    {
      answers=[];
      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'+ letter + ':'
            + questions[i].answers[letter]
            + '<label>'
        );

        }
        output.push(
          '<div class="question">' +questions[i].question + '</div>'+
          '<div class="answers">' + answers.join('') + '</div>'
        );

    }
        quizContainer.innerHTML = output.join('');
  }

  function showResults(questions,quizContainer,resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0 ; i<questions.length ; i++)
    {

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;


      if(userAnswer==questions[i].correctAnswer)
      {
        numCorrect++;

        answerContainers[i].style.color='green';
      }
      else {

        answerContainers[i].style.color='red';
      }

    }

  }

  showQuestions(questions,quizContainer);

  submitButton.onclick = function() {
    showResults(questions,quizContainer,resultsContainer);
  }

}
