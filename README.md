# Quizzical

The quizzical project is a dynamic web application built using the front-end JavaScript library, React. The player can choose their desired level of quiz questions (easy, medium, hard) and a category of questions that includes a wide selection from geography to pop culture. They can then click 'start game' and the web application will then generate a random set of 5 questions for the player to answer. These questions will be in either multiple choice or true and false format. After the player is done answering the questions, they can click on the 'check answers' button
&nbsp;

Can access on: https://quizzical-sx.netlify.app/
<br><br>

## Here are the features of the game:
**Game Mechanics**
  - The objective of the game is to roll the dice as fast as possible until all dice are the same to achieve a tenzies win and the player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner
  - You can play against other people or play against yourself and try to beat your own best time
  - When a new game is started, a random set of 10 dice will be generated
  - Each die can be clicked on to hold the die it at its current value between rolls (highlighted in a darker color)
  - The player can then click on the roll button to re-roll the unheld dice
&nbsp;

**Timer**
  - When a new game is started, the timer will start and record the time until a tenzies win is achieved
  - The timer is displayed dynamically on the game and is updated every 10 milliseconds
&nbsp;


## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## Databases/APIs 
  - Open trivia database
    - The open trivia database provides a completely free JSON API for use in programming projects
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
- Make sure React is version 17 as some of the dependencies are not supported on React version 18+. To do this you can run the following commands:
  - 'npm uninstall react react-dom'
  - 'npm install react@17.0.2 react-dom@17.0.2'
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

