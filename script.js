const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number')
const adviceQuoteSlot = document.querySelector('.advice-generator__quote')
const fetch8tn = document.querySelector('.advice-generator__button')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    return advice
}

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
}

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;

    // render
    renderAdvice(advice);
}

window.addEventListener('DOMContentLoaded', () => {
    fetch8tn.addEventListener('click', generateNewAdvice)
})

// setTimeout(() => {console.log(2.5)}, 1)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)