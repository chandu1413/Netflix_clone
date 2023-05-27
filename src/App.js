import React from 'react'
import Nav from './components/Navbar/Nav'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import axios from 'axios'

axios.defaults.baseURL= 'https://api.themoviedb.org/3/movie/550?api_key=1172e690907c5b35a966c432f3606507';
axios.defaults.params = {
   api_key:'1172e690907c5b35a966c432f3606507'
};

const App = () => {
  return (
    <>
    <Nav/>
    <Header/>
    <Content/>
    </>
  )
}
export default App
