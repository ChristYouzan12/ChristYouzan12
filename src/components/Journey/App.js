import "./App.css";
import data from "./data";
import Journey from "./Journey";
import NavBar from "./navBar";
import Explore from "./pages/Explore";
function App() {
  const list = data.map((item) => {
    return (
      <Journey
        key={item.title}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <section>
      <NavBar />
      {list}
      <Explore />
    </section>
  );
}

export default App;
