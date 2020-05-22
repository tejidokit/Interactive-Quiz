
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

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

    // ### Showing the score on the page ###
    result.querySelector('span').textContent = `${score}%`; //look for span in results, then change the text content using a template string to output a variable inside ${score}

    //remove the default display none bootstrap/css propery fromt the html page
    result.classList.remove('d-none');

});

//### Window Object (global object) ###

console.log('hello');




