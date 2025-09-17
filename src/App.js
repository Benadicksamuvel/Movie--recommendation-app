import React, { useState } from "react";
import "./App.css";

const movies = [
  { 
    title: "Inception", 
    genre: "Sci-Fi", 
    rating: 8.8, 
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" 
  },
  { 
    title: "Interstellar", 
    genre: "Sci-Fi", 
    rating: 8.6, 
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" 
  },
  { 
    title: "The Dark Knight", 
    genre: "Action", 
    rating: 9.0, 
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" 
  },
  { 
    title: "Parasite", 
    genre: "Thriller", 
    rating: 8.6, 
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" 
  },
  { 
    title: "Avengers: Endgame", 
    genre: "Action", 
    rating: 8.4, 
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" 
  },
  { 
    title: "La La Land", 
    genre: "Romance", 
    rating: 8.0, 
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" 
  },
  { 
    title: "Coco", 
    genre: "Animation", 
    rating: 8.4, 
    image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg" 
  },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="app">
      <h1>🎬 Movie Recommendation App</h1>
      <div className="filter">
        <label>Filter by Genre: </label>
        <select onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Animation">Animation</option>
        </select>
      </div>

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} className="poster" />
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
