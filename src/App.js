import "./App.css";
import { Home, About, MovieList, MovieInfo } from "./pages";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/:movie" element={<MovieList />}></Route>
          <Route path="/:movie/:id" element={<MovieInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
