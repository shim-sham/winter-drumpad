const soundMap = {
    "open-hh": "sounds/open-hh.wav",
    "jingle": "sounds/jingle.wav",
    "chime": "sounds/chime.mp3",
    "ride": "sounds/ride.wav",
    "closed-hh": "sounds/closed-hh.wav",
    "shaker": "sounds/shaker.wav",
    "tom": "sounds/high-tom.wav",
    "snare": "sounds/snare.wav",
    "cowbell": "sounds/cowbell.wav",
    "stick-hit": "sounds/stick-hit.wav",
    "kick": "sounds/kick.wav",
    "church-bell": "sounds/church-bell.mp3"
};
function play(link) {
    let audio = new Audio(link);
    audio.load();
    audio.play();
    createSnowflake()
}
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const soundLink = soundMap[box.id]; 
        if (soundLink) {
            play(soundLink); 
        }
    });
});
const keyMap = {
    "r": "open-hh",
    "t": "jingle",
    "y": "chime",
    "u": "ride",
    "f": "closed-hh",
    "g": "shaker",
    "h": "tom",
    "j": "snare",
    "c": "cowbell",
    "v": "stick-hit",
    "b": "kick",
    "n": "church-bell"
};  
const keyPress = (event) => {
    const boxId = keyMap[event.key.toLowerCase()]; // to catch capslock or shift
    if (boxId) {
        const box = document.getElementById(boxId);
        if (box) {
            const soundLink = soundMap[box.id];
            if (soundLink) {
                if (event.type === "keydown") {
                    play(soundLink);
                    box.classList.add("active");
                } else if (event.type === "keyup") {
                    box.classList.remove("active");
                }
            }
        }
    }
};
document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyPress);
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    snowflake.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 2000);
}