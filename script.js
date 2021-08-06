let game = {
  code: 0,
  autocoders: 0,
  bugs: 0
};
let narative = {
  firstPrompt: 1,
  learn: 0,
  learn2: 0,
  helloWorld: 0,
  sortList: 0,
  bug: 0,
  stringLength: 0
}
// add an autocoder
document.getElementById('autoincrement').onclick = function (e) {
  game.autocoders += 1;
};
// add a line of code
document.getElementById('increment').onclick = function (e) {
  game.code += 1;
  //make 40
  if (game.code > 3) {
  game.bugs += Math.round(Math.random())
}
};
//narative makes div go away when press yes do you want to learn to code
document.getElementById('Yes').onclick = function (e) {
  narative.learn = 1;
  narative.firstPrompt = 0;
}
document.getElementById('duh').onclick = function (e) {
  narative.learn2 = 1;
  narative.learn = 0;
};
document.getElementById('duhTwo').onclick = function (e) {
  narative.learn2 = 1;
  narative.learn = 0;
};
//prints stuff when you press run on hello world
document.getElementById('helloWorldProject').onclick = function (e) {
  game.code++;
  narative.learn2 = 0;
  narative.helloWorld = 1;
    };
//prints stuff when you press run on list sort
document.getElementById('listSortRun').onclick = function (e) {
      game.bugs++;
      narative.sortList = 1;
      narative.helloWorld = 0;
      narative.bug = 1;
    }
    document.getElementById('listSortRunBugless').onclick = function (e) {
      narative.sortList = 0;
      narative.stringLength = 1;
      game.code++;
    }
    //the debug button
    document.getElementById('fixBug').onclick = function (e) {
      game.bugs--;
    }


// render the current game state
function render() {
  //renders the first prompt do you want to learn to code and rendors the second prompt
  if (narative.firstPrompt == 1) {
    document.getElementById('firstPrompt').style.display = "block";
  } else {
    document.getElementById('firstPrompt').style.display = "none";
  }
  if (narative.learn == 1) {
  document.getElementById('secondPrompt').style.display = "block";
  } else {
    document.getElementById('secondPrompt').style.display = "none"
  }
  if (narative.learn2 == 1) {
    document.getElementById('thirdPrompt').style.display = "block";
    document.getElementById('increment').style.display = "block";
  } else {
    document.getElementById('thirdPrompt').style.display = "none";
  }
  if (narative.helloWorld == 1) {
      document.getElementById('listSort').style.display = "block"
      document.getElementById('helloWorldDone').style.display = "block"
      document.getElementById('helloWorldProject').style.display = "none"
      document.getElementById("increment").disabled = false;
  } else {
    document.getElementById('helloWorldDone').style.display = "none"
  }
  if (narative.sortList == 1) {
    document.getElementById('listSort').style.display = "none"
      document.getElementById('listSortDone').style.display = "none"
      document.getElementById('listSortAfter').style.display = "block"
      document.getElementById("listSortRun").disabled = true;
  } 
  if (narative.sortList == 1 && game.bugs == 0) {
    document.getElementById("listSortRun").disabled = false;
    document.getElementById('listSortAfter').style.display = "none"
    document.getElementById('listSortDone').style.display = "none"
    document.getElementById('listSortRun').style.display = "none"
    document.getElementById('debuggedListSort').style.display = "block"
    document.getElementById('listSortDoneBugless').style.display = "block"
  }

  if (narative.bug == 1) {
    document.getElementById('fixBugDiv').style.display = "block"
    let counterDisplayBugs = document.querySelector('.bug-display');
      counterDisplayBugs.style.display = "block";
      counterDisplayBugs.innerHTML = "Bugs: " + Math.round(game.bugs);
  }
  if (game.bugs == 0) {
    document.getElementById("fixBug").disabled = true;
  } else {
    document.getElementById("fixBug").disabled = false;
  }
  if (narative.stringLength == 1) {
    document.getElementById('debuggedListSort').style.display = "none"
    document.getElementById('listSortDoneBugless').style.display = "none"
    document.getElementById("increment").disabled = false;
  }
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
  //put back to 10
  if (game.code == 1) {
    document.getElementById('thirdPrompt').style.display = "none"
    document.getElementById('helloWorldProject').style.display = "block"
    document.getElementById("increment").disabled = true;
  }
  //put back to 40
  if (game.code == 3) {
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


