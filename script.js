/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function () {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            
            while (this.genres[i] === null || this.genres[i] == "") {
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }
};

function showMyDB(obj) {
    if (obj.privat === false) {
        console.log(true);
    }
}

//showMyDB(personalMovieDB);
//personalMovieDB.toggleVisibleMyDB();
//showMyDB(personalMovieDB);
//personalMovieDB.toggleVisibleMyDB();
//showMyDB(personalMovieDB);
//personalMovieDB.toggleVisibleMyDB();




personalMovieDB.writeYourGenres();

showMyDB(personalMovieDB);


personalMovieDB.rememberMyFilms();


personalMovieDB.detectPersonalLevel();

personalMovieDB.genres.forEach(function(value, index){
    console.log("Любимый жанр # " + (index + 1) + " - это " + value);
});

console.log(personalMovieDB);
