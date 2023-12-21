import "./NavBar.scss";
import "../../styles/_global.scss";

function NavBar() {
  document.body.style = "background: #ffffff;";
  return (
    <div className="navbar">
      <section className="navbar__content">
        <a className="navbar__text navbar__text--active">ARC'TERYX</a>
        <p className="navbar__divider">|</p>
        <a className="navbar__text">OUTLET</a>
        <p className="navbar__divider">|</p>
        <a className="navbar__text">VEILANCE</a>
        <p className="navbar__divider">|</p>
        <a className="navbar__text">REGEAR</a>
      </section>
    </div>
  );
}

export default NavBar;
