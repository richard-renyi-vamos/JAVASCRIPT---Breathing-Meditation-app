const circle = document.querySelector('.circle');
const instruction = document.querySelector('.instruction');
const startButton = document.getElementById('startButton');

const breaths = [
    { text: 'Breathe in...', scale: 1.5 },
    { text: 'Hold...', scale: 1.5 },
    { text: 'Breathe out...', scale: 1 }
];

let currentBreath = 0;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    instruction.textContent = 'Get ready to start...';
    setTimeout(() => {
        startBreathing();
    }, 2000);
});

function startBreathing() {
    const breath = breaths[currentBreath];
    instruction.textContent = breath.text;
    circle.style.transform = `scale(${breath.scale})`;

    currentBreath = (currentBreath + 1) % breaths.length;

    setTimeout(() => {
        startBreathing();
    }, 4000);
}
