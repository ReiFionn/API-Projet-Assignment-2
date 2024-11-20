# Assignment 1 - ReactJS app.

Name: Fionn Reilly

## Overview.
The content of this repository is a ReactJS Web Application that pulls data from The Movie Database (TMDB), caches requests and displays information on movies and actors, displaying responses neatly and responsively through many Material UI components, called "TMDB Client". It was built upon labs done for Web App Development 2, which can be accessed [HERE](https://github.com/ReiFionn/react-movie-labs).

### Features.
+ **Now Playing Movies page** - Page that displays the movies currently playing in theatres (in the US)
+ **Must Watch Movies page** - Page that displays all movies that a user added to "Must Watch"
+ **Top Rated Movies page** - Page that displays the movies with the highest ratings on TMDB
+ **Actors page** - Page that displays all actors in TMDB, sorted by popularity
+ **Actor's Details page** - Page that displays when "More Info" is clicked on an actor card, includes a biography, birthday, place of birth, popularity, department (where they best fit in TMDB), aliases and all known roles on TMDB
+ **Must Watch movies function** - Added the "Must Watch" functionality to every instance of a movie
+ **Pagination** - Allows the user to view all results for movies and actors by diving the results into separate pages and allowing the user to click through the pages
+ **Cast displayed when looking at a movie's details** - Displayed underneath the movie's main details, contains a card for each actor which display the usual information for an actor card but also includes the actor's role in the specified movie
+ **Certifications for a movie are displayed on it's card** - No matter what endpoint a movie is recieved from, the rating will be displayed on the movie's card along with the previous details
+ **Silder for filtering actors based on popularity** - A range slider that takes on two values to filter the actors displayed per page based on if their popularity rating falls within the range specified
+ **Checkbox to filter adult movies** - Filters only movies on the current page that have the adult tag set to true
+ **Checkbox to filter movies that include videos** - Filters only movies on the current page that have the video tag set to true
+ **Firebase authentication functionality for sign up, sign in and sign out** - Created a Firebase project, connected it to React using it's credentials, set up a sign in and sign up page, along with specifying sign up, sign in and sign out functions.
+ **Protected routes that require an account signed in to access** - When trying to access a protected route without logging in, the user is directed to the sign in page instead
+ **New theme and styles** - A lovely new colour scheme :]
  
## Setup requirements.
Ensure Firebase is installed locally. Here is how to do it using npm:

```console
$ npm install --save firebase
```

Next, access [the Firebase concole](https://console.firebase.google.com/). From here: 
+ click create a new project
+ enter a name
+ disable analytics
+ after creation, select web
+ register a new web app (do not set up hosting)
+ add the SDK details into your .env file, following the notation seen in the firebase.js file
+ head to project overview and select Authentication
+ select get started
+ enable email/password

## API endpoints.
+ Upcoming movies (Movies coming to theatres soon) = **/movie/upcoming**
+ Now playing movies (Movies playing in theatres) = **/movie/now_playing**
+ Top rated movies (Movies with the highest popularity ratings) = **/movie/top_rated**
+ Actors (All persons on TMDB) = **/person/popular**
+ Actor details (Details of a specific person) = **/person/:id**
+ Actor's images (Images of a specific person) = **/person/:id/images**
+ Actor's roles (Movie roles of a specific person) = **/person/:id/movie_credits**
+ Movie's cast (People involved in a specific movie) = **/movie/:id/credits**
+ Certifications (All movie certifications on TMDB) = **/certification/movie/list**
  
## Routing.
+ **/signin** - displays the sign in page
+ **/signup** - displays the sign up page
+ **/movies/upcoming** - displays all upcoming movies in the US *(PROTECTED ROUTE)*
+ **/movies/nowplaying** - displays all movies currently playing in theatres in the US *(PROTECTED ROUTE)*
+ **/movies/mustwatch** - displays all movies a user has added to "Must Watch" *(PROTECTED ROUTE)*
+ **/movies/toprated** - displays the movies with the highest popularity ratings on TMDB *(PROTECTED ROUTE)*
+ **/actors** - displays persons on TMDB *(PROTECTED ROUTE)*
+ **/actors/favourites** - displays all actors a user added to favourites *(PROTECTED ROUTE)*
+ **/actors/:id** - displays details of a specific person *(PROTECTED ROUTE)*

*(PROTECTED ROUTE)*: navigates to **/signin** if a user is not logged in

## Independent learning.
- [Firebase Functionality](https://medium.com/@Rushabh_/implementing-user-login-and-signup-with-reactjs-and-firebase-a-comprehensive-guide-7300bd33cb01)
- [Firebase Functionality](https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/)
- [Pagination](https://mui.com/material-ui/react-pagination/)
- [Slider](https://mui.com/material-ui/react-slider/#range-slider)
- [Checkbox](https://mui.com/material-ui/react-checkbox/)
