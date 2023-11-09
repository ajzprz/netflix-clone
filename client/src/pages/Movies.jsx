import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Originals() {
  const [movies, setMovies] = useState([]);
  const { allMovies, loading, error } = useSelector((state) => state.movie);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const filterdMovies = allMovies.filter((movie) => movie.type === "Movie");
    setMovies(filterdMovies);
  }, [allMovies]);

  // console.log(tvShows);
  return (
    <div>
      <div className="flex flex-col gap-1 my-2">
        <h1 className="text-2xl font-semibold">
          Top Picks For {currentUser.username.toUpperCase()}
        </h1>
        <div className="">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            watchSlidesProgress={true}
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {movies &&
              movies.map((movie, index) => (
                <SwiperSlide
                  className="h-[180px]"
                  key={index}
                  style={{ margin: "0px" }}
                >
                  {error ? <p>Fetch error</p> : <MovieCard movie={movie} />}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
