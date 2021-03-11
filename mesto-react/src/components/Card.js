function Card(props) {

    function handleClick() {
        props.onCardClick(props.name);
    }

    return (
        <template className="template">
            <div className="card">
                <img className="card__image" style={{ backgroundImage: `url-(${cards})` }} alt="#" onClick={handleClick}/>
                <button className="card__delete" type="button"></button>
                <div className="card__group">
                    <h3 className="card__text">{props.name}</h3>
                    <div className="card__like-container">
                        <button className="card__like" type="button"></button>
                        <span className="card__like-counter"></span>
                    </div>
                </div>
            </div>
        </template>
    );
}
export default Card;