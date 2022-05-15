const quizdb= [
    {
        question: "Q1. Who was the bowler who bowled the final over in the Final?",
        a: "Harbhajan Singh",
        b: "Joginder Sharma",
        c: "Irfan Pathan",
        d: "RP Singh",
        ans: "ans2"
    },
    {
        question: "Q2. Where was 2007 ICC World T20 held?",
        a: "India",
        b: "Australia",
        c: "West-Indies",
        d: "South Africa",
        ans: "ans4"
    },
    {
        question: "Q3. Which of these players were included in the Indian squad?",
        a: "Rohit Sharma",
        b: "Sachin Tendulkar",
        c: "Virat Kohli",
        d: "Suresh Raina",
        ans: "ans4"
    },
    {
        question: "Q4. How many T20s did all the players jointly play before the world cup?",
        a: "18",
        b: "10",
        c: "7",
        d: "8",
        ans: "ans3"
    },
    {
        question: "Q5. India's first match of the tournament was washed out. Who were they scheduled to play?",
        a: "Zimbabwe",
        b: "New Zeland",
        c: "Kenya",
        d: "Scotland",
        ans: "ans4"
    },
    {
        question: "Q6. What was done the first time in cricket history in the match between India and Pakistan?",
        a: "Super-Over",
        b: "Bowl-Out",
        c: "DRS system was used",
        d: "Tie Game",
        ans: "ans2"
    },
    {
        question: "Q7. Yuvraj famously hit Stuart Broad for six 6s in an over. Which over of India's innings was it?",
        a: "19th",
        b: "20th",
        c: "16th",
        d: "17th",
        ans: "ans1"
    },
    {
        question: "Q8. Who was India's top-scorer in the semifinal win over Australia?",
        a: "Gautam Gambhir",
        b: "Virender Sehwag",
        c: "Yuvraj Singh",
        d: "MS Dhoni",
        ans: "ans3"
    },
    {
        question: "Q9. How many runs did Pakistan need from the final's last over?",
        a: "13",
        b: "11",
        c: "10",
        d: "9",
        ans: "ans1"
    },
    {
        question: "Q10. Who was the second highest run scorer for India?",
        a: "Virender Sehwag",
        b: "Yuvraj Singh",
        c: "MS Dhoni",
        d: "Robin Uthappa",
        ans: "ans3"
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
    