import React from "react";
import { useGlobalContext } from "../context";

const Movie = () => {
  const data = useGlobalContext();
  console.log(data);
  return <h2>Movie component</h2>;
};

export default Movie;
