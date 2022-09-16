import './App.css';
import Product from './Components/Products/Product'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer';
import Landpage from './Components/Landpage/Landpage';
function App() {
  return (
    <div className="App"> 
          
          <Landpage />
          <AboutUs />
          <Product />
          <Footer />
    </div>
  );
}

export default App;
