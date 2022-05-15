const quizdb= [
{
	question: "Q1. Which Team did India play in the Semi-Final?",
	a: "England",
	b: "Australia",
	c: "Sri-Lanka",
	d: "Pakistan",
	ans: "ans1"
},
{
	question: "Q2. Who was the Man of the match in the final?",
	a: "Sunil Gavaskar",
	b: "Kapil Dev",
	c: "Madan Lal",
	d: "Mohinder Amarnath",
	ans: "ans4"
},
{
	question: "Q3. How much did India score in the final against the West-Indies?",
	a: "213",
	b: "183",
	c: "140",
	d: "153",
	ans: "ans2"
},
{
	question: "Q4. Who had the Highest score for India in the final?",
	a: "Kris Srikanth",
	b: "Roger Binny",
	c: "Mohinder Amarnath",
	d: "Sunil Gavaskar",
	ans: "ans1"
},
{
	question: "Q5. Kapil Dev made 175 not out vs which team in the tournament?",
	a: "England",
	b: "Australia",
	c: "Zimbabwe",
	d: "Pakistan",
	ans: "ans3"
},
{
	question: "Q6. How old was Kapil Dev when he led India to the title?",
	a: "21",
	b: "31",
	c: "27",
	d: "24",
	ans: "ans4"
},
{
	question: "Q7. What was the margin of victory in the final for India?",
	a: "27 runs",
	b: "32 runs",
	c: "43 runs",
	d: "60 runs",
	ans: "ans3"
},
{
	question: "Q8. Who was the youngest player in the Indian squad in 1983 World-Cup?",
	a: "Ravi Shastri",
	b: "Kapil Dev",
	c: "Madan Lal",
	d: "Roger Binny",
	ans: "ans1"
},
{
	question: "Q9. Who was the Vice-Captain of Indian Team?",
	a: "Madan Lal",
	b: "Sunil Gavaskar",
	c: "Mohinder Amarnath",
	d: "Ravi Shastri",
	ans: "ans3"
},
{
	question: "Q10. With how many points did India end up in the League Stage?",
	a: "10",
	b: "20",
	c: "14",
	d: "16",
	ans: "ans4"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');

let questioncount=0;
let score=0;

const showScore = document.querySelector('#showScore');

const loadq = () =>{
    const questionlist= quizdb[questioncount];
	question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

loadq();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((cae) => {
        if(cae.checked){
            answer = cae.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
	answers.forEach((cae) => cae.checked = false);
}

submit.addEventListener('click', () => {
    const checkedanswer= getCheckAnswer();

    if(checkedanswer == quizdb[questioncount].ans){
        score++;
    }
    questioncount++;

	deselectAll();

    if(questioncount < quizdb.length){
        loadq();
    }
    else{
        showScore.innerHTML = `<h3> Your Score is ${score}/${quizdb.length} &#9996;</h3>
		<button class="btn" onclick="location.reload()"> Play Again </button>`;

		showScore.classList.remove("scoreArea");
    }
});
