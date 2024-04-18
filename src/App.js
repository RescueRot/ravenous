import logo from './logo.svg';
import './css/App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import businesses from './data/business';

function App() {
  return (
    <div className='mainAppComponent'>
    <SearchBar/>
    <BusinessList businessesArray = {businesses}/>
    </div>
  );
}

export default App;
