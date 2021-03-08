function EditAvatarPopup() {
    return (
        <div class="popup popup_avatar">
            <div class="popup__window popup__window_avatar">
                <h2 class="popup__title">Обновить аватар</h2>
                <button type="button" class="popup__close-button popup__close-button_avatar"></button>
                <form name="avatarForm" class="popup__form popup__form_avatar" novalidate>
                    <input
                        name="avatar"
                        type="url"
                        class="popup__input popup__input_avatar"
                        placeholder="Ссылка на картинку"
                        required
                        id="url-avatar"
                        autocomplete="off" />

                    <span id="url-avatar-error" class="error"></span>
                    <button class="popup__button popup__button_avatar" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
export default EditAvatarPopup;