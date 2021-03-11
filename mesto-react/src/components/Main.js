import React from 'react'
import { api } from '../utils/api.js'

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
                console.log('error', err)
            })
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => {
                console.log('error', err)
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" style={{ backgroundImage: `url-(${userAvatar})` }} alt="Фото профиля" />
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
                {cards.map(() => (
                    <div className="card">
                        <img className="card__image" style={{ backgroundImage: `url-(${cards})` }} alt={props.name} />
                        <button className="card__delete" type="button"></button>
                        <div className="card__group">
                            <h3 className="card__text">{props.name}</h3>
                            <div className="card__like-container">
                                <button className="card__like" type="button"></button>
                                <span className="card__like-counter"></span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </section>
        </main>
    );
}
export default Main;


