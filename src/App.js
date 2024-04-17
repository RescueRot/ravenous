import logo from './logo.svg';
import './css/App.css';
import BusinessList from './components/BusinessList';
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
