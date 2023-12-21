import { useEffect, useState } from "react";
import axios from "axios";
import ProductsHeader from "../../components/ProductsHeader/ProductsHeader"
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/store.json"

function Products({ trip }) {
  const WEATHER_API_KEY = "ca56233859af128469af10b8ebed7ea0";
  const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
  const fullURL =
    "api.openweathermap.org/data/2.5/forecast?lat=24.2&lon=27.4&appid=ca56233859af128469af10b8ebed7ea0";

  const [weatherData, setWeatherData] = useState(null);
  // `${WEATHER_BASE_URL}?lat=${trip.destination.lat}&lon=${trip.destination.lon}&appid=${WEATHER_API_KEY}`

  const handlePageLoad = async () => {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}?lat=${trip.destination.lat}&lon=${trip.destination.lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      console.log(response.data.list);
      setWeatherData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePageLoad();
  }, []);
  
const [findUpperBody, setFindUpperBody]=useState([])
const [findLowerBody, setFindLowerBody]=useState([])
const [findAccessorires, setFindAccessories] = useState([])
  

  const handleUpperBodyClick = ()=> {
    // console.log('Clicked upper')
      const lookingUpper = products.filter((product)=> product.subcategory =="shirts & tops" || product.subcategory=="fleece" || product.subcategory=="shells")
        console.log(lookingUpper)
        setFindUpperBody(lookingUpper)
    };
    
    const handleLowerBodyClick = ()=> {
      // console.log('Clicked Lower')
        const lookingLower = products.filter((product)=> product.subcategory =="pants" || product.subcategory=="shorts" || product.category =="footware")
          console.log("pants", lookingLower)
          setFindLowerBody(lookingLower)
      };
 
      const handleAccessoriesClick =()=> {
        // console.log("accessories clickd",)
        const lookingAcc = products.filter((product)=> product.category=="accessories")
        console.log(lookingAcc)
        setFindAccessories(lookingAcc)
      }
  
  return (
    <>
    <ProductsHeader handleUpperBodyClick={handleUpperBodyClick} handleLowerBodyClick={handleLowerBodyClick} handleAccessoriesClick={handleAccessoriesClick}/>
      {weatherData && (
        <div>
          <h1>I am the products page</h1>
          <p>Your trip is {trip.destination.label}</p>
          <p>{weatherData[0].dt_txt}</p>
          <p>Current Temp is {weatherData[0].main.temp}</p>
        </div>
      )}
      <ProductCard findUpperBody={findUpperBody} findLowerBody={findLowerBody} findAccessorires={findAccessorires} productsArray= {products}/>

      
    </>
  );
}

export default Products;
