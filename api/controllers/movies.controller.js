import Movie from "../models/movies.model.js";

export const getMovies = async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
};

export const addMovies = async (req, res, next) => {
  const {
    title,
    videoUrl,
    synopsis,
    releasedYear,
    ratedR,
    thumbnailUrl,
    type,
  } = req.body;
  try {
    const newMovie = await Movie({
      title,
      videoUrl,
      thumbnailUrl,
      synopsis,
      releasedYear,
      ratedR,
      type,
    });
    await newMovie.save();
    res.status(200).json(newMovie);
  } catch (error) {
    next(error);
  }
};

export const singleMovie = async (req, res, next) => {
  const { title, videoUrl, synopsis, releasedYear, ratedR, thumbnailUrl, type } =
    req.body;
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
    console.log(movie);
  } catch (error) {
    next(error);
  }
};
