// Найти все элементы галереи
var galleryItems = document.querySelectorAll('.gallery-item');

// Найти модальное окно и изображение внутри модального окна
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-image');

// Для каждого элемента галереи добавить обработчик события при клике
galleryItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвратить действие по умолчанию (переход по ссылке)
        modal.style.display = 'block'; // Показать модальное окно
        modalImg.src = this.firstElementChild.src; // Установить src изображения в модальном окне из первого дочернего элемента (тега img)
    });
});

// Найти элемент закрытия модального окна
var closeBtn = document.querySelector('.close');

// Добавить обработчик события для закрытия модального окна при клике на крестик
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Скрыть модальное окно при клике на крестик
});
