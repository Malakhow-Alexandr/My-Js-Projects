const refs = {
  clockFace: document.querySelector('.js-clock-stopwatch'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
};


class Stopwatch {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const stopwatchTime = this.getTimeComponents(currentTime - startTime);

      this.onTick(stopwatchTime);
    }, 1000);
  }
  stop() {
    clearInterval(stopwatch.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, seconds };
  }
}

const stopwatch = new Stopwatch({
  onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', stopwatch.start.bind(stopwatch));
refs.stopBtn.addEventListener('click', stopwatch.stop.bind(stopwatch));


function updateClockFace({ hours, mins, seconds }) {
  refs.clockFace.textContent = `${hours}:${mins}:${seconds}`;
}
