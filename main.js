const url = 'https://api.adviceslip.com/advice';

const advice = document.querySelector("#advice");
const adviceNumber = document.querySelector("#adviceNumber");

async function Advices() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    adviceNumber.innerText += `${data.slip.id}`;
    advice.innerText += `"${data.slip.advice}"`;
}

Advices();

function reset(){
    location.reload();
}