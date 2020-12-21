let data = {
  response_code: 0,
  results: [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which country will host the 2020 Summer Olympics?",
      correct_answer: "Japan",
      incorrect_answers: ["China", "Australia", "Germany"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which player holds the NHL record of 2,857 points?",
      correct_answer: "Wayne Gretzky",
      incorrect_answers: ["Mario Lemieux ", "Sidney Crosby", "Gordie Howe"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "When was the FC Schalke 04 founded?",
      correct_answer: "1904",
      incorrect_answers: ["1909", "2008", "1999"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which country will host the 2022 FIFA World Cup?",
      correct_answer: "Qatar",
      incorrect_answers: ["USA", "Japan", "Switzerland"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which two teams played in Super Bowl XLII?",
      correct_answer: "The New York Giants &amp; The New England Patriots",
      incorrect_answers: [
        "The Green Bay Packers &amp; The Pittsburgh Steelers",
        "The Philadelphia Eagles &amp; The New England Patriots",
        "The Seattle Seahawks &amp; The Denver Broncos",
      ],
    },
  ],
};
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
let point = 0;
let btn = document.getElementById('btn')
let index = undefined
let $ques = undefined
let answers = undefined
let answers_values = undefined
let answersFromData = []
function randomQuiz() {
        
    index = Math.floor(Math.random() * 5);
    $ques = document.getElementById('question')
    answers = document.querySelectorAll('.answers label')
    answers_values = document.querySelectorAll('.answers input')
    answersFromData = []
    answersFromData.push(data.results[index].correct_answer)
    data.results[index].incorrect_answers.forEach(element => {
        answersFromData.push(element)
    });
    answersFromData = shuffle(answersFromData)
    $ques.innerHTML = data.results[index].question
    for(let ans in answersFromData) {
        answers[ans].innerHTML = answersFromData[ans]
        answers_values[ans].value = answersFromData[ans]
    }   
}
randomQuiz()
document.querySelector('#point').innerHTML ="Points: " + point;
btn.addEventListener('click', function() {
    if(document.querySelector('input[name="form"]:checked').value === data.results[index].correct_answer) {
        alert('your answer is correct')
        point++;
        console.log(point)
        document.querySelector('#point').innerHTML ="Points: " + point;
        randomQuiz()
        document.querySelector('form').reset()
    }
    else {
        alert('wrong');
        document.querySelector('form').reset()
    }
})
