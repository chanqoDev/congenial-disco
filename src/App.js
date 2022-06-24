import logo from "./logo.svg";
import "./App.css";
import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleSlider />
      </header>
    </div>
  );
}

export default App;
