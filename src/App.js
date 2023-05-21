import './App.css';
import Navigation from './components/navigation/Navigation.jsx'
import Header from './components/header/Header.jsx'
import Filters from './components/filters/Filters.jsx'
import Shop from './components/shop/Shop.jsx'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Filters/>
      <Shop/>
    </div>
  );
}

export default App;
