import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reqired: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      default:
        "https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png",
    },
    synopsis: {
      type: String,
      required: true,
    },
    releasedYear: {
      type: Date,
      required: true,
    },
    ratedR: {
      type: Boolean,
      default: false,
    },
    type:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", moviesSchema);
export default Movie;
