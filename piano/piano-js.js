const NOTES_NUMBER = 15;
            
const AUDIO_FILES = [
new Audio("notes/do.mp3"),
new Audio("notes/re.mp3"),
new Audio("notes/mi.mp3"),
new Audio("notes/fa.mp3"),
new Audio("notes/sol.mp3"),
new Audio("notes/la.mp3"),
new Audio("notes/si.mp3"),
new Audio("notes/do2.mp3"),
new Audio("notes/re2.mp3"),
new Audio("notes/mi2.mp3"),
new Audio("notes/fa2.mp3"),
new Audio("notes/sol2.mp3"),
new Audio("notes/la2.mp3"),
new Audio("notes/si2.mp3"),
new Audio("notes/do3.mp3"),
];

function playNote(i){
    AUDIO_FILES[i].play();
    notes[i].style.background = "#a3a3a3";
}
function stopNote(i){
    AUDIO_FILES[i].pause();
    AUDIO_FILES[i].currentTime = 0;
    notes[i].style.background = "white";
}

const KEYS = ['a','s', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v']

var notes = [];

for(let i = 0; i < NOTES_NUMBER; i++){

    notes[i] = document.getElementById("note" + (i+1));

    notes[i].addEventListener("mousedown", () =>{playNote(i);});
    notes[i].addEventListener("mouseup", () =>{stopNote(i);});

    window.addEventListener("keydown", () =>{
        if(event.key == KEYS[i])
            playNote(i);});
    window.addEventListener("keyup", () =>{
        if(event.key == KEYS[i])
            stopNote(i);});
}
