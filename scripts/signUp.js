// Регистрация
const xmark2 = document.getElementById('xmark2');
// Находим ссылку "sign up"
const signUpLink = document.getElementById('signUp');
// Находим форму регистрации
const signupForm = document.getElementById('signupForm');
// Находим оверлей
const overlay = document.getElementById('overlay');
// Обработчик события клика
signUpLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Показываем оверлей
    overlay.style.display = 'block';
    // Показываем форму регистрации
    signupForm.style.display = 'block';
});

// Скрываем окно корзины при клике на иконку "X"
xmark2.addEventListener('click', function() {
  signupForm.style.display = 'none';
  overlay.style.display = 'none'; // Скрываем затемнение фона при закрытии корзины
});


// Забыл пароль
const xmark3 = document.getElementById('xmark3');
// Находим ссылку "sign up"
const forgetPassLink = document.getElementById('forPass');
// Находим форму регистрации
const forgetPassForm = document.getElementById('forgetPassForm');
// Обработчик события клика
forgetPassLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Показываем оверлей
    overlay.style.display = 'block';
    // Показываем форму регистрации
    forgetPassForm.style.display = 'block';
});


// Скрываем окно корзины при клике на иконку "X"
xmark3.addEventListener('click', function() {
  forgetPassForm.style.display = 'none';
  overlay.style.display = 'none'; // Скрываем затемнение фона при закрытии корзины
});

