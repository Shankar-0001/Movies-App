# Movie Search Application

## Objective
This project is a React application that allows users to search for movies using an external API and display the results in a user-friendly interface.

## Features
1. **Search Bar**: Users can enter a search term to find movies.
2. **Movie List**: Displays a list of movies based on the search results.
3. **Movie Card**: Displays individual movie details such as title, poster, and release year.
4. **API Integration**: Uses the OMDb API to fetch movie data.
5. **State Management**: Utilizes React’s `useState` and `useEffect` hooks.
6. **Styling**: The UI is styled to be visually appealing and responsive on both desktop and mobile devices.
7. **Detailed Information**: Allows users to click on a movie card to view more detailed information.
8. **Pagination/Infinite Scrolling**: Implements pagination or infinite scrolling for the movie list if the API supports it.

## Requirements
- Node.js and npm installed on your machine.

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/Shankar-0001/Movies-App
cd moviesearchapp

## Install dependencies
- npm install

## Create a `.env` file in the root directory and add your OMDb API key
- 'https://imdb-movies-web-series-etc-search.p.rapidapi.com/thegodfather.json'

## Start the development server
- npm run dev

## Project Structure

moviesearchapp/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── .env
├── package.json
└── README.md


## Usage Instruction

- Search for Movies: Enter a movie title in the search bar and click 'Search'.
- View Movie Details: Click on a movie card to view more detailed information in a modal.

## Technologies Used
- Rect
- Axios
- Bootstrap
- OMDB API
- CSS

## Deployment
- The application is deployed on Vercel and can be accessed at [Movie-App](https://movies-app-two-alpha.vercel.app/).

## Additional Features

- Error Handling: Displays an error message if the API request fails or returns no results.
- Responsive Design: Ensures the application works well on both desktop and mobile devices.

**Project Deployement**: This project is deployed by using Vercel.

