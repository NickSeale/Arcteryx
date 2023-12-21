import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import "./Home.scss";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Header />
      <img className="home__bg" src={`../src/assets/app-bg-1.png`} />
    </>
  );
}

export default Home;
