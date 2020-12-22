const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const interval = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        this.intervalId = setInterval(() => {
            body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        }, 1000);
        startBtn.setAttribute('disabled', 'disabled');
    },    
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        startBtn.removeAttribute('disabled');
    },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', interval.start.bind(interval));
stopBtn.addEventListener('click', interval.stop.bind(interval));

