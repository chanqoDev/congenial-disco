import logo from './logo.svg';
import './App.css';
import SimpleSlider from './SimpleSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/footer/Footer';
import HomeHeroSliderData from './components/HomeHeroSliderData';
import Slider from 'react-slick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slider data={HomeHeroSliderData} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleSlider />
      </header>
      <Footer />
    </div>
  );
}

export default App;
