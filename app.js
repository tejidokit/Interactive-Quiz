
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
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`; //look for span in results, then change the text content using a template string to output a variable inside ${score}

    //remove the default display none bootstrap/css propery fromt the html page
    result.classList.remove('d-none');

});

let i = 0;

setInterval(() => {
    console.log('hello');
    1++;
    if(i === 5){
        
    }
}, 1000);



//### Window Object (global object) ###

// console.log('hello');
// or
// window.console.log('hello');
//it's the same thing

// console.log(document.querySelector('form'));
// //is the same as
// console.log(window.document.querySelector('form'));
// //ans; <form class="quiz-form text-light">

// alert('hello');
// //is the same as
// window.alert('hello');

//another method example setTimeout takes a callback function which is an arrow function and fires that function after a set amount of time
// setTimeout(() => {
//     alert('hello');
// }, 3000);
//is the same as widnow.setTimeout('')




