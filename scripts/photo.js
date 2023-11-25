let currentImage = 1;
const totalImages = 7; // Общее количество изображений

// Функция изменения фотографии
function changePhoto(newImage) {
    document.getElementById('currentPhoto').src = newImage;
}

// Функция получения следующего изображения
function getNextImage() {
    if (currentImage === totalImages) {
        currentImage = 1;
    } else {
        currentImage++;
    }
    changePhotoSmoothly(`./img/photo${currentImage}.png`);
}

// Функция для плавного изменения фотографий
function changePhotoSmoothly(newImage) {
    const imageElement = document.getElementById('currentPhoto');
    imageElement.style.opacity = '0.8'; // Устанавливаем нулевую прозрачность
    setTimeout(function() {
        imageElement.src = newImage; // Меняем изображение
        imageElement.style.opacity = '1'; // Устанавливаем обратно полную прозрачность
    }, 500); // Задержка в миллисекундах (0.5 секунды)
}

// Функция для автоматической смены изображений каждые 10 секунд
function startImageRotation() {
    setInterval(getNextImage, 10000);
}

// Функции изменения фотографий при нажатии на кнопки
document.getElementById('btn1').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo1.png');
    currentImage = 1;
});

document.getElementById('btn2').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo2.png');
    currentImage = 2;
});

document.getElementById('btn3').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo3.png');
    currentImage = 3;
});

document.getElementById('btn4').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo4.png');
    currentImage = 4;
});

document.getElementById('btn5').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo5.png');
    currentImage = 5;
});

document.getElementById('btn6').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo6.png');
    currentImage = 6;
});

document.getElementById('btn7').addEventListener('click', function() {
    changePhotoSmoothly('./img/photo7.png');
    currentImage = 7;
});

startImageRotation();
