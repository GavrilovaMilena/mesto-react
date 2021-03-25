import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm name="avatarEdit" title="Обновить аватар" buttonName="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <form name="avatarForm" className="popup__form popup__form_avatar">
                <input
                    name="avatar"
                    type="url"
                    className="popup__input popup__input_avatar"
                    placeholder="Ссылка на картинку"
                    required
                    id="url-avatar"
                    autoComplete="off" />

                <span id="url-avatar-error" className="error"></span>
            </form>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;