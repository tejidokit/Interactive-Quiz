
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let score = 0;
    //build array to call out question values
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; 

    //checking answers using a callback function with two parameters, answer=actual value (a or b), index=position in the array
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    console.log(score);
});
