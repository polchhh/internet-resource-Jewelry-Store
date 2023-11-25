// Функция для загрузки данных избранных товаров из localStorage
function loadFavoritesDataFromStorage() {
    const savedFavoritesData = localStorage.getItem('favoritesData');

    if (savedFavoritesData) {
        const favoritesData = JSON.parse(savedFavoritesData);
        const favouritesContainer = document.getElementById('favourites');

        // Создаем HTML-строку, содержащую карточки товаров из favoritesData
        let htmlString = '';
        favoritesData.forEach((productInfo) => {
            htmlString += `
                <div class="card3" data-id="${productInfo.id}">
                    <i class="fa-solid fa-cart-plus" id="cart" data-cart ></i>
                    <i class="fa-regular fa-trash-can" id="delete_item"></i>
                    <img src="${productInfo.imgSrc}" alt="img" class="card2__img i${productInfo.id}">
                    <div class="card__details">
                        <h6 class="card__title">${productInfo.title}</h6>
                        <p class="card__price">${productInfo.price} ₽</p>
                    </div>
                </div>
            `;
        });

        // Добавляем HTML-код в контейнер "#favourites"
        favouritesContainer.insertAdjacentHTML('beforeend', htmlString);
    }
}


// Функция для удаления товара из избранного
function removeFromFavorites(id) {
    const savedFavoritesData = localStorage.getItem('favoritesData');

    if (savedFavoritesData) {
        let favoritesData = JSON.parse(savedFavoritesData);
        
        // Находим индекс товара в списке избранного по его id
        const index = favoritesData.findIndex(item => item.id === id);

        if (index !== -1) {
            // Удаляем товар из списка избранного
            favoritesData.splice(index, 1);

            // Обновляем данные в localStorage
            localStorage.setItem('favoritesData', JSON.stringify(favoritesData));

            // Обновляем отображение избранного на странице
            const favouritesContainer = document.getElementById('favourites');
            favouritesContainer.innerHTML = ''; // Очищаем контейнер

            // Повторно загружаем данные избранного после удаления товара
            loadFavoritesDataFromStorage();
        }
    }
}

// Вызываем функцию загрузки данных из localStorage при загрузке страницы
window.addEventListener('DOMContentLoaded', function () {
    loadFavoritesDataFromStorage();

    // Добавляем обработчик событий для удаления товара из избранного при клике на корзину
    const favouritesContainer = document.getElementById('favourites');
    favouritesContainer.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'delete_item') {
            const card = event.target.closest('.card3');
            const imgElement = card.querySelector('.card2__img');
            const id = imgElement.classList[1].substring(1); // Получаем id товара из класса изображения
            removeFromFavorites(id);
        }
    });
});
