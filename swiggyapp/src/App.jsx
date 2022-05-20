// import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <>
    <Navbar />
    <Filters />
    <Restaurants />
    <Offers />
    </>
  );
}

export default App;
