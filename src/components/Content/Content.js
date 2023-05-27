import "./Content.css"
import RowData from "../../Contrants/URLS"
import Row from "../row/Row"
import axios from "axios"
import { useEffect } from "react";



const Content = () => {
  const getMovies=()=>{
   const responce= axios.get("https://api.themoviedb.org/3/movie",{
      params:{
        api_key:"1172e690907c5b35a966c432f3606507"
      }
    });
    console.log(responce);
    
  }
  useEffect(()=>{
    getMovies();
  },[])
  

  return (
    <div className='content_wrapper'>
     {RowData.map((el) => {
      return <Row title={el.title} url={el.url} />
    })}
    </div>
  )
}

export default Content





//1172e690907c5b35a966c432f3606507 api key