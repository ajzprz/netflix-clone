import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
    const params = useParams();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(`/api/movies/${params.id}`);
      const data = await res.json();
      setMovieData(data);
    };
    getMovies();
  }, [params.id]);

  return <div>SingleMovie</div>;
}
