//image imports:
import budgetApp from './assets/budgettracker.png'
import TechBlog from './assets/techblog1.png'
import Enterprise from './assets/enterprisingsolutions.png'
import SocialNet from './assets/webapi.jpg'
import NoteTaker from './assets/notetaker1.png'
import TeamProfile from './assets/teamprofile.png'
import StarGazers from './assets/classProject1.png'

//Data to place inside the cards:
export default [

    {
        id: 1,
        image: budgetApp,
        name: "Budget Tracker PWA",
        description: "A proper PWA that works online and offline, and updates online automatically when internet connection is restored. Users can enter in a transaction amount that can be either a deposit or a withdraw and name the transaction. The app will display the current total.",
        github: "https://github.com/JeffGoji/budget-tracker",
        deployed: "https://budget-tracker-jal.herokuapp.com/",
    },
    {
        id: 2,
        image: TechBlog,
        name: "Tech-Blog 9000",
        description: "This is a full-stack web application that utilizes a SQL database. This project is a Tech Blog site where users can browse post without logging in.If the user signs up and logs in they will be able to create their own blog post and add comments to other user's post.",
        github: "https://github.com/JeffGoji/techblog",
        deployed: "https://tech-notes-9000.herokuapp.com/",
    },
    {
        id: 3,
        image: Enterprise,
        name: "Enterprising Arrangements",
        description: "This is a full-stack web application that utilizes a SQL database. This project is used to search and post venues in your local area.Conglomerate all venue types from multiple venue owners on the site for viewers to have easy access to the information they need.Or Sign Up and Login to post, edit, or delete venues from the site.I worked with Noah Tidwell and Ivonne",
        github: "https://github.com/NoahTidwell/Enterprising-Arrangements",
        deployed: "https://enterprising-arrangements1.herokuapp.com/",
    },
    {
        id: 4,
        image: SocialNet,
        name: "Social Network Web API",
        description: "This is an API project for a social network web application that utilizes MongoDB, Express.js, and Mongoose. Users can post their thoughts, react to friend's thoughts, and can add or remove friends from their personal list. This is strictly a back-end project, so you will need to use Insomnia Core or Postman to access the routes.",
        github: "https://github.com/JeffGoji/social-network-api",
        deployed: "#none",
    },
    {
        id: 5,
        image: NoteTaker,
        name: "Note Taker App",
        description: "This is a Note Taker application that uses Express.js on the back end and stores the notes into a JSON file with a unique ID for each note. You can create, save, and delete each note. You can click on a previously saved note to bring it up to view it.",
        github: "https://github.com/JeffGoji/Note-Taker",
        deployed: "https://jeffs-note-keeper.herokuapp.com/",
    },
    {
        id: 6,
        image: TeamProfile,
        name: "Team Profile Generator App",
        description: "This is a Team Profile Generator app for creating a webpage that has a list of team members and their roles and information. This app is built with nodeJS and JavaScript. It utilizes the inquirer npm package and the Jest JavaScript testing npm. The layout in the HTML is handled using Bootstrap 5.",
        github: "https://github.com/JeffGoji/Note-Taker",
        deployed: "https://www.youtube.com/watch?v=0BthibBNIxY",
    },
    {
        id: 7,
        image: StarGazers,
        name: "Texas Stargazer Website",
        description: "Front-end team project built in collaboration with Julie Summers and Reagan Price in an Agile development environment. This website utilizes HTML5, CSS3, JavaScript, and was styled with the Bulma framework. It uses two API calls for the data on the page and it is 100% mobile responsive.",
        github: "https://rprice000.github.io/texas-stargazing/index.html",
        deployed: "https://rprice000.github.io/texas-stargazing/index.html",
    },


]