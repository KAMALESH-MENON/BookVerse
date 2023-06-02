import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import NewArrival from './components/newArrival/NewArrival'
import Browse from './components/browse/Browse'
import About from './components/about/About'

const App = () => {
  const handleSearch = (searchTerm) => {
    // Handle the search functionality here
    console.log('Search term:', searchTerm);
  };
  return (
    <>
      <Nav />
      <Home />
      <NewArrival />
      <Browse />
      <About />
    </>
  )
}

export default App