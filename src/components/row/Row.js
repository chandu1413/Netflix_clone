import axios from "axios";
import "./Row.css";
import { useEffect, useState, useRef } from "react";

function Row({ title, isLargerRow, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  axios.defaults.params = {
   api_key:'1172e690907c5b35a966c432f3606507'
};
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters"  ref={rowRef}>
        {movies.map((movie) => (
         <> <img
            src={`${base_url}${isLargerRow ? movie.poster_path : movie.poster_path}`}
            className={`rowpost ${isLargerRow && "largeImg"}`}
            key={movie.id}
          />
         
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
