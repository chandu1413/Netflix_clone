import React, { useEffect, useState } from 'react';
import "./Header.css";
import axios from '../localaxios';
import userrequests from '../request';

const Header = () => {
const [movie,setMovie]=useState([])

useEffect(() => {
  async function fetchData() {
    try {
      const request = await axios.get(userrequests.fetchNetflixOriginals);
      const movies = request.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
  const interval = setInterval(fetchData, 3000); // Update every 9 seconds
  return () => clearInterval(interval); // Clean up the interval on component unmount
}, []);

  return (
    <header className='header' style={{
      backgroundSize: 'cover',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      backgroundPosition: 'center center',
    }}>
      
        <div className='header_inner_shadow '>

        </div>
        <div className='header_content'> 
            <div className='header_billbord'>
              <h1 className='banner_title'>
                {movie?.title || movie?.original_name ||movie?.name}
                </h1>  
                <img
            className='title-logo'
            // src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title || movie?.original_name || movie?.name}
          />
                {/* <img alt="The Walking Dead" className="title-logo" src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXpN1WnlyrB7DtPoEDtUidJqTrpkcdmNHlNchIRZs8tdBPTRYkf4_qM95uZyLwxccpYZsYthnkSrOGRVvYshlK7QuJoy2EwiwiWZOaj8k1Q-.webp?r=f1a" title="The Walking Dead"></img> */}
            </div>
            <h4 className='header_desc'>
             {movie?.overview }
            </h4>
          <div className='header_buttons'>
          <button className='header_button play_button'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z'
                fill='currentColor'
              ></path>
            </svg>
            Play
          </button>
          <button className='header_button more_info_button'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                fill='currentColor'
              ></path>
            </svg>
            More Info
          </button>
         </div>
        </div>
    </header>
  )
}

export default Header
