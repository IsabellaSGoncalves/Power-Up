import './App.css';

import Compressor from './components/Compressor/Compressor';
import Home from './components/Home/Home';
import Descubra from './components/Descubra/Descubra';
import IMC from './components/IMC/IMC';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      < Home/>
      <Descubra />
      <IMC /> 
      <Compressor />   
      <Footer />
    </div>
  );
}

export default App;
