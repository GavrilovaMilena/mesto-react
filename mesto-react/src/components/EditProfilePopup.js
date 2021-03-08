function EditProfilePopup() {
    return (
        <div class="popup popup_profile">
            <div class="popup__window">
                <h2 class="popup__title">Редактировать профиль</h2>
                <button type="button" class="popup__close-button"></button>
                <form class="popup__form" name="infoForm" novalidate>
                    <input
                        name="infoTitle"
                        type="text"
                        class="popup__input"
                        placeholder="Имя"
                        maxlength="40"
                        minlength="2"
                        required
                        id="name"
                        autocomplete="off" />

                    <span id="name-error" class="error"></span>

                    <input
                        name="infoSubtitle"
                        type="text"
                        class="popup__input"
                        placeholder="О себе"
                        maxlength="200"
                        minlength="2"
                        required
                        id="about"
                        autocomplete="off" />

                    <span id="about-error" class="error"></span>
                    <button class="popup__button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
export default EditProfilePopup;