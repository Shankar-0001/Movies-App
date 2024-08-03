

export function MovieInfo() {
    return (
        <div className="card">
            <div className='card-body'>
                <p>{movie.Title}</p>
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
                <p>{movie.imdbID}</p>
                <p>{movie.Title}</p>
            </div>
        </div>
    )
}