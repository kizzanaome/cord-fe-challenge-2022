# cord Coding Challenge (Front-end)
 
cord-fe-challenge-2022 is a mini movie application that shows most popular movies.
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/843d8551-2064-453d-b340-0b56f14a4ad5/deploy-status)](https://app.netlify.com/sites/idyllic-crostata-e3b5be/deploys)
 
#### Hosted link at
 
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white "/>  [www.cord-fe-challenge-2022.com](https://cord-fe-challenge-2022.netlify.app/discover)
 
### Introduction
 
This is a mini web application that enables a user to view most popular movies with some details of the movie displayed, and search any movie based on movie title and year.

![](cord.gif)
 
 
### Features
 
- A user can view all popular movies.
- A user can search any movie of their choice by movie name or release year.
- A user can view the application on all kinds of devices and browsers.
- A user can view all Genres
- A user can view movies with their Genres
 
### Tasks accomplished
 
- When the /discover route is loaded, all the popular movies on page 1 are displayed
- Create axios API endpoint to fetch the popular movies.
- Design Movie item card to hold single movie details.
   - Design the movie image for the particular movie
   - Design Rating Badge.
   - Design the genre section holding the genres of a particular movie
   - Design the movie description
   - Design the release date
- Create axios API endpoint to fetch all the genres.
- Design side filter section to hold all the genres.
   - Design the accordian filter holding all the fetched genres or filter categories
   - Design the release date
- Create axios API endpoint to search movies by keyword and or year.
- Design side search section to cater for searching.
   - Design and load results instantly as the user types or as keywords are typed into the search bar
- Add a count of all movies at the top
- Add all the responsive stylesheets for the app to run smoothly on mobile devices
 
### Added features | Tasks accomplished
 
- Add a no internet connection image to tell user when there is no internet to improve user experience
- Add an error message during search so that a user doesn't forget to add a keyword.
- Add a loader for incase of slow internet for a user not to lose hope.
- Add a read more link on the description to cater for overflowing text
- Add responsiveness of a mini laptop and a tablet to improve user experience
- Design and add the favicon to cater for future SEO purposes.
- Error handling in the axios functionality to cater for any errors
- Dropdown the search filter component when on mobile or mini tablet to improve userability
- Add scroll effect on the genre filter and the genres of each movie
- Add lazy loading on fetched data to help
- add a few tests to test the UI components of the app and the axios API requests
- Host the app on netlify for easy accessibility
- Added gif to read me.
 
### Technologies used
 
| Badge                | URL                  |
| -------------------- | -------------------- |
| <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/> | Node Package manager |
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> | [HTML5](https://html.com/) - Markup language |
| <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> | [CSS3](https://css-tricks.com/) - Style sheet language |
| <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> | [JavaScript](https://www.javascript.com/) - High-level, interpreted programming language |
| <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> | [Styled Components](https://styled-components.com/) - Popular library that is used to style React applications. |
| <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> | [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces |
| <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/> | Jest, a javascript testing library |
 
 
### Author
- <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>  [kizzanaome](https://github.com/kizzanaome)
