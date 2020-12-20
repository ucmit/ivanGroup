// Классическая версия для объявения элемента из HTML
// let НАЗВАНИЕ = document.getElementById("id элемента")

// Модерн версия просто использовать название id элемента


// Event-функции для обработки данных пользователя при событии submit
function getUserInfo(e){
    // Отменили событие submit
    e.preventDefault();
    
    // Разбираем элементе e на составляющие
    console.log(e.srcElement)
    console.log(e.srcElement.userName.value)
    console.log(e.srcElement.userAge.value)
    
    let userName = e.srcElement.userName.value;
    let userAge = e.srcElement.userAge.value;

    // Взять информацию у пользователя и вывести окно с ссобщение
    // Привет, %USERNAME%, тебе %AGE% лет!
    alert("Привет, "+ userName + " , тебе " + userAge + " лет!")

    // Альтернативное решение
    // alert("Привет, "+ e.srcElement.userName.value + " , тебе " + e.srcElement.userAge.value + " лет!")


}

// Добавляем обработчик события submit для элемента #userInfo
userInfo.addEventListener('submit', getUserInfo)
