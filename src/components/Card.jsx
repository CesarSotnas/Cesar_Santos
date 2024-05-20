import './css/Card.css'

const Card = (props) => {
  return (
    <div className="Card-container">
        <img className="projetos-card" src={props.img}></img>
    </div>
  )
}

export default Card