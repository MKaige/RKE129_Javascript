const myButton = document.querySelector('button'); /*paneb vahemälus koha valmis nupule*/
const myBox = document.querySelector('.box'); /*paneb vahemälus koha valmis box klassile*/
const colors = ["red", "green", "blue", "yellow"]; /* massiivi loomine*/

myButton.addEventListener('click', changeColor); /*sündmuse kuulaja ehk ootab klikki ja siis käivitab tegevuse */

function changeColor(){

    let randomIndex = Math.floor(Math.random() * colors.length) /* genereering juhusliku numbri värvi indeksi*/
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];

}