import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    console.log(movie)
  const { loading } = useSelector((state) => state.movie);
  const cardStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${movie.thumbnailUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  return (
    <Link to={`/movie/${movie._id}`}>
      {loading ? (
        <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-sm hover:opacity-70" style={cardStyle}></div>
      )}
    </Link>
  );
}
