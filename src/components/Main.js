import React from 'react'
import api from '../utils/api.js'
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setDescription] = React.useState('');
    const [userAvatar, setAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setDescription(data.about);
                setAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
                    <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="info">
                    <h1 className="info__title">{userName}</h1>
                    <p className="info__subtitle">{userDescription}</p>
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


