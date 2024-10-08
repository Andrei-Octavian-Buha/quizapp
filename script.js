let currentQuestion = 0;
let right = 0;
function init(){
    document.getElementById("questionsLenght").innerHTML = questions.length;
    document.getElementById("allquestions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    if(currentQuestion >= questions.length){
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
    } else{
        document.getElementById('questionPos').innerHTML = 1 + currentQuestion;
        document.getElementById("questionTitle").innerHTML = question.question;
        document.getElementById("answer_1").innerHTML = question.answer_1;
        document.getElementById("answer_2").innerHTML = question.answer_2;
        document.getElementById("answer_3").innerHTML = question.answer_3;
        document.getElementById("answer_4").innerHTML = question.answer_4;
    }
} 

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question.right_answer}`;
    if(selectedQuestionNumber == question.right_answer){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        right++;
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('rightQuestionTotal').innerHTML = right;
}

function nextQuestion() {
    currentQuestion++; // z.b von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}