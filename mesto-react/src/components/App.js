import './logo.svg'
import '../index.css'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditCardPopup from './EditCardPopup.js'
import ImageFullPopup from './ImageFullPopup.js'
import DeleteCardPopup from './DeleteCardPopup.js'

function App() {
    return (
        <body class="body">
            <div class="page">
                <Header />
                <Main />
                <Footer />
            </div>
            <EditProfilePopup />
            <EditCardPopup />
            <ImageFullPopup />
            <EditAvatarPopup />
            <DeleteCardPopup />
            <template class="template">
                <div class="card">
                    <img class="card__image" src="#" alt="#" />
                    <button class="card__delete" type="button"></button>
                    <div class="card__group">
                        <h3 class="card__text"></h3>
                        <div class="card__like-container">
                            <button class="card__like" type="button"></button>
                            <span class="card__like-counter"></span>
                        </div>
                    </div>
                </div>
            </template>
        </body>
    );
}
export default App;