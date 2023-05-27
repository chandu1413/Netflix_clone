import "./Card.css"

const Cards = (props) => {
  return (
    <div>
      <img className="card_poster" alt="poster" src={props.poster } />
    </div>
  )
}

export default Cards
