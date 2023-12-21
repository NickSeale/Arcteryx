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

  const makeUrl = (inputCity) => {
    return `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${inputCity}`;
  };

  const loadOptions = async (inputCity) => {
    try {
      const response = await axios.request({
        ...geoApiOptions,
        url: makeUrl(inputCity),
      });
      //   console.log(response.data.data);
      return {
        options: response.data.data.map((city) => {
          return {
            // value: `${city.latitude} ${city.longitude}`,
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
    // console.log(geoApiOptions);
    handleTripChange(newActivity);
    console.log(newActivity);
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
        />
        <select
          className="trip__option"
          name="activity"
          id="activity"
          defaultValue={"Unselected"}
        >
          <option value="Unselected" disabled>
            {"Select an Activity"}
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
