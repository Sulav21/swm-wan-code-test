# West Australian NewsPaper Article

This project is a news paper article project which demontrates the following:
Creating a Component in React
Communicating between parent and child component
Using vanilla CSS along with React
Using Media Query for responsive designs


# Application design
# Components
Headline : This components takes the first news from the array and trimImagePath(function) as a props and displays the headline of the article. 

NewsArticle : This is a reusable component, that takes news,trimImagePath(function),noImage and noDescription as props and displays the news in a card like structure. If the noImage and noDescription props has been passed to the component, it doesnot displays the image and description from the news article array.

NewsTitles: This component takes the remaining news and displays just their title.

# Prerequisites
Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

npm install -g create-react-app

# Live Application URL
The Application is deployed in https://main--lambent-beignet-8489f6.netlify.app/

Click on the link to see the application

# Cloning and Running the Application in local
# Clone the project into local
Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install
In order to run the application Type the following command

npm start
The Application Runs on localhost:3000

# Resources
create-react-app : The following link has all the commands that can be used with create-react-app https://github.com/facebook/create-react-app

ReactJS : Refer to https://reactjs.org/ to understand the concepts of ReactJS
