import React from 'react'
import Nav from './components/Navbar/Nav'
import Header from './components/Header/Header'
import axios from 'axios'
import Row from './components/row/Row'
import userrequests from './components/request'

axios.defaults.baseURL= 'https://api.themoviedb.org/3/';
axios.defaults.params = {
   api_key:'1172e690907c5b35a966c432f3606507'
};

const App = () => {
  return (
    <>
    <Nav/>
    <Header/>
    <Row title='Netflix Originals' isLargerRow fetchURL={userrequests.fetchNetflixOriginals}/>
    <Row title="Treanding Now" fetchURL={userrequests.fetchTrending}/>
    <Row title="TopRated" fetchURL={userrequests.fetchTopRated}/>
    <Row title="Action Movies" fetchURL={userrequests.fetchActionMOvies}/>
    <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
    </>
  )
}
export default App
