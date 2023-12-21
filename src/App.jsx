import "./App.scss";
import Home from "./pages/Home/Home";
import Plan from "./components/Plan/Plan";
import Trip from "./pages/Trip/Trip";
import Products from "./pages/Products/Products";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [trip, setTrip] = useState(null);

  const handleTripChange = (input) => {
    setTrip(input);
    console.log(trip);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/trip"
          element={
            <Trip handleTripChange={(input) => handleTripChange(input)} />
          }
        />
        <Route path="/products" element={<Products trip={trip} />} />
        {/* <Route path="/plan" element={<Plan/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
