const NOTES_NUMBER = 15;
            
const AUDIO_FILES = [
new Audio("piano/notes/do.mp3"),
new Audio("piano/notes/re.mp3"),
new Audio("piano/notes/mi.mp3"),
new Audio("piano/notes/fa.mp3"),
new Audio("piano/notes/sol.mp3"),
new Audio("piano/notes/la.mp3"),
new Audio("piano/notes/si.mp3"),
new Audio("piano/notes/do2.mp3"),
new Audio("piano/notes/re2.mp3"),
new Audio("piano/notes/mi2.mp3"),
new Audio("piano/notes/fa2.mp3"),
new Audio("piano/notes/sol2.mp3"),
new Audio("piano/notes/la2.mp3"),
new Audio("piano/notes/si2.mp3"),
new Audio("piano/notes/do3.mp3"),
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
    
    // mouse events
    notes[i].addEventListener("mousedown", () =>{playNote(i);});
    notes[i].addEventListener("mouseup", () =>{stopNote(i);});

    // keyboard events
    window.addEventListener("keydown", () =>{
        if(event.key == KEYS[i])
            playNote(i);});
    window.addEventListener("keyup", () =>{
        if(event.key == KEYS[i])
            stopNote(i);});
    
    // touch events
    notes[i].addEventListener("touchstart", () =>{playNote(i);});
    notes[i].addEventListener("touchend", () =>{stopNote(i);});
}
