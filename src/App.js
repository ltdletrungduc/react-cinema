import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Film from "./Components/Film/Film";
import Header from "./Components/Header";
import Promotion from "./Components/Promotion/Promotion";
import { getMovie } from "./redux/slices/movie.slice";

function App() {
  const movieDispatch = useDispatch();
  useEffect(() => {
    movieDispatch(getMovie())
      .then(unwrapResult)
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <Header />
      <Carousel />
      <Film />
      <Promotion />
    </div>
  );
}

export default App;
