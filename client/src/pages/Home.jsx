import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDataStart,
  fetchMovieDataSuccess,
  fetchMovieDataFailure,
} from "../redux/movie/movieSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const dispatch = useDispatch();
  const { allMovies, loading, error } = useSelector((state) => state.movie);
  const { currentUser } = useSelector((state) => state.user);

  // Local component state for filtering
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    try {
      dispatch(fetchMovieDataStart());
      const getMovies = async () => {
        const res = await fetch("/api/movies");
        const data = await res.json();
        dispatch(fetchMovieDataSuccess(data));
      };
      getMovies();
    } catch (error) {
      dispatch(fetchMovieDataFailure(error));
    }
  }, []);

  useEffect(() => {
    // Filter movies on the client-side
    const filteredMovies = allMovies.filter((movie) => movie.type === "Movie");
    setMovies(filteredMovies);

    const filteredTvShows = allMovies.filter(
      (movie) => movie.type === "TvShow"
    );
    setTvShows(filteredTvShows);

    const filteredOriginals = allMovies.filter(
      (movie) => movie.type === "Originals"
    );
    setOriginals(filteredOriginals);
  }, [allMovies]);

  return (
    <div className="max-w-[95%] mx-auto p-4">
      {/* Top Picks */}
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
            {allMovies &&
              allMovies.map((movie, index) => (
                <SwiperSlide className="h-[180px]" key={index} style={{ margin: "0px" }}>
                  {error ? <p>Fetch error</p> : <MovieCard movie={movie} />}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* Latest Movies */}
      <div className="flex flex-col gap-1 my-2">
        <h1 className="text-2xl font-semibold">Latest Movies</h1>
        <div className="">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            modules={[Navigation]}
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
            {movies.map((movie, index) => (
              <SwiperSlide className="h-[180px]" key={index} style={{ margin: "0px" }}>
                {error ? (
                  <p>Fetch error</p>
                ) : (
                  <MovieCard   movie={movie} loading={loading} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Latest Tv Shows */}
      <div className="flex flex-col gap-1 my-2">
        <h1 className="text-2xl font-semibold">Latest Tv Shows</h1>
        <div className="">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            modules={[Navigation]}
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
            {tvShows.map((movie, index) => (
              <SwiperSlide  className="h-[180px]" key={index} style={{ margin: "0px" }}>
                {error ? (
                  <p>Fetch error</p>
                ) : (
                  <MovieCard movie={movie} loading={loading} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Latest Originals */}
      <div className="flex flex-col gap-1 my-2">
        <h1 className="text-2xl font-semibold">Latest Originals</h1>
        <div className="">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            modules={[Navigation]}
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
            {originals.map((movie, index) => (
              <SwiperSlide className="h-[180px]" key={index} style={{ margin: "0px" }}>
                {error ? (
                  <p>Fetch error</p>
                ) : (
                  <MovieCard movie={movie} loading={loading} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
