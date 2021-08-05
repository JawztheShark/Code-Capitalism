let game = {
  code: 0,
  autocoders: 0,
  bugs: 0
};
// add an autocoder
document.getElementById('autoincrement').onclick = function (e) {
  game.autocoders += 1;
};
// add a line of code
document.getElementById('increment').onclick = function (e) {
  game.code += 1;
};
//prints stuff when you press run on hello world
document.getElementById('helloWorldProject').onclick = function (e) {
      document.getElementById('helloWorldProject').style.display = "none"
      game.code++;
      document.getElementById('listSort').style.display = "block"
      document.getElementById('helloWorldDone').style.display = "block"
      document.getElementById("increment").disabled = false;
    };
//prints stuff when you press run on list sort
document.getElementById('listSortRun').onclick = function (e) {
      document.getElementById('listSort').style.display = "none"
      document.getElementById('listSortDone').style.display = "none"
      document.getElementById('helloWorldDone').style.display = "none"
      document.getElementById('listSortAfter').style.display = "block"
      document.getElementById("listSortRun").disabled = true;
      game.bug++
      let counterDisplayBugs = document.querySelector('.bug-display');
      counterDisplayBugs.style.display = "block";
      counterDisplayBugs.innerHTML = "Bugs " + Math.round(game.bugs);
    }
    //the debug button
    document.getElementById('fixBug').onclick = function (e) {
      document.getElementById('fixBug').style.display = "none"
    }


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
};
document.getElementById('duhTwo').onclick = function (e) {
  document.getElementById('secondPrompt').style.display = "none"
  document.getElementById('duh').style.display = "none"
  document.getElementById('thirdPrompt').style.display = "block";
  document.getElementById('increment').style.display = "block"
};

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
  if (game.code == 10) {
    document.getElementById('thirdPrompt').style.display = "none"
    document.getElementById('helloWorldProject').style.display = "block"
    document.getElementById("increment").disabled = true;
  }
  if (game.code == 40) {
    document.getElementById("increment").disabled = true;
    document.getElementById('listSortDone').style.display = "block"
  }
  if (game.code >= 1000) {
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


