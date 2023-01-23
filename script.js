/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */


'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function showMyDB() {
    if (personalMovieDB.privat == false) console.log(personalMovieDB);
}

showMyDB();

function rememberMyFilms() {
    first: for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', 'Человек-гандон');
        if (lastFilm === null || lastFilm === '' || lastFilm.length > 50) {
            i--;
            continue first;
        }
        const rateFilm = prompt('На сколько оцените его?', '5');
        if (rateFilm === null || rateFilm === '' || rateFilm.length > 50) {
            i--;
            continue first;
        }
        personalMovieDB.movies[lastFilm] = rateFilm;
    }
}

rememberMyFilms();


function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres () {
    let answer;
    first: for(let i = 0; i < 3; i ++){
        answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        console.log(typeof(answer));
        if (answer == '' || typeof(answer) !== 'string' || answer <= 3){
            i--
            continue first;
        }else {
            personalMovieDB.genres[i] = answer;
        }
    }
}
writeYourGenres();
console.log(personalMovieDB);
// let lastFilm;
// let rateFilm;
// do {
//     lastFilm = prompt('Один из последних просмотренных фильмов?', 'Человек-гандон');
//     rateFilm = prompt('На сколько оцените его?', '5');

// }
// while(lastFilm == null || lastFilm == '' || lastFilm.length > 50 &&  )
// personalMovieDB.movies[lastFilm] = rateFilm;
// console.log(personalMovieDB.movies);



