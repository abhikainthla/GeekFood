import "./Home.css";
import Button from "./Button";
function Home() {
  return (
    <div className="home">
      <section className="home-screen">
        <div className="home-elements">
          <div>
            <h1 className="home-heading" style={{ color: "#000000" }}>
              Let us find your
            </h1>
            <h1 className="home-heading" style={{ color: "#e11d48" }}>
              Forever Food.
            </h1>
            <p className="home-para">
              Find the best restaurant in town for every occasion, from casual
              dining to special occasions and everything in between.
            </p>
          </div>
          <div className="home-buttons">
            <Button
              fontSize={"1rem"}
              fontWeight={"500"}
              padding={"1rem 2.5rem"}
              fontColor={"#fff"}
              backgroundColor={"#e11d48"}
              borderRadius={"4px"}
            >
              Search Now
            </Button>
            <Button
              fontSize={"1rem"}
              fontWeight={"500"}
              padding={"1rem 2.5rem"}
              fontColor={"#e11d48"}
              backgroundColor={"#fff"}
              borderRadius={"4px"}
            >
              Know more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
