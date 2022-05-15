const quizdb= [
    {
        question: "Q1. What record did MS Dhoni break in this tournament?",
        a: "Highest score by a Wicket-Keeper",
        b: "First Captain to win all ICC trophies",
        c: "Most stumpings in a single match",
        d: "Best strike-rate for a wicket-keeper",
        ans: "ans2"
    },
    {
        question: "Q2. Which was the team which India beat to win the tournament?",
        a: "New Zealand",
        b: "Australia",
        c: "South Africa",
        d: "England",
        ans: "ans4"
    },
    {
        question: "Q3. Who was the highest wicket taker in the tournament?",
        a: "Ishant Sharma",
        b: "Ravichandran Ashwin",
        c: "Ravindra Jadeja",
        d: "Umesh Yadav",
        ans: "ans3"
    },
    {
        question: "Q4. Who has scored the two centuries in the tournament?",
        a: "Shikhar Dhawan",
        b: "Virat Kohli",
        c: "Rohit Sharma",
        d: "Suresh Raina",
        ans: "ans1"
    },
    {
        question: "Q5. Who has the Highest Average in the tournament for India?",
        a: "Virat Kohli",
        b: "Shikhar Dhawan",
        c: "MS Dhoni",
        d: "Suresh Raina",
        ans: "ans2"
    },
    {
        question: "Q6. Who was the player of the match in the final?",
        a: "Virat Kohli",
        b: "Ravichandran Ashwin",
        c: "Ravindra Jadeja",
        d: "Rohit Sharma",
        ans: "ans3"
    },
    {
        question: "Q7. Which team did India play against in the semi-final?",
        a: "Sri-Lanka",
        b: "Australia",
        c: "South Africa",
        d: "England",
        ans: "ans1"
    },
    {
        question: "Q8. Which batsmen had the highest score in the final?",
        a: "Ravindra Jadeja",
        b: "Virat Kohli",
        c: "Rohit Sharma",
        d: "Shikhar Dhawan",
        ans: "ans2"
    },
    {
        question: "Q9. What was the bowling average of Ravindra Jadeja in the tournament?",
        a: "20.59",
        b: "16.83",
        c: "18.34",
        d: "12.83",
        ans: "ans4"
    },
    {
        question: "Q10. How many Indians were included in the 'Team of the Tournament'?",
        a: "6",
        b: "3",
        c: "5",
        d: "2",
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
    