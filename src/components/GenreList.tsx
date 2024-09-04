import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genre, error, isLoading } = useGenres();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {genre.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
