"use strict";



// if(pov > 180){
//     console.log( "Error");
// } else if(pov < 180){
//     console.log("Okey");
// } else {console.log("fauls");
// }

//     (pov === 173) ? console.log( "fauls") : console.log("Okey");

const pov = 173;

switch (pov) {
    case 100:
        console.log("Неверно");
        break;
    case 190:
        console.log("Всёровно не верно");
        break;
    case 173:
        console.log("Попав");
        break;
    default:
        console.log("Спробуй ще!");       
}