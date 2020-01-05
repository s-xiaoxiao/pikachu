import string from "./css.js";

const player = {
  n: 0,
  id: undefined,
  time: 100,
  init: () => {
    player.run();
    player.bindEvents();
  },
  events: {
    btnPause: "stop",
    btnPlay: "run",
    btnSlow: "slow",
    btnNormal: "normal",
    btnFast: "fast"
  },
  bindEvents: () => {
    for (let key in player.events)
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(`#${key}`).onclick = player[player.events[key]];
      }
  },
  run: () => {
    player.id = setInterval(() => {
      console.log(player.n);
      player.n++;
      if (player.n > string.length) {
        player.stop();
        return;
      }
      demo2.innerText = string.substring(0, player.n);
      demo.innerHTML = string.substring(0, player.n);
      demo2.scrollTop = demo2.scrollHeight;
    }, player.time);
  },
  stop: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.stop();
    player.time = 300;
    player.run();
  },
  normal: () => {
    player.stop();
    player.time = 100;
    player.run();
  },
  fast: () => {
    player.stop();
    player.time = 0;
    player.run();
  }
};

player.init();
