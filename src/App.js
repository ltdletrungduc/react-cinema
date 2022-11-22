import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Film from './Components/Flim/Film';
import Header from './Components/Header';
import Promotion from './Components/Promotion/Promotion';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Film/>
      <Promotion/>
    </div>
  );
}

export default App;
