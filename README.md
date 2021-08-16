it # Code-Capitalism


narration:

> Do you want to learn to code?
<yes> <no>
clicking yes opens up the next narrative element, click no takes you to the my little pony fan wiki

> This is a game about coding, it's not going to actually teach you to code
<well, duh> <I'm not an idiot>
clicking either takes you to the next narrative element

> Your first project is "Hello world"
<code>
you click the button, it adds lines of code, when you have 4 lines, a run button appears
And you run and complete the hello world project
the next project takes 10 lines, but as you're coding there's some bugs you don't find out about until you click the run button, and the <fix bugs> button appears.
the next project you get a linter, and some of the bugs become visible as you make them


## Phase 1 concepts unlock schedule

Each gameplay conect is unlocked via a project.  At the start of the project, a dialog box will explain the concept

### Writing code - first project
**dialog**: "Each project requires you to write code to complete it.  You're going to write a simple program to print "hello world" to the screen, by clicking the [code] button"

**effect**: Unlocks the code button and the lines of code counter.

### Syntax Bugs - second project
**dialog**: "As you write code, sometimes you can mispell keywords or variables, and this will prevent the proper execution of your code"

**effect**: unlocks the syntax bugs counter, unlocks the fix syntax bugs button (note that syntax bugs are not visible until you try to run the project, and you find them one at a time)


### Linter - third project
**dialog**: "A linter will read your code looking for syntax bugs, list them for you"

**effect**: unlocks the lint button (the lint button can be clicked any time and will find all of the syntax bugs immediately)

### Linter - third project
**dialog**: "Sometimes your code contains errors that cause compuational errors"

**effect**: unlocks the logic bugs counter and the print debugging button (note that logic bugs are not visible until you try to run the project, and you find them one at a time)

### Unit tests - fourth project
**dialog**: "You can write tests that will execute parts of your code, and compare the observed behavior to the expected behavior"

**effect**: unlocks the write unit test button, and unlocks the run tests button (each unit test has a 50% chance of finding a bug when the run tests button is pressed. any logic bug not found by tests will still be found (one at a time) when you run the code)



Phase 1 gameplay loop:

1. select project
2. code or write tests or debug or refactor
3. when functionality is at 100%, click run 
4. if there are bugs, go to step 2
5. collect reward for project
6. go to step 1.

note that all of these options might not be available at the start of phase 1, as a new gameplay concept is introduced with each of the first 6? projects.


Skills:
- Programming: How much functionality is added per line of code
- Refactoring: how many lines of code can be deleted while retaining the same amound of functionality.
- Debugging: how fast bugs are found
- Estimation: tell you how much functionality has been completed.  Higher skill is more accurate.

Concepts:
- Bugs: every time you add a line of code, you have a chance to introduce a bug **proportional** to the number current lines of code.  This means that bugs are quadratic with code size.  There are different kinds of bugs:
  - syntax
  - logic
  - security
- Linter: shows syntax bugs every time a line of code is added
- Print Debugging: can (slowly) find logic bugs
- Interactive Debugger: finds bugs faster
- unit tests: each unit test has a chance to catch a bug when adding code; also each unit test prevents a bug when refactoring