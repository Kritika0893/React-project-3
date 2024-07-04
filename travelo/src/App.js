
import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import CustomSearch from './components/CustomSearch';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      
      <CustomSearch/>
      <h1 class="head1">Offers & Promocode</h1>
      <Cards/>
      <h1 class="head2">Top Hotel Destinations</h1>
    </div>
  );
}

export default App;
