const favorites = document.querySelectorAll("#favor");

favorites.forEach(function (favor) {
    favor.addEventListener('click', function () {
        if (favor.style.fontWeight !== '900') {
            favor.style.fontWeight = '900';
            // Получаем информацию о карточке при нажатии на "нравится"
            const card = favor.closest('.card2');
            const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.card2__img').getAttribute('src'),
                title: card.querySelector('.card__title').innerText,
                price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
            };
            saveFavoritesState(); // Сохраняем состояние избранного и данные карточки при каждом изменении
        } else {
            favor.style.fontWeight = '100';
            saveFavoritesState(); // Сохраняем состояние избранного и данные карточки при каждом изменении
        }
    });
});

// Функция для сохранения состояния избранного в localStorage
function saveFavoritesState() {
    const favoritesData = [];
    // Проходим по каждой карточке и сохраняем данные товара, если они отмечены как "избранные"
    favorites.forEach(function (favor) {
        const card = favor.closest('.card2');
        if (favor.style.fontWeight === '900') {
            const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.card2__img').getAttribute('src'),
                title: card.querySelector('.card__title').innerText,
                price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
                isFavorite: true // Устанавливаем флаг "избранный"
            };
            favoritesData.push(productInfo);
        }
    });
    // Сохраняем данные избранных товаров в localStorage
    localStorage.setItem('favoritesData', JSON.stringify(favoritesData));
}

// Функция для загрузки состояния избранного из localStorage
function loadFavoritesState() {
    const savedFavoritesData = localStorage.getItem('favoritesData');
    if (savedFavoritesData) {
        const favoritesData = JSON.parse(savedFavoritesData);
        favoritesData.forEach((productInfo) => {
            const card = document.querySelector(`.card2[data-id="${productInfo.id}"]`);
            const favor = card.querySelector(".fa-heart");
            // Устанавливаем состояние "избранное" и другие данные карточки
            if (productInfo.isFavorite) {
                favor.style.fontWeight = '900';
            } else {
                favor.style.fontWeight = '100';
            }
        });
    }
}

// Вызываем функцию загрузки состояния избранного при загрузке страницы
window.addEventListener('DOMContentLoaded', function () {
    loadFavoritesState();
});
