const quizdb= [
    {
        question: "Q1. With 482 runs in the tournament, who finished as the leading run-scorer for India?",
        a: "Virender Sehwag",
        b: "Virat Kohli",
        c: "Gautam Gambhir",
        d: "Sachin Tendulkar",
        ans: "ans4"
    },
    {
        question: "Q2. Who was not included in the world cup squad?",
        a: "Ravichandran Ashwin",
        b: "Rohit Sharma",
        c: "Virat Kohli",
        d: "Piyush Chawla",
        ans: "ans2"
    },
    {
        question: "Q3. Who has first scored centuries in all the formats for India?",
        a: "Virat Kohli",
        b: "Rohit Sharma",
        c: "KL Rahul",
        d: "Suresh Raina",
        ans: "ans4"
    },
    {
        question: "Q4. Who was coaching India in the tournament?",
        a: "Andy Flower",
        b: "Anil Kumble",
        c: "Gary Kirsten",
        d: "Lalchand Rajput",
        ans: "ans3"
    },
    {
        question: "Q5. How many times was Yuvraj Singh named Player of the Match in the tournament?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans4"
    },
    {
        question: "Q6. Which of these India bowlers didn't play in their semi-final win over Pakistan?",
        a: "Ashish Nehra",
        b: "Ravichandran Ashwin",
        c: "Munaf Patel",
        d: "Harbhajan Singh",
        ans: "ans2"
    },
    {
        question: "Q7. Who was the Top Wicket Taker in the World Cup?",
        a: "Zaheer Khan",
        b: "Harbhajan Singh",
        c: "Ravichandran Ashwin",
        d: "Ashish Nehra",
        ans: "ans1"
    },
    {
        question: "Q8. Who hit a score of 175 against Bangladesh?",
        a: "Sachin Tendulkar",
        b: "Virat Kohli",
        c: "Virender Sehwag",
        d: "Gautam Gambhir",
        ans: "ans3"
    },
    {
        question: "Q9. Which of these players received the 'Man of the Tournament' award in the tournament?",
        a: "Yuvraj Singh",
        b: "Sachin Tendulkar",
        c: "Virender Sehwag",
        d: "Virat Kohli",
        ans: "ans1"
    },
    {
        question: "Q10. How much did Virat Kohli score in the match against Bangladesh?",
        a: "120",
        b: "97*",
        c: "103",
        d: "100*",
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
    