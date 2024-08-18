# Quizzical

The quizzical project is a dynamic web application built using the front-end JavaScript library, React, which generates random quiz questions for the player to answer. The player can choose their desired level of difficulty of quiz questions (easy, medium, hard) and a category of questions (wide selection from geography to pop culture). They can then click 'start game' and the web application will generate a random set of 5 questions for the player to answer. These questions will either be in multiple choice or true/false format. After the player is done answering the questions, they can click on the 'check answers' button and the quiz will calculate their total score and display which questions the player had answered correctly and incorrectly. The Open Trivia Database API was used to retrieve an array of random quiz questions from their database depending on the type of difficulty and category of questions selected.
&nbsp;

Can access on: https://quizzical-sx.netlify.app/
<br><br>

## Here are the features of the game:

**Start Page**
  - The player can choose their desired level of difficulty of quiz questions and a category of questions and click start to begin the quiz
<br><br>
![Start Page](./images/start-page.png?raw=true "Start Page")
The start page includes the selection of difficulties and categories of questions.
<br><br>
&nbsp;

**Difficulty of Questions**
  - The player can choose the difficulty of questions generated:
    - Easy
    - Medium
    - Hard
<br><br>
![Difficulties](./images/difficulties.png?raw=true "Difficulties")
The player can choose their desired level of questions from the following: easy, medium, hard.
<br><br>
&nbsp;

**Category of Questions**
  - The player can choose their desired category of questions:
    - All
    - General Knowledge
    - Music
    - Science & Nature
    - Geography
    - History
    - Celebrities
    - Animals
    - Anime & Manga
<br><br>
![Categories](./images/categories.png?raw=true "Categories")
The player can choose their desired category of questions ranging from geography to pop culture.
<br><br>
&nbsp;

**Quiz Game**
 - The quiz will then generate a random array of 5 multiple choice or true/false questions based on the difficulty and category of questions choosen
 - The data of quiz questions is retrieved from the Open Trivia Database API 
<br><br>
![Questions](./images/questions.png?raw=true "Questions")
A random list of 5 questions will be generated based on the difficulty and category of questions choosen.
<br><br>
&nbsp;

**Checking the Answers**
 - After the player is done answering the questions, they can click on the 'check answers' button to check which questions they got correct and incorrect
 - The quiz will then display all questions the player had answered correctly and incorrectly
   - The result for each question will be displayed as 'correct' or 'incorrect' 
   - Answers that the player got wrong will have the button marked in red
   - Answers that the player got right will have the button marked in green
   - If the player got the answer wrong, the actual correct answer button will be marked in a lighter green
 -  The quiz will calculate their total score out of the total of quiz questions (out of 5)
<br><br>
![Check](./images/check.png?raw=true "Check")
The player can check their answers and score after completing the quiz.
<br><br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## Databases/APIs 
  - Open Trivia Aatabase
    - The Open Trivia Database provides a completely free JSON API for use in programming projects
    - Generates an API url by specifying the number of questions, category of questions, difficulty of questions, type of questions, and type of encoding
    - More information can be found at: https://opentdb.com/api_config.php
      
## Dependencies 
  - React-confetti
    - Displays rainbow confetti that falls from the top of the page
  - Html-entities
    - Can encode and decode text replacing html entities to characters
  - Nano ID
    - A tiny, secure, URL-friendly, unique string ID generator for JavaScript
      
## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- Install the dependencies by running the following commands:
  - React-confetti
    - 'npm install react-confetti'
  - Html-entities
    - 'npm install html-entities'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the web application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the web application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy

