import "./Row.css"
// import Cards from "../card/Cards"
import { useEffect , useState  } from "react"
// import axios from "axios";

function Row  ({title,isLargerRow}) {
const ScroleLeft=document.querySelector('.row_posters')

ScroleLeft.addEventListener('mousemove',(e)=>{
  ScroleLeft.scrollLeft += e.movementX;});

   return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg"
          className={`rowpost ${isLargerRow && "largeImg"}`}/>
      </div>
    </div>
  )
}

export default Row
