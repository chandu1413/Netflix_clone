import "./Content.css"
import RowData from "../../Contrants/URLS"
import Row from "../row/Row"
import axios from '../localaxios'

import { useEffect, setMydata} from "react";

// const getApiData =async ()=> {
//   const res = axios.get("https://api.themoviedb.org/3/");
//   setMydata(res.data);
// }

// useEffect(()=>{
//   setApiData();
// },[])

const Content = () => {
  // const [movie,Setmovie]=useState([])
  
  // useEffect(()=>{
  //           async function fetchdata() {
  //             const request =await axios.get()
  //           }
  // },[])
  
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