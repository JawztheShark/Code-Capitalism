
const dialogs = {
  "start": {
    "text": "Do you want to learn to code?",
    "buttons": [
      {
        "text": "Yes",
        "action": "setDialogState('second')"
      },{
        "text": "No",
        "action": "navigate('https://en.wikipedia.org/wiki/My_Little_Pony')"
      }
    ],
    "onbegin": () => {},
    "onend": () => {}
  },
  "second": {
    "text": "This game is about coding, it's not going to actually teach you to code",
    "buttons": [
      {
        "text": "Yes",
        "action": "setDialogState('second')"
      },{
        "text": "No",
        "action": "navigate('https://en.wikipedia.org/wiki/My_Little_Pony')"
      }
    ],
    "onbegin": () => {},
    "onend": () => {}
  }
};

let game = {
  dialogState: undefined,
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
  bugCode: 0,
  bug: 0,
  stringLength: 0,
  stringLengthAfter: 0
}

function display(dialog) {
  let cur = dialogs[dialog];

  let buttons = "";
  for (button of cur["buttons"]) {
    buttons += `<button type="button" onclick="${button["action"]}">${button["text"]}</button>`
  }
  document.getElementById("dialog").innerHTML = 
  `<dialog open>${cur["text"]}<br>${buttons}`;

}

function navigate(url) {
  window.location.href = url;
}

function setDialogState(dialog) {
  if (game.dialogState) {
    dialogs[game.dialogState]["onend"]()
  }
  if (dialog) {
    display(dialog)
    dialogs[dialog]["onbegin"]()
  }
  game.dialogState = dialog;
}

setDialogState("start")

/*
// add an autocoder
document.getElementById('autoincrement').onclick = function (e) {
  game.autocoders += 1;
};
// add a line of code
document.getElementById('increment').onclick = function (e) {
  game.code += 1;
  //make 40
  if (narative.bugCode == 1) {
    game.bugs += Math.round(Math.random() - .4);
  }
  if (narative.bugCode == 2) {
    game.bugs += Math.round(Math.random() - .45);
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
  narative.bugCode = 1;
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
//the string length run button
document.getElementById('stringLengthRun').onclick = function (e) {
  narative.stringLength = 0;
  document.getElementById('stringLengthRun').style.display = "none";
  narative.stringLengthAfter = 1;
}
//the begone bugs button
document.getElementById('LessBugsPress').onclick = function (e) {
  narative.bugCode = 2;
  narative.stringLengthAfter = 0;
  narative.sortList = 0;
  document.getElementById("increment").disabled = false;
  game.code++;
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
    document.getElementById('stringLength').style.display = "block"
  } else {
    document.getElementById('stringLength').style.display = "none"
  }
  if (narative.stringLengthAfter == 1) {
    document.getElementById('lessBugs').style.display = "block"
    document.getElementById('lessBugsButton').style.display = "block"
  } else {
    document.getElementById('lessBugs').style.display = "none"
    document.getElementById('lessBugsButton').style.display = "none"
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
  //put to 90
  if (game.code == 5 && game.bugs == 0) {
    document.getElementById("increment").disabled = true;
    document.getElementById('stringLengthDone').style.display = "block"
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



  // , , find value, reverse list, find length of a string, modifying arrays, loops, nesting loops, recursion, match strings, reverse strings, title case strings

*/
