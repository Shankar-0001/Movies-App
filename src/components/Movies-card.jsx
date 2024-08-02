import { useEffect, useState } from 'react';
import './Movies-card.css';
import axios from 'axios';

export function MovieCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movie, setMovie] = useState({ Title: '', Year: '', Genre: '', Runtime: '', Language: '', imdbRating: '', Poster: '', Plot: '' });

    function loadMovie(query) {
        // axios.get(`https://www.omdbapi.com/?t=${query}&apikey=3e67038b`)
        axios.get(`https: //imdb-movies-web-series-etc-search.p.rapidapi.com/thegodfather.json`)
            .then((response) => {
                console.log(response.data);
                if (response.data.Response === "True") {
                    setMovie(response.data);
                } else {
                    alert("Movie not found!");
                }
            }).catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        // Optionally load a default movie on mount
        loadMovie('Guardians of the Galaxy Vol. 2');
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            loadMovie(searchQuery);
        } else {
            alert('Please enter a movie title');
        }
    };

    return (
        <div>
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* Movies Cards */}
            <div className="container-fluid">
                <div className="container">
                    <div className="cards">
                        <div className="cards-header">
                            <img src={movie.Poster} alt="Movie Poster" />
                        </div>
                        <div className="cards-body">
                            <div className='cards-title'>
                                <p>Movie: {movie.Title}</p>
                                <p>Year: {movie.Year}</p>
                                <p>Duration: {movie.Runtime}</p>
                                <p>Genre: {movie.Genre}</p>
                                <p>Language: {movie.Language}</p>
                                <p>IMDb Rating: {movie.imdbRating}</p>
                            </div>
                            <div className='cards-description'>
                                <p>Description: {movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
