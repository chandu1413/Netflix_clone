import "./Card.css"

const Cards = (props) => {
  return (
    <div>
      <h2 title="orange"></h2>
      <img className="card_poster" alt="poster" src={props.poster } />
    </div>
  )
}

export default Cards
