let questions = [{
  id: 1,
  question: "Which of these git command is use to start a new repository?",
  options: ['New', 'Clone', 'Init', 'Create'],
  answer: 'Init'
},
{
  id: 2,
  question: "Which of the following is not a JavaScript framework?",
  options: ['React.js', 'Node.js', 'Vue.js', 'Angular.js'],
  answer: 'Node.js'
},
{
  id: 3,
  question: "As React.js is to JavaScript, so is _____ to PHP?",
  options: ['Bootstrap', 'Laravel', 'Ionic', 'Cordova'],
  answer: 'Laravel'
},
{
  id: 4,
  question: "Select the odd option out of the following ?",
  options: ['HTML', 'BootStrap', 'Node.js', 'React.js'],
  answer: 'Node.js'

},
{
  id: 5,
  question: "The world is currently battling with?",
  options: ['Covid-19', 'Flu', 'Lockdown', 'Coronavirus'],
  answer: 'Coronavirus'

}



]
let questionCard = document.querySelector('.questions');
let nextButton = document.querySelector("#next-button");
let submitButton = document.querySelector("#submit-button");
let result = document.querySelector('.result');
let scoreBoard = document.querySelector(".score-board");
let score = document.querySelector('#score');
let count = 0;
let myQuestions = [];
let answers = [];
let currentContainer = 0;


questions.map((quiz, i) => {
  answers.push(quiz.answer)
  let option = quiz.options.map((option, i) => {
    return `
        <div>
          <h3>
          <input type='radio' name='option' onclick='showValue(this)' id=option${i}   value=${option}>
          <label for='option${i}'>${option}</label>
        </h3> 
       </div>
      `
  })
  myQuestions.push(
    `<div class="container" id=${i}>
      <div class="card">
        <h2 class='question'>${quiz.question}</h2>
        <div class='options'>
        ${option}
         </div>
      </div>
    </div>`
  )
})
questionCard.innerHTML = myQuestions.join('');
let containers = document.querySelectorAll('.container');




const showContainer = (n) => {
  containers[currentContainer].classList.remove('active-container');
  containers[n].classList.add('active-container');
  currentContainer = n;
  if (currentContainer === containers.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}




function showValue(radio) {
  var selectedLabel = containers[currentContainer].getElementsByTagName('label');
  var availableOptions = containers[currentContainer].getElementsByTagName('input');
  for (i = 0; i < availableOptions.length; i++) {
    availableOptions[i].setAttribute('disabled', '');
  }
  let userOption;
  if ((radio.value === questions[currentContainer].answer)) {
    for (var i = 0; i < selectedLabel.length; i++) {
      if (selectedLabel[i].textContent.includes(radio.value)) {
        selectedLabel[i].style.backgroundColor = 'green';
        selectedLabel[i].style.color = 'white';
        selectedLabel[i].style.padding = '0.5em';

      }
      else {
      }
    }
    count++;
    score.textContent = `${count}`;
  }

  else {
    for (var i = 0; i < selectedLabel.length; i++) {

      if (selectedLabel[i].textContent.includes(radio.value)) {
        selectedLabel[i].style.backgroundColor = 'red';
        selectedLabel[i].style.color = 'white';
        selectedLabel[i].style.padding = '0.5em'
        userOption = 'wrong';
      } else {
      }
    }

  }
  if (userOption === 'wrong') {
    for (j = 0; j < selectedLabel.length; j++) {
      if (selectedLabel[j].textContent.includes(questions[currentContainer].answer)) {
        selectedLabel[j].style.backgroundColor = 'green';
        selectedLabel[j].style.color = 'white';
        selectedLabel[j].style.padding = '0.5em';
      }
    }
  }
}

const showResult = () => {
  result.innerHTML =
    `<h1>Your score is: ${count}</h1>
  `
  result.style.display = "block";
  submitButton.style.display = 'none';
  scoreBoard.style.display = 'none';
  containers[currentContainer].style.display = 'none';

}
submitButton.addEventListener('click', () => {

  showResult();
}
);


nextButton.addEventListener('click', () => {
  showContainer(currentContainer + 1);
}
)
showContainer(currentContainer);

