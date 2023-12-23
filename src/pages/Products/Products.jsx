import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "../../components/Weather/Weather";
import ProductsHeader from "../../components/ProductsHeader/ProductsHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/store.json";

function Products({ trip }) {
  const WEATHER_API_KEY = "ca56233859af128469af10b8ebed7ea0";
  const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

  const [weatherData, setWeatherData] = useState(null);

  const handlePageLoad = async () => {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}?lat=${trip.destination.lat}&lon=${trip.destination.lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      setWeatherData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    handlePageLoad();
    setFilteredProducts(products);
  }, []);

  const handleUpperBodyClick = (e) => {
    e.preventDefault();
    const lookingUpper = products.filter(
      (product) =>
        product.subcategory == "shirts & tops" ||
        product.subcategory == "fleece" ||
        product.subcategory == "shells"
    );
    setFilteredProducts(lookingUpper);
  };

  const handleLowerBodyClick = (e) => {
    e.preventDefault();
    const lookingLower = products.filter(
      (product) =>
        product.subcategory == "pants" ||
        product.subcategory == "shorts" ||
        product.category == "footware"
    );
    setFilteredProducts(lookingLower);
  };

  const handleAccessoriesClick = (e) => {
    e.preventDefault();
    const lookingAcc = products.filter(
      (product) => product.category == "accessories"
    );
    setFilteredProducts(lookingAcc);
  };

  return (
    <>
      {weatherData && (
        <>
          <Weather
            weatherData={weatherData}
            location={trip.destination.label}
          />
        </>
      )}
      <ProductsHeader
        handleUpperBodyClick={(e) => handleUpperBodyClick(e)}
        handleLowerBodyClick={(e) => handleLowerBodyClick(e)}
        handleAccessoriesClick={(e) => handleAccessoriesClick(e)}
      />

      <ProductCard filteredProducts={filteredProducts} />
    </>
  );
}

export default Products;
