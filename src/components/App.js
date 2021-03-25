import React from 'react'
import logo from '../images/Vector.svg'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from "./EditAvatarPopup.js";

import api from '../utils/api.js'
import '../index.css'

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    
    const [currentUser, setCurrentUser] = React.useState({
        name: "",
        about: "",
        avatar: "",
      });

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([currentUser]) => {
            setCurrentUser(currentUser);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    function handleUpdateUser({ name, about }) {
        api.setUserInfo({ name, about }).then((data) => {
          setCurrentUser({ name: data.name, about: about, avatar: data.avatar });
          closeAllPopups();
        });
      }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header src={logo} />
                    <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
                    <Footer />
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
                <PopupWithForm name="cardEdit" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <form name="cardForm" className="popup__form popup__form_card">
                        <input
                            name="cardName"
                            type="text"
                            className="popup__input popup__input_card"
                            placeholder="Название"
                            maxLength="30"
                            minLength="2"
                            required
                            id="text"
                            autoComplete="off" />

                        <span id="text-error" className="error"></span>

                        <input
                            name="cardLink"
                            type="url"
                            className="popup__input popup__input_card"
                            placeholder="Ссылка на картинку"
                            required
                            id="url-card"
                            autoComplete="off" />

                        <span id="url-card-error" className="error"></span>
                    </form>
                </PopupWithForm>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                <PopupWithForm name="cardDelete" title="Вы уверены?" buttonName="Да" />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;