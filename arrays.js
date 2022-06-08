// // Ejercicio 1- Declarar arreglos de productos
// // Ejemplo: guitarra, 120$, 54 stock, verde, acustica; guitarra, 150, 10, negra, electrica

// let PF = ["Proof", 3000, 50, "1ra Edicion", "Platino"] //Album Proof
// let BTT = ["Butter", 1500, 15, "3ra Edicion", "Normal"] //Album Butter
// let MOTS = ["Map of te Soul", 2500, 5, "Version 3", "Azul"] //Album Map of the Soul

// // Ejercicio 2 :
// // Iterar en un ciclo "for" el arreglo 1 y en otro "for" el arreglo 3
// for (let i=0; i < PF.length; i++){
//     console.log(PF[i]);
// }
// for (let i=0; i < BTT.length; i++){
//     console.log(BTT[i]);
// }

// // Ejercicio 3:
// // Crear un arreglo que contenga los 3 arreglos anteriores

// let albumes = [PF, BTT, MOTS]

// for (let i=0; i < albumes.length; i++){
//     console.log(albumes[i]);
// }

// for (let i=0; i< albumes.length; i++){
//     for(let j = 0; j< albumes[i].length; j++){
//         console.log(albumes[i][j]);
//     }
// }

let RM = ["Namjoon", "Kim", "RM", "120994", 56181034]
let SUGA = ["Yoongi", "Min", "AgustD", "090393", 55490935]
let JIN = ["Seok Jin", "Kim", "Jin", "041292", 56225650]
let Jhope = ["JHo-Seok", "Jung", "Hobi", "180294", 37077196]
let JIMIN = ["Jimin", "Park", "JM", "131095", 81245656]
let V = ["Taehyung", "Kim", "V", "301295", 812455547]
let JK = ["Jungkook", "Jeon", "JK", "010997", 233456788]

let usuarios = [RM, SUGA, JIN, Jhope, JIMIN, V, JK];

function login() {
    let usuario = document.getElementById ("user").value;
    let password = document.getElementById("password").value;

    for(let i=0; i < usuarios.length; i++) {
        if (usuario === usuarios[i][2]) {
            console.log("Biemvenido " + usuario[i][2]);
        }
    }
    
}





