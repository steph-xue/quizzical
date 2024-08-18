# Quizzical

The quizzical project is a dynamic web application built using the front-end JavaScript library, React, which generates random quiz questions for the player to answer. The player can choose their desired level of difficulty of quiz questions (easy, medium, hard) and a category of questions (wide selection from geography to pop culture). They can then click 'start game' and the web application will generate a random set of 5 questions for the player to answer. These questions will either be in multiple choice or true/false format. After the player is done answering the questions, they can click on the 'check answers' button and the quiz will calculate their total score and display which questions the player had answered correctly and incorrectly. The Open Trivia Database API was used to retrieve an array of random quiz questions from their database depending on the type of difficulty and category of questions selected.
&nbsp;

Can access on: https://quizzical-sx.netlify.app/
<br><br>

## Here are the features of the game:
<br><br>

**Start Page**
&nbsp;
![Start Page](./images/start-page.png?raw=true "Start Page")
On the start page, the player can choose their desired level of difficulty of quiz questions and a category of questions and click start to begin the quiz.
<br><br>

**Difficulty of Questions**
  - The player can choose the difficulty of questions generated:
    - Easy
    - Medium
    - Hard
&nbsp;
![Difficulties](./images/difficulties.png?raw=true "Difficulties")
The player can choose their desired level of questions from the following: easy, medium, hard.
<br><br>

**Category of Questions**
  - The player can their desired category of questions:
    - All
    - General Knowledge
    - Music
    - Science & Nature
    - Geography
    - History
    - Celebrities
    - Animals
    - Anime & Manga
&nbsp;  
![Categories](./images/categories.png?raw=true "Categories")
The player can choose their desired category of questions ranging from geography to pop culture.
<br><br>

**Quiz Game**
![Questions](./images/questions.png?raw=true "Questions")
The quiz will generate a random array of questions based on the difficulty and category of questions choosen.
<br><br>

**Checking the Answers**
![Check Answers](./images/check-answers.png?raw=true "Check Answers")
After the player is done answering the questions, they can click on the 'check answers' button and the quiz will calculate their total score and display which questions the player had answered correctly and incorrectly.
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

