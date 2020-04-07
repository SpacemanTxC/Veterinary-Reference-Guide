
// need to create a function for the Quiz
  //four parts are needed for the quiz: questions, place for them, results to show, and button to use
function quizGenerator(questions, quizContainer, resultsContainer, submitButton){

      function displayQuiz(questions, quizContainer){
        // create 2 empty arrays
          var output = [];
          var answers = [];

          //for loop for each question looking at the lenght
          for(var i = 0; i < questions.length; i++ ){
              //reset the answers for each try
              answers = [];

              //for each available answer to the question
              for( letter in questions[i].answers){
                // adds button
                answers.push(
                  '<label>'
                    + '<input type="radio" name="question '+i+'" value="'+letter+'">'
                    + letter + ': '
                    + question[i].answers[letter]
                  + '</label>'
                );
              }
              //adds questin and answers to output
              output.push(
                '<div class="question">' + questions[i].questions + '</div>'
                + '<div class="answers">' + answers.join('') +'</div>'
              );
          }
          //changes the output to html to display 
          quizContainer.innerHtml = output.join('');
      }

      function showResults(questions, quizContainer, resultsContainer){
          // code for results
      }

      //call the function
      displayQuiz(questions, quizContainer);

      //creatng an onclick function for the button
      submitButton.onclick = function(){
          //button calls the show results function
          showResults(questions, quizContainer, resultsContainer);
      }

// array will store the questions and correct answers
var myQuestions = [
  {
    question: "What is the capital of the USA?",
    answers: {
      a: "Austin",
      b: "Seattle",
      c: "DC"
    },
    correctAnswer: "c"
  },
    {
      question: "What year was the USA formed?",
      answers: {
        a: "1999",
        b: "1776",
        c: "1864"
      },
      correctAnswer: "b"
    }
  ];
