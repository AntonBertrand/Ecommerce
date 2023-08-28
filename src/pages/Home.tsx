import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'
import Filters from '../components/filters/Filters'
import Shop from '../components/shop/Shop'

const Home = () => {
    return (
        <div className="App">
          <Navigation/>
          <Header/>
          <Filters/>
          <Shop/>
        </div>
      );
}

export default Home;