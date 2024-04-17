import logo from './logo.svg';
import './css/App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='mainAppComponent'>
    <SearchBar/>
    <BusinessList/>
    </div>
  );
}

export default App;
