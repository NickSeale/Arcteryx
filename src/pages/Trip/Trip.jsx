import "./Trip.scss";
import "../../styles/_global.scss";
import { useNavigate } from "react-router-dom";
import { geoApiOptions } from "../../utils/getAPI";
import axios from "axios";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

function Trip({ handleTripChange }) {
  const navigate = useNavigate();

  const handleHeadingBackClick = () => {
    navigate("/");
  };
  const [search, setSearch] = useState(null);

  const GEO_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?";
  const BASE_POPN = 50000;

  const makeUrl = (inputCity) => {
    return `${GEO_BASE_URL}minPopulation=${BASE_POPN}&namePrefix=${inputCity}`;
  };

  document.body.style = "background: #3d3d3d;";

  const loadOptions = async (inputCity) => {
    try {
      const response = await axios.request({
        ...geoApiOptions,
        url: makeUrl(inputCity),
      });
      return {
        options: response.data.data.map((city) => {
          return {
            lat: city.latitude,
            lon: city.longitude,
            label: `${city.name}${
              city.regionCode ? `, ${city.regionCode}` : ""
            }, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      destination: search,
      activity: e.target.activity.value,
      dateFrom: e.target.from.value,
      dateTo: e.target.to.value,
    };
    handleTripChange(newActivity);
    navigate("/products");
  };

  const handleDestinationChange = (searchData) => {
    setSearch(searchData);
  };

  return (
    <div className="trip">
      <div className="heading">
        <p onClick={handleHeadingBackClick} className="heading__button">
          RETURN
        </p>
      </div>
      <h1 className="trip__title">SELECT YOUR ADVENTURE</h1>
      <form className="trip__container" onSubmit={(e) => handleTripSubmit(e)}>
        {/* <input
          className="trip__option"
          type="text"
          placeholder="Enter a Destination"
          id="destination"
        /> */}
        <AsyncPaginate
          className="trip__paginate"
          placeholder="Enter your Destination"
          debounceTimeout={600}
          value={search}
          onChange={handleDestinationChange}
          loadOptions={loadOptions}
          required
        />
        <select
          className="trip__option"
          name="activity"
          id="activity"
          defaultValue={"Unselected"}
        >
          <option value="Unselected" disabled>
            {"Select an Activity | "}
          </option>
          <option value="Skiing">Skiing</option>
          <option value="Climbing">Rock Climbing</option>
          <option value="Hiking">Hiking</option>
        </select>
        <input className="trip__option" type="date" id="from" />
        <input className="trip__option" type="date" id="to" />
        <button className="trip__option--submit"></button>
      </form>
    </div>
  );
}

export default Trip;
