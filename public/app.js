const resDiv = document.querySelector('.results');
const resBtn = document.querySelector('#data');
const advNumbDiv = document.querySelector('.advice-number');


resBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};



function getAdvice() {

    fetch('	https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        resDiv.innerHTML = `<h1><q>${Adviceobj.advice}</h1>`;
        advNumbDiv.innerHTML = `<p>ADVICE # ${Adviceobj.id}</p>`;
    }).catch(error => {
        console.log(error);
    });

}