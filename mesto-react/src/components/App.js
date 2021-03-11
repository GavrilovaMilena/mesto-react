import React from 'react'
import logo from '../images/Vector.svg'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import '../index.css'

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

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
    return (
    <div className="body">
        <div className="page">
            <Header src={logo}/>
            <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick}/>
            <Footer />
        </div>
        <PopupWithForm name="profileEdit" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="infoForm">
                <input 
                name="infoTitle"
                type="text" 
                className="popup__input" 
                placeholder="Имя" 
                maxlength="40" 
                minlength="2"
                required  
                id="name" 
                autocomplete="off"/>

                <span id="name-error" className="error"></span>

                <input 
                name="infoSubtitle" 
                type="text" 
                className="popup__input" 
                placeholder="О себе" 
                maxlength="200"
                minlength="2" 
                required 
                id="about" 
                autocomplete="off"/>

                <span id="about-error" className="error"></span>
            </form>       
        </PopupWithForm>
        <PopupWithForm name="cardEdit" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <form name="cardForm" className="popup__form popup__form_card">
                <input 
                name="cardName" 
                type="text" 
                className="popup__input popup__input_card" 
                placeholder="Название"
                maxlength="30" 
                minlength="2" 
                required 
                id="text" 
                autocomplete="off"/>

                <span id="text-error" className="error"></span>

                <input 
                name="cardLink" 
                type="url" 
                className="popup__input popup__input_card"
                placeholder="Ссылка на картинку" 
                required 
                id="url-card" 
                autocomplete="off"/>

                <span id="url-card-error" className="error"></span>
            </form>
        </PopupWithForm>
        <PopupWithForm name="avatarEdit" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <form name="avatarForm" className="popup__form popup__form_avatar">
                <input
                name="avatar"
                type="url"
                className="popup__input popup__input_avatar"
                placeholder="Ссылка на картинку"
                required
                id="url-avatar"
                autocomplete="off"/>
        
                <span id="url-avatar-error" className="error"></span>
            </form>
        </PopupWithForm>
        <PopupWithForm name="cardDelete" title="Вы уверены?" buttonName="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
    );
}
export default App;