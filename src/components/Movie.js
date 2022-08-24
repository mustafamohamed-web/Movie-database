import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Movie = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster} alt="" />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movie;
