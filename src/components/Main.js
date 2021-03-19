import React from 'react'
import api from '../utils/api.js'
import Card from './Card.js';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext.js'

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля" />
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="info">
                    <h1 className="info__title">{currentUser.name}</h1>
                    <p className="info__subtitle">{currentUser.description}</p>
                    <button className="info__button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                ))
                }
            </section>
        </main>
    );
}
export default Main;


