# Quizzical

A trivia quiz web application where players choose a difficulty and category, then answer five randomly generated questions and check their score at the end. Categories span a wide range of topics, from geography and history to music and pop culture.

**[View Live Demo](https://quizzical-sx.netlify.app/)**

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project is a trivia quiz web application, where players can choose a difficulty level (easy, medium, or hard) and a category (ranging from general knowledge, geography, and music to history, celebrities, animals, and anime, or "All" to draw from every category) before answering five randomly generated multiple choice or true or false questions. It is built with React, JavaScript, HTML, CSS, and Bootstrap, and bundled with Vite. Questions are retrieved from the Open Trivia Database API based on the selected difficulty and category, with HTML Entities decoding any special characters in the text and Nano ID generating a unique key for each question and answer. Once every question has been answered, checking the results tallies the final score and triggers a React Confetti animation to celebrate finishing the quiz.

<br>

## Features

### Start Page
The start page introduces the quiz and lets the player choose a difficulty level and category before clicking "Start quiz" to begin. If a quiz fails to load, an error message appears here as well, letting the player know to try again.

<p align="center"><img src="./images/start-page.png?raw=true" alt="Start Page" width="700"></p>

<br>

### Selecting a Difficulty
Players can choose a difficulty level, which determines how challenging the generated questions will be:
- Easy
- Medium
- Hard

<p align="center"><img src="./images/difficulties.png?raw=true" alt="Difficulty Levels" width="700"></p>

<br>

### Selecting a Category
Players can choose a category of questions:
- All
- General Knowledge
- Music
- Science & Nature
- Geography
- History
- Celebrities
- Animals
- Anime & Manga

<p align="center"><img src="./images/categories.png?raw=true" alt="Categories" width="700"></p>

<br>

### Answering Questions
Once the quiz starts, five questions are generated based on the selected difficulty and category, presented as either multiple choice or true or false. Players select an answer for each question by clicking one of the available options before moving on to check their results.

<p align="center"><img src="./images/questions.png?raw=true" alt="Quiz Questions" width="700"></p>

<br>

### Checking Answers
Clicking "Check answers" reveals the result of every question and calculates a final score out of five. A correctly selected answer is marked in green, an incorrectly selected answer is marked in red, and if a player answered incorrectly, the actual correct answer is highlighted in a lighter green so they can see what they missed.

<p align="center"><img src="./images/check-answers.png?raw=true" alt="Check Answers" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS, Bootstrap |
| Libraries | React Confetti (displays the win animation),<br>HTML Entities (decodes special characters returned by the API),<br>Nano ID (generates unique question and answer ids) |
| APIs | Open Trivia Database API (supplies the trivia questions and answers) |
| Build Tool | Vite |

<br>

## How It Works

The interface is built from three components: a cover component for the start page and category and difficulty selection, a question component that renders each individual quiz question, and a footer component that displays the check answers button, the score, and the play again button. Starting the quiz triggers an effect that fetches five questions from the Open Trivia Database API, built from the selected difficulty and category, with error handling in place to catch a failed network request or an unexpected response shape, both of which display a message asking the player to retry. Each returned question is given a unique id from Nano ID and stored in state, and since the API returns HTML encoded text, HTML Entities decodes the question and answer text before it is displayed. For each question, the correct answer is combined with the incorrect answers into a single array and shuffled so the options appear in a random order every time. Selecting an answer updates that specific question's entry in state without affecting the others. Clicking "Check answers" compares every selected answer against the correct one to calculate a final score out of five, and re-renders each question's answer options with one of four states: the selected answer marked correct, the selected answer marked incorrect, the correct answer highlighted if it was not selected, or faded out if it was neither selected nor correct. This also triggers a React Confetti animation to celebrate finishing the quiz. Choosing "Play Again" resets the score and question state, returning the player to the start page to select a new difficulty and category.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/quizzical.git
cd quizzical
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- Adjustable number of questions instead of a fixed set of five
- A countdown timer for an added challenge
- Saving past quiz results to track performance over time
