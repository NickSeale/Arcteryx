import "./Trip.scss";
import "../../styles/_global.scss";
import { useNavigate } from "react-router-dom";
import { geoApiOptions } from "../../utils/getAPI";
import axios from "axios";

function Trip() {
  const navigate = useNavigate();
  const handleHeadingBackClick = () => {
    navigate("/");
  };

  const makeUrl = (inputCity) => {
    return `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${inputCity}`;
  };

  const getCities = async (inputCity) => {
    try {
      const response = await axios.request({
        ...geoApiOptions,
        url: makeUrl(inputCity),
      });
      //   console.log(response.data);

      console.log(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      destination: e.target.destination.value,
      activity: e.target.activity.value,
      dateFrom: e.target.from.value,
      dateTo: e.target.to.value,
    };
    // console.log(geoApiOptions);
    getCities(e.target.destination.value);
    // console.log(newActivity);
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
        <input
          className="trip__option"
          type="text"
          placeholder="Enter a Destination"
          id="destination"
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
