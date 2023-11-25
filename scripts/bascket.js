const cartWrapper = document.querySelector('.backet__items');
const cartIcon = document.getElementById('cartIcon');
const cartName = document.getElementById('cartName');
const menu = document.getElementById('check-menu');
const xmark = document.getElementById('xmark');
const shoppingCart = document.getElementById('shoppingCart');
const isEmptyMessage = document.getElementById('isEmpty');
const cartCounter = document.querySelector('.cart-counter');
let itemCount = 0;

// Функция для обновления счетчика товаров
function updateCartCounter() {
    cartCounter.textContent = itemCount;
    localStorage.setItem('cartCounter', itemCount); // Сохраняем значение в localStorage
}

// Показываем окно корзины при клике на иконку корзины
cartIcon.addEventListener('click', function() {
    shoppingCart.style.display = 'block';
    overlay.style.display = 'block'; // Отображаем затемнение фона
});

// Показываем окно корзины при клике на название корзины
cartName.addEventListener('click', function() {
    if (menu.checked) {
        menu.checked = false;
    }
    shoppingCart.style.display = 'block';
    overlay.style.display = 'block'; // Отображаем затемнение фона
});

// Скрываем окно корзины при клике на иконку "X"
xmark.addEventListener('click', function() {
    shoppingCart.style.display = 'none';
    overlay.style.display = 'none'; // Скрываем затемнение фона при закрытии корзины
});

// Функция для проверки пустоты корзины и отображения сообщения
function checkEmptyCart() {
    const cartItems = cartWrapper.querySelectorAll('.bascket__item');
    if (cartItems.length === 0) {
        isEmptyMessage.style.display = 'block';
    } else {
        isEmptyMessage.style.display = 'none';
    }
}

// Добавление товара в корзину из каталога
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        isEmptyMessage.style.display = 'none';

        const card = event.target.closest('.card2');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card2__img').getAttribute('src'),
            title: card.querySelector('.card__title').innerText,
            price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
        }

        const existingCartItem = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        if (existingCartItem) {
            // Если товар уже есть в корзине, увеличиваем счетчик
            const numElement = existingCartItem.querySelector('#bascket__product_num');
            let currentValue = parseInt(numElement.innerText);
            currentValue++;
            itemCount++;
            numElement.innerText = currentValue;
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        } else {
            // Если товара нет в корзине, добавляем новый элемент
            const cartItemHTML = `
            <div class="bascket__item" data-id="${productInfo.id}"> 
                <img src="${productInfo.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${productInfo.title}</p>
                    <div class="bascket__size">
                        <p id="bascket__product_size1">size: </p>
                        <div class="size__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_size">15</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>

                <div class="bascket__price_num">
                            <p id="bascket__product_cost">${productInfo.price} RUB</p>
                            <div class="bascket__num">
                                <p id="bascket__product_num1">number:</p>
                                <div class="num__ch">
                                    <p class="plus_minus" id="bascket__product_-">-</p>
                                    <p id="bascket__product_num">1</p>
                                    <p class="plus_minus" id="bascket__product_+">+</p>
                                </div>
                            </div>    
                        </div>
                <i class="fa-regular fa-trash-can" id="delete__trash"></i>
            </div>
        `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML );
            itemCount++; // увеличить счетчик товаров
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        }
    }
    updateTotalCost();
});

// Добавление товара в корзину из избранного
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        isEmptyMessage.style.display = 'none';

        const card = event.target.closest('.card3');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card2__img').getAttribute('src'),
            title: card.querySelector('.card__title').innerText,
            price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
        }

        const existingCartItem = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        if (existingCartItem) {
            // Если товар уже есть в корзине, увеличиваем счетчик
            const numElement = existingCartItem.querySelector('#bascket__product_num');
            let currentValue = parseInt(numElement.innerText);
            currentValue++;
            itemCount++;
            numElement.innerText = currentValue;
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        } else {
            // Если товара нет в корзине, добавляем новый элемент
            const cartItemHTML = `
            <div class="bascket__item" data-id="${productInfo.id}"> 
                <img src="${productInfo.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${productInfo.title}</p>
                    <div class="bascket__size">
                        <p id="bascket__product_size1">size: </p>
                        <div class="size__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_size">15</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>

                <div class="bascket__price_num">
                            <p id="bascket__product_cost">${productInfo.price} RUB</p>
                            <div class="bascket__num">
                                <p id="bascket__product_num1">number:</p>
                                <div class="num__ch">
                                    <p class="plus_minus" id="bascket__product_-">-</p>
                                    <p id="bascket__product_num">1</p>
                                    <p class="plus_minus" id="bascket__product_+">+</p>
                                </div>
                            </div>    
                        </div>
                <i class="fa-regular fa-trash-can" id="delete__trash"></i>
            </div>
        `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML );
            itemCount++; // увеличить счетчик товаров
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        }
    }
    updateTotalCost();
});

// Добавление подарочной карты в корзину
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart2')){
        isEmptyMessage.style.display = 'none';
    
        const card = event.target.closest('.card');
        event.preventDefault();

        const productInfo = {
            id: card.dataset.id,
            imgSrc: "./img/catalog/gift.png",
            title: "GIFT CARD",
            price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
        }

        const existingCartItem = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (existingCartItem) {
            // Если товар уже есть в корзине, увеличиваем счетчик
            const numElement = existingCartItem.querySelector('#bascket__product_num');
            let currentValue = parseInt(numElement.innerText);
            currentValue++;
            itemCount++;
            numElement.innerText = currentValue;
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        } else {
            // Если товара нет в корзине, добавляем новый элемент
            const cartItemHTML = `
            <div class="bascket__item" data-id="${productInfo.id}"> 
                <img src="${productInfo.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${productInfo.title}</p>
                    <div class="bascket__size">
                        <p id="bascket__product_size1">size: </p>
                        <div class="size__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_size">100</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>

                <div class="bascket__price_num">
                            <p id="bascket__product_cost">${productInfo.price} RUB</p>
                            <div class="bascket__num">
                                <p id="bascket__product_num1">number:</p>
                                <div class="num__ch">
                                    <p class="plus_minus" id="bascket__product_-">-</p>
                                    <p id="bascket__product_num">1</p>
                                    <p class="plus_minus" id="bascket__product_+">+</p>
                                </div>
                            </div>    
                        </div>
                <i class="fa-regular fa-trash-can" id="delete__trash"></i>
            </div>
        `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML );
            itemCount++; // увеличить счетчик товаров
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        }
    }
    updateTotalCost();
});


// Слушатель событий для удаления товара из корзины
cartWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash-can')) {
        const selectedItem = event.target.closest('.bascket__item');
        const numElement = selectedItem.querySelector('#bascket__product_num'); // Получаем элемент с количеством товаров
        const currentValue = parseInt(numElement.innerText); // Получаем текущее значение
        selectedItem.remove();
        itemCount = itemCount - currentValue; // Вычитаем текущее значение из itemCount
        updateCartCounter(itemCount); // Обновляем счетчик после удаления товара
        checkEmptyCart(); // Проверяем пустоту корзины после удаления элемента
    }
});

// Добавляем обработчик событий для изменения количества товара при клике на кнопки "+" и "-"
cartWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('plus_minus')) {
        const currentItem = event.target.parentElement;
        const numElement = currentItem.querySelector('#bascket__product_num');
        let currentValue = parseInt(numElement.innerText);

        if (event.target.id === 'bascket__product_+') {
            // Если нажата кнопка "+", увеличиваем количество товара
            currentValue++;
            itemCount++;
            updateCartCounter(itemCount); // обновить счетчик после добавления товара
        } else if (event.target.id === 'bascket__product_-') {
            if (currentValue > 1) {
                currentValue--; // Уменьшаем значение, если оно больше 1
                itemCount--; // Уменьшаем общее количество товаров в корзине
                updateCartCounter(itemCount); // Обновляем счетчик после уменьшения товара
            } else {
                currentValue = 1; // Устанавливаем значение 1, если оно уже равно 1 или меньше
            }
        }

        // Обновляем значение количества товара
        numElement.innerText = currentValue;
    }
});

// Добавляем обработчик событий для изменения размера товара при клике на кнопки "+" и "-"
cartWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('plus_minus')) {
        const currentItem = event.target.parentElement;
        const id = event.target.id;
        
        if (id === 'bascket__product_+' || id === 'bascket__product_-') {
            const sizeElement = currentItem.querySelector('#bascket__product_size');
            let currentSize = parseInt(sizeElement.innerText);

            if (id === 'bascket__product_+') {                
                // Если нажата кнопка "+", увеличиваем размер товара
                if (currentSize <= 25){
                    currentSize++;
                }
            } else if (id === 'bascket__product_-') {
                // Если нажата кнопка "-", уменьшаем размер товара, но не менее 15
                currentSize = Math.max(15, currentSize - 1);
            }

            // Обновляем значение размера товара
            sizeElement.innerText = currentSize;
        }
    }
});

function updateTotalCost() {
    const cartItems = cartWrapper.querySelectorAll('.bascket__item');
    let totalCost = 0;
    let cart = [];

    cartItems.forEach(item => {
        const priceElement = item.querySelector('#bascket__product_cost');
        const numElement = item.querySelector('#bascket__product_num');
        const sizeElement = item.querySelector('#bascket__product_size');
        const nameElement = item.querySelector('#bascket__product_name');
        const imgElement = item.querySelector('.basket__product_img');
        const id = item.getAttribute('data-id');

        const price = parseFloat(priceElement.innerText.replace(/[^\d.]/g, '').replace(',', '.')); // Преобразуйте строку в число
        const quantity = parseInt(numElement.innerText);
        const size = parseInt(sizeElement.innerText);
        const title = nameElement.innerText;
        const imgSrc = imgElement.getAttribute('src');

        totalCost += price * quantity;

        cart.push({
            id: id,
            price: price,
            quantity: quantity,
            size: size,
            title: title,
            imgSrc: imgSrc
        });
    });

    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    const finalCostElement = document.getElementById('final__cost');
    finalCostElement.innerText = `Final cost: ${totalCost.toLocaleString('ru-RU')} RUB`;
}


// Функция для загрузки корзины при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    // Пытаемся получить корзину из localStorage
    const savedCart = localStorage.getItem('cart');
    const savedCartCounter = localStorage.getItem('cartCounter');

    if (savedCartCounter) {
        itemCount = parseInt(savedCartCounter);
        updateCartCounter(); // Обновляем счетчик при загрузке страницы
    }

    if (savedCart) {
        const cartItems = JSON.parse(savedCart);

        cartItems.forEach(item => {
            const cartItemHTML = `
            <div class="bascket__item" data-id="${item.id}"> 
                <img src="${item.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${item.title}</p>
                    <div class="bascket__size">
                        <p id="bascket__product_size1">size: </p>
                        <div class="size__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_size">${item.size}</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>

                <div class="bascket__price_num">
                    <p id="bascket__product_cost">${item.price} RUB</p>
                    <div class="bascket__num">
                        <p id="bascket__product_num1">number:</p>
                        <div class="num__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_num">1</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
            `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

            // Устанавливаем количество и размер товара
            const currentItem = cartWrapper.querySelector(`[data-id="${item.id}"]`);
            currentItem.querySelector('#bascket__product_cost').innerText = `${item.price.toLocaleString('ru-RU')} RUB`;
            currentItem.querySelector('#bascket__product_num').innerText = item.quantity;
            currentItem.querySelector('#bascket__product_size').innerText = item.size;
        });

        updateTotalCost(); // Обновляем общую стоимость
        checkEmptyCart();
    }
});
