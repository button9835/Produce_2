
let onTickCallback = () => {};
const TPS = 60; // Ticks Per Second
const INTERVAL = 1000 / TPS;

let intervalId = null;

function tick() {
  onTickCallback();
}

function start() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(tick, INTERVAL);
}

function stop() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function setOnTick(callback) {
  onTickCallback = callback;
}

export { start, stop, setOnTick };
