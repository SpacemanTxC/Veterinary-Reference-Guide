
// need to create a function for the Quiz
  //four parts are needed for the quiz: questions, place for them, results to show, and button to use
function quizGenerator(questions, quizContainer, resultsContainer, submitButton){

      function displayQuiz(questions, quizContainer){
          //code for the questions
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
var myQuestions = [];
