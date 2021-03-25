import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm name="profileEdit" title="Редактировать профиль" buttonName="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <form className="popup__form" name="infoForm">
        <input
          name="userName"
          type="text"
          className="popup__input"
          placeholder="Имя"
          maxLength="40"
          minLength="2"
          required
          id="name"
          autoComplete="off"/>

        <span id="name-error" className="error" />

        <input
          name="description"
          type="text"
          className="popup__input"
          placeholder="О себе"
          maxLength="200"
          minLength="2"
          required
          id="about"
          autoComplete="off"/>

        <span id="about-error" className="error" />
      </form>
    </PopupWithForm>
  );
}

export default EditProfilePopup;