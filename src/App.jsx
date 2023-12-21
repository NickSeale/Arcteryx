import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Plan from "./components/Plan/Plan";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Header />
      <Routes>
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
