const quizdb= [
    {
        question: "Q1. What is the thing that seperates 2002 Champions Trophy from all the others of the same kind?",
        a: "This competition was held for the first time.",
        b: "Two teams were declared as co-winners",
        c: "It was the first time DRS was used",
        d: "None of the Above",
        ans: "ans2"
    },
    {
        question: "Q2. Which were the teams that India had in it's pool?",
        a: "Pakistan, Sri-Lanka",
        b: "Pakistan, England",
        c: "England, Zimbabwe",
        d: "West-Indies, Sri-Lanka",
        ans: "ans3"
    },
    {
        question: "Q3. Who was the highest scorer of the tournament?",
        a: "Virender Sehwag",
        b: "Rahul Dravid",
        c: "Sourav Ganguly",
        d: "Sachin Tendulkar",
        ans: "ans1"
    },
    {
        question: "Q4. How much did Virender Sehwag score against England?",
        a: "90*",
        b: "109",
        c: "93",
        d: "126",
        ans: "ans4"
    },
    {
        question: "Q5. Which of these players was not a part of the Indian squad?",
        a: "Dinesh Mongia",
        b: "Yuvraj Singh",
        c: "Gautam Gambhir",
        d: "Anil Kumble",
        ans: "ans3"
    },
    {
        question: "Q6. When was the final of the tournament scheduled?",
        a: "30th September, 2002",
        b: "25th September, 2002",
        c: "27th September, 2002",
        d: "29th September, 2002",
        ans: "ans4"
    },
    {
        question: "Q7. Who was the highest wicket taker in the tournament for India?",
        a: "Zaheer Khan",
        b: "Harbhajan Singh",
        c: "Anil Kumble",
        d: "Ashish Nehra",
        ans: "ans1"
    },
    {
        question: "Q8. What was the batting average of Virender Sehwag in the tournament?",
        a: "85.33",
        b: "87.36",
        c: "89.82",
        d: "90+",
        ans: "ans4"
    },
    {
        question: "Q9. Which team was declared joint-winners with India?",
        a: "Pakistan",
        b: "Australia",
        c: "Sri-Lanka",
        d: "England",
        ans: "ans3"
    },
    {
        question: "Q10. What was the score which India made in the final before the rainfall?",
        a: "50/2",
        b: "38/1",
        c: "40/3",
        d: "34/1",
        ans: "ans2"
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
    