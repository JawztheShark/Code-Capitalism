let code = 0;
let game = {
  autocoders: 0
};

document.getElementById('autoincrement').onclick = function (e) {
  game.autocoders += 1;
  let counterDisplayElem = document.querySelector('.auto-display');
  counterDisplayElem.style.display = "block";
  counterDisplayElem.innerHTML = "Autocoders " + game.autocoders;
};

document.getElementById('increment').onclick = function (e) {
  code++;
  let counterDisplayElem = document.querySelector('.counter-display');
  counterDisplayElem.style.display = "block";
  counterDisplayElem.innerHTML = "Lines of code " + Math.round(code);
  if (code >= 10) {
    document.getElementById("autoincrement").style.display = "block";
    }
};
function tick() {
  code += game.autocoders / 20;
  let counterDisplayElem = document.querySelector('.counter-display');
  counterDisplayElem.style.display = "block";
  counterDisplayElem.innerHTML = "Lines of code " + Math.round(code);
}
const projects = {
  hello_world: {
    name: "Hello world",
    difficulty: 1
  },
  sort_list: {
    name: "sort list",
    difficulty: 3
  },
};

window.setInterval(tick, 50);
  // , , find value, reverse list, find length of a string, modifying arrays, loops, nesting loops, recursion, match strings, reverse strings, titel case strings
  

