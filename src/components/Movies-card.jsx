import { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

export function MovieCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    function loadMovies(query) {
        axios.get(`https://www.omdbapi.com/?s=${query}&apikey=3e67038b`)
            .then(response => {
                if (response.data.Response === "True") {
                    setMovies(response.data.Search);
                } else {
                    alert("Movies not found!");
                }
            }).catch(console.error);
    }

    useEffect(() => {
        loadMovies('the godfather');
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            loadMovies(searchQuery);
        } else {
            alert('Please enter a movie title');
        }
    };

    const handleMoreClick = (movie) => {
        setSelectedMovie(movie);
        const modal = new window.bootstrap.Modal(document.getElementById('movieModal'));
        modal.show();
    };

    return (
        <div className="container mt-5">
            <div className="search-bar mb-4 d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control w-50 p-2 border-2 border-info rounded"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-info rounded shadow-sm ms-1" onClick={handleSearch}>Search</button>
            </div>

            <div className="row">
                {movies.map(movie => (
                    <div key={movie.imdbID} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 shadow-lg rounded-lg overflow-hidden">
                            <img src={movie.Poster} className="card-img-top" alt={`${movie.Title} Poster`} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column justify-between p-2">
                                <h5 className="card-title text-center">{movie.Title}</h5>
                                <p className="card-text text-center text-muted">Year: {movie.Year}</p>
                                <p className="card-text text-center text-muted">Type: {movie.Type}</p>
                            </div>
                            <button
                                type='button'
                                className='btn btn-secondary w-100'
                                onClick={() => handleMoreClick(movie)}
                            >
                                More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="modal fade" id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="movieModalLabel">{selectedMovie?.Title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedMovie && (
                                <>
                                    <img src={selectedMovie.Poster} className="img-fluid mb-3" alt={`${selectedMovie.Title} Poster`} />
                                    <p><strong>Type:</strong> {selectedMovie.Type}</p>
                                    <p><strong>Year:</strong> {selectedMovie.Year}</p>
                                    <p><strong>IMDB ID:</strong> {selectedMovie.imdbID}</p>
                                    <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
                                    <p><strong>Language:</strong> {selectedMovie.Language}</p>
                                    <p><strong>IMDb Rating:</strong> {selectedMovie.imdbRating}</p>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
