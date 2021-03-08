function EditCardPopup() {
    return (
        <div class="popup popup_card">
            <div class="popup__window">
                <h2 class="popup__title">Новое место</h2>
                <button type="button" class="popup__close-button popup__close-button_card"></button>
                <form name="cardForm" class="popup__form popup__form_card" novalidate>
                    <input
                        name="cardName"
                        type="text"
                        class="popup__input popup__input_card"
                        placeholder="Название"
                        maxlength="30"
                        minlength="2"
                        required
                        id="text"
                        autocomplete="off" />

                    <span id="text-error" class="error"></span>

                    <input
                        name="cardLink"
                        type="url"
                        class="popup__input popup__input_card"
                        placeholder="Ссылка на картинку"
                        required
                        id="url-card"
                        autocomplete="off" />

                    <span id="url-card-error" class="error"></span>
                    <button class="popup__button popup__button_card" type="submit">Создать</button>
                </form>
            </div>
        </div>
    );
}
export default EditCardPopup;