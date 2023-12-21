import "./Banner.scss";
import "../../styles/_global.scss";

function Banner() {
  return (
    <div className="banner">
      <p className="banner__content">
        <span className="banner__content--bold-uline">Order gifts now</span>
        <span className="banner__content--bold"> & pick up in-store </span>
        before the holidays
      </p>
    </div>
  );
}

export default Banner;
