import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import "./detail.css";

const Detail = () => {
    const { imdbID } = useParams(); // Retrieve imdbID from the route params
    const [movie, setMovie] = useState(null); // State for movie details
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    // Function to fetch movie details by imdbID
    const fetchMovieDetails = async (imdbID) => {
        const apiKey = "5dc798ad";
        const baseUrl = "https://www.omdbapi.com/";
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${baseUrl}?apikey=${apiKey}&i=${imdbID}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.Response === "True") {
                setMovie(data); // Set the movie details
            } else {
                setError(data.Error); // Handle API errors
            }
        } catch (error) {
            setError("An error occurred while fetching movie details.");
        } finally {
            setLoading(false);
        }
    };

    // Use `useEffect` to call `fetchMovieDetails` when the component mounts or imdbID changes
    useEffect(() => {
        if (imdbID) {
            fetchMovieDetails(imdbID);
        }
    }, [imdbID]);

    return (
        <div className="detail">
            <div className="detail-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {movie && (
                    <div className="movie-detail">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                            alt={movie.Title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <h1>{movie.Title}</h1>
                            <p><strong>Year:</strong> {movie.Year}</p>
                            <p><strong>Rated:</strong> {movie.Rated}</p>
                            <p><strong>Released:</strong> {movie.Released}</p>
                            <p><strong>Genre:</strong> {movie.Genre}</p>
                            <p><strong>Director:</strong> {movie.Director}</p>
                            <p><strong>Writer:</strong> {movie.Writer}</p>
                            <p><strong>Actors:</strong> {movie.Actors}</p>
                            <p><strong>Plot:</strong> {movie.Plot}</p>
                            <p><strong>Language:</strong> {movie.Language}</p>
                            <p><strong>Awards:</strong> {movie.Awards}</p>
                            <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                            <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="review">
                <Reviews imdbID={imdbID} />
            </div>
        </div>
    )
};

export default Detail;
