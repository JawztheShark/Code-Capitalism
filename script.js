let game = {
  code: 0,
  autocoders: 0
};
// add an autocoder
document.getElementById('autoincrement').onclick = function (e) {
  game.autocoders += 1;
};
// add a line of code
document.getElementById('increment').onclick = function (e) {
  game.code += 1;
};

//narative makes div go away when press yes
document.getElementById('Yes').onclick = function (e) {
  document.getElementById('firstPrompt').style.display = "none";
  document.getElementById('secondPrompt').style.display = "block";
};
document.getElementById('duh').onclick = function (e) {
  document.getElementById('secondPrompt').style.display = "none"
  document.getElementById('duh').style.display = "none"
  document.getElementById('thirdPrompt').style.display = "block";
  document.getElementById('increment').style.display = "block"
}
document.getElementById('duhTwo').onclick = function (e) {
  document.getElementById('secondPrompt').style.display = "none"
  document.getElementById('duh').style.display = "none"
  document.getElementById('thirdPrompt').style.display = "block";
  document.getElementById('increment').style.display = "block"
}

// render the current game state
function render() {
  //adds autocoders and displays number of autocoders
  if (game.autocoders > 0) {
    let counterDisplayElem = document.querySelector('.auto-display');
    counterDisplayElem.style.display = "block";
    counterDisplayElem.innerHTML = "Autocoders " + game.autocoders;
  }
  if (game.code > 0) {
    let counterDisplayElem = document.querySelector('.counter-display');
    counterDisplayElem.style.display = "block";
    counterDisplayElem.innerHTML = "Lines of code " + Math.round(game.code);
  }
  if (game.code >= 10) {
    document.getElementById("autoincrement").style.display = "block";
  }
};


// exeute the main game loop
function tick() {
  game.code += game.autocoders / 20;
  render();
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

// call the game loop 20 times a second
window.setInterval(tick, 50);



  // , , find value, reverse list, find length of a string, modifying arrays, loops, nesting loops, recursion, match strings, reverse strings, titel case strings
  

