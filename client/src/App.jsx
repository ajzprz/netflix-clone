import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import Tvshows from "./pages/Tvshows";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import SingleMovie from "./pages/SingleMovie";
import Originals from "./pages/Originals";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/originals" element={<Originals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
