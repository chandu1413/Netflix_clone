import "./Row.css"
import Cards from "../card/Cards"
import { useEffect , useState  } from "react"
import axios from "axios";

const Row = (props) => {
    const [movies, setMovies] = useState([]);
       const fetchmovies = async ()=>{
       const response= await  axios.get(props.url);
       setMovies(response.data.results);
} 
    useEffect(()=>{
        fetchmovies();
    })


   return (
    <div className="row_wrapper">
        <h3 className="row_title">{props.title}</h3>
      <div className="row_card">
      {movies.map((el)=>{
        return <Cards title={el.title} poster={el.backdrop_path }/>
     })}
        </div>  
     
    </div>
  )
}

export default Row
