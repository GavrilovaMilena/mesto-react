function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
        <div className="card">
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button className="card__delete" type="button"></button>
            <div className="card__group">
                <h3 className="card__text">{props.card.name}</h3>
                <div className="card__like-container">
                    <button className="card__like" type="button"></button>
                    <span className="card__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;