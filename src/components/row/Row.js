import React from "react"
import "./Row.css"

function Row({title,isLargerRow}){
  const ScrollLeft = document.querySelector('.row_posters');

  ScrollLeft.addEventListener('mousemove', (event) => {
  ScrollLeft += event.movementX;
});
  return(
    <div className="row">
      <h2>{title}</h2>
        <div className="row_posters">
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>
         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
         className={`rowpost ${isLargerRow && "largeImg"}`}/>

          </div>
      </div>
  )
}

export default Row