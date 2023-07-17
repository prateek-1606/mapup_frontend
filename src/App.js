import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import WorldMap from "./Components/worldMap";
function App() {
  return (
    <div className="App">
      <Navbar />
      <WorldMap />
      <Footer />
    </div>
  );
}

export default App;
