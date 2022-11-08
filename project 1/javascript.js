"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false

    
};

const a = prompt("Один из последних просмотреных фильмов?",""),
      b = prompt("На солько вы оцениваете их?",""),
      c = prompt("Один из последних просмотреных фильмов?",""),
      d = prompt("На солько вы оцениваете их?","");

     
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);