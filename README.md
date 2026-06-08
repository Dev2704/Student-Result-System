# Student Result Management System

A simple JavaScript project I built while revising core JavaScript concepts. The goal wasn't just to make something work, but to understand how data flows through a program using arrays, objects, loops, functions, and array methods.

This project generates report cards for students, calculates averages and grades, identifies strongest and weakest subjects, and displays results in a clean console-based format.

## Features

* Calculate average marks for each student
* Assign grades automatically
* Generate remarks based on performance
* Check pass/fail status
* Find strongest and weakest subjects
* Display visual score bars in the console
* Rank students based on average marks
* Find toppers in each subject

## Concepts Used

This project helped me revise and practice:

* Variables and constants
* Arrays
* Objects
* Functions
* Loops (`for...of`)
* Conditional statements (`if/else`)
* Ternary operators
* Array methods:

  * `map()`
  * `reduce()`
  * `every()`
  * `sort()`
* Object methods:

  * `Object.values()`
  * `Object.entries()`
* Template literals
* Basic data processing and reporting

## Sample Output

```text
============================================
   SEMESTER RESULTS - CLASS REPORT
============================================

---------------------------------------------
  REPORT CARD
  Name : Dev            Roll No: 101
---------------------------------------------
  MATHS         78%  ███████░░░  PASS
  PHYSICS       82%  ████████░░  PASS
  CS            90%  █████████░  PASS
  CIVIL         65%  ██████░░░░  PASS
  MECHANICAL    70%  ███████░░░  PASS
---------------------------------------------
  Average   : 77%
  Grade     : B
  Remarks   : Good
  Result    : PASSED
---------------------------------------------
```

## Why I Built This

I learn better by building projects than by only watching tutorials or reading theory. While revising JavaScript, I wanted a project that used multiple concepts together in a realistic way.

Instead of solving isolated coding questions, this project helped me understand how different functions work together to process data and generate meaningful output.

## How to Run

Make sure Node.js is installed.

```bash
node grade-tracker.js
```

## Future Improvements

Some ideas I might add later:

* Store student data in JSON files
* Take user input from the terminal
* Generate class rankings
* Export report cards to text files
* Add attendance tracking
* Convert it into a web application using HTML, CSS, and JavaScript

## Author

Dev

Built while learning and revising JavaScript through projects 🚀
