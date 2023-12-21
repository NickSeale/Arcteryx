import "./App.scss";
import Home from "./pages/Home/Home";
import Plan from "./components/Plan/Plan";
import Trip from "./pages/Trip/Trip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
