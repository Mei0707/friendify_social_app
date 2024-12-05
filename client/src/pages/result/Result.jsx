import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./result.css"

const Result = () => {
    const navigate = useNavigate();
    const { criteria } = useParams(); // Retrieve criteria from the route params
    const [movies, setMovies] = useState([]); // State for movies
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    // Function to fetch movies based on the search criteria
    const searchMovies = async (criteria) => {
        const apiKey = "5dc798ad";
        const baseUrl = "https://www.omdbapi.com/";
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${encodeURIComponent(criteria)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search); // Set the movies array
            } else {
                setError(data.Error); // Handle API errors like "Movie not found!"
            }
        } catch (error) {
            setError("An error occurred while fetching data.");
        } finally {
            setLoading(false);
        }
    };

    const handleDetail = (imdbID) => {
        navigate(`/detail/${imdbID}`);
    }

    // Use `useEffect` to call `searchMovies` when the component mounts or criteria changes
    useEffect(() => {
        if (criteria) {
            searchMovies(criteria);
        }
    }, [criteria]);

    return (
        <div className="result movie-container">
            <h1>Movie Search Results</h1>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="movies">
                {movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                            alt={movie.Title}
                            onClick={() => handleDetail(movie.imdbID)}
                        />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;
