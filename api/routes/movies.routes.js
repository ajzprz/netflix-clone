import express from "express";
import { addMovies, getMovies , singleMovie} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", singleMovie);
router.post("/addMovies", addMovies);


export default router;
