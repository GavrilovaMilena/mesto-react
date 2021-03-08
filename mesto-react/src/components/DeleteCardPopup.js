function DeleteCardPopup() {
    return (
        <div class="popup popup_delete-card">
            <div class="popup__window popup__window_delete-card">
                <h2 class="popup__title">Вы уверены?</h2>
                <button type="button" class="popup__close-button popup__close-button_delete-card"></button>
                <button class="popup__button popup__button_delete-card" type="submit">Да</button>
            </div>
        </div>
    );
}
export default DeleteCardPopup;