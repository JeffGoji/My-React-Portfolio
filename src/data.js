//image imports:
import budgetApp from './assets/budgettracker.png'
import TechBlog from './assets/techblog1.png'
import Enterprise from './assets/enterprisingsolutions.png'
import SocialNet from './assets/webapi.jpg'
import NoteTaker from './assets/notetaker1.png'
import TeamProfile from './assets/teamprofile.png'
import StarGazers from './assets/classProject1.png'
import empTracker from './assets/emptracker.png'
import readMe from './assets/readmeGen.png'
import weatherApi from './assets/weatherapi.png'
import eCommerce from './assets/eCommerce.png'
import quizGame from './assets/quizGame.png'
import shareyourstory from './assets/share-your-story.png'

//Data to place inside the cards:
export default [

    {
        id: 1,
        image: shareyourstory,
        name: "Share Your Story",
        description: " Texas based orginization and our mission is to educate and help victims of medical malpractice find the resources and information that they deserve. Users can browse the Resources page, sign-up for an account, login and logout, post Stories and comment on stories.",
        github: "https://github.com/jeffgoji/share-your-story",
        deployed: "https://share-your-story-texas.herokuapp.com/resources",
    },
    {
        id: 2,
        image: budgetApp,
        name: "Budget Tracker PWA",
        description: "A proper PWA that works online and offline, and updates online automatically when internet connection is restored. Users can enter in a transaction amount that can be either a deposit or a withdraw and name the transaction. The app will display the current total.",
        github: "https://github.com/JeffGoji/budget-tracker",
        deployed: "https://budget-tracker-jal.herokuapp.com/",
    },
    {
        id: 3,
        image: TechBlog,
        name: "Tech-Blog 9000",
        description: "This is a full-stack web application that utilizes a SQL database. This project is a Tech Blog site where users can browse post without logging in.If the user signs up and logs in they will be able to create their own blog post and add comments to other user's post.",
        github: "https://github.com/JeffGoji/techblog",
        deployed: "https://tech-notes-9000.herokuapp.com/",
    },
    {
        id: 4,
        image: Enterprise,
        name: "Enterprising Arrangements",
        description: "This is a full-stack web application that utilizes a SQL database. This project is used to search and post venues in your local area.Conglomerate all venue types from multiple venue owners on the site for viewers to have easy access to the information they need.Or Sign Up and Login to post, edit, or delete venues from the site.I worked with Noah Tidwell and Ivonne",
        github: "https://github.com/NoahTidwell/Enterprising-Arrangements",
        deployed: "https://enterprising-arrangements1.herokuapp.com/",
    },
    {
        id: 5,
        image: SocialNet,
        name: "Social Network Web API",
        description: "This is an API project for a social network web application that utilizes MongoDB, Express.js, and Mongoose. Users can post their thoughts, react to friend's thoughts, and can add or remove friends from their personal list. This is strictly a back-end project, so you will need to use Insomnia Core or Postman to access the routes.",
        github: "https://github.com/JeffGoji/social-network-api",
        deployed: "#none",
    },
    {
        id: 6,
        image: NoteTaker,
        name: "Note Taker App",
        description: "This is a Note Taker application that uses Express.js on the back end and stores the notes into a JSON file with a unique ID for each note. You can create, save, and delete each note. You can click on a previously saved note to bring it up to view it.",
        github: "https://github.com/JeffGoji/Note-Taker",
        deployed: "https://jeffs-note-keeper.herokuapp.com/",
    },
    {
        id: 7,
        image: TeamProfile,
        name: "Team Profile Generator App",
        description: "This is a Team Profile Generator app for creating a webpage that has a list of team members and their roles and information. This app is built with nodeJS and JavaScript. It utilizes the inquirer npm package and the Jest JavaScript testing npm. The layout in the HTML is handled using Bootstrap 5.",
        github: "https://github.com/JeffGoji/Note-Taker",
        deployed: "https://www.youtube.com/watch?v=0BthibBNIxY",
    },
    {
        id: 8,
        image: StarGazers,
        name: "Texas Stargazer Website",
        description: "Front-end team project built in collaboration with Julie Summers and Reagan Price in an Agile development environment. This website utilizes HTML5, CSS3, JavaScript, and was styled with the Bulma framework. It uses two API calls for the data on the page and it is 100% mobile responsive.",
        github: "https://rprice000.github.io/texas-stargazing/index.html",
        deployed: "https://rprice000.github.io/texas-stargazing/index.html",
    },
    {
        id: 9,
        image: empTracker,
        name: "SQL Node Employee Tracker",
        description: "This is my Employee Tracker SQL command line application. The purpose of the application is to manage Departments, Roles in the company, and the Employees.",
        github: "https://github.com/JeffGoji/sql-employee-tracker",
        deployed: "https://youtu.be/fOS-62uyrvs",
    },
    {
        id: 10,
        image: readMe,
        name: "Professional README.md Generator App",
        description: "This is a professional nodeJS README generator that uses the command line and a series of prompts to build a README.MD file for your GitHub page. The README.md file the program generates will be placed in the output folder.",
        github: "https://github.com/JeffGoji/readme-generator",
        deployed: "https://www.youtube.com/watch?v=oCDSMqKEUY4",
    },
    {
        id: 11,
        image: weatherApi,
        name: "API-Weather-App",
        description: "This is a Weather App that uses the Open Weather API call for it's weather content. It will save whatever cities you have searched for into local storage and loads them as buttons on the left side. You can click on the generated buttons to reload the weather from those searches.",
        github: "https://github.com/JeffGoji/API-Weather-App",
        deployed: "https://jeffgoji.github.io/API-Weather-App/",
    },
    {
        id: 12,
        image: eCommerce,
        name: "SQL E-commerce back-end App",
        description: "This is a functioning back end for an E-commerce site. This application connects to a mySQL database using Express and Sequealize while utilizing RESTful API and CRUD methods.",
        github: "https://github.com/JeffGoji/E-commerce-Project",
        deployed: "https://www.youtube.com/watch?v=DMVwrCqtCyY",
    },
    {
        id: 13,
        image: quizGame,
        name: "Web API Quiz Game",
        description: "This is a JavaScript API quiz game. The objective is to complete a 5 question quiz about JavaScript within a set amount of time (60 seconds in this case). If you answer a question incorrectly 10 seconds will be deducted from the time and end the challenge sooner.",
        github: "https://github.com/JeffGoji/JavaScript-Web-API-Quiz",
        deployed: "https://jeffgoji.github.io/JavaScript-Web-API-Quiz/",
    },


]