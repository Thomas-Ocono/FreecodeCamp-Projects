const display = document.getElementById("display");
const buttonsArray = document.getElementsByClassName("drum-pad");
const soundsArray = [
  "Heater-1",
  "Heater-2",
  "Heater-3",
  "Heater-4",
  "Clap",
  "Open-HH",
  "Kick-n-Hat",
  "Kick",
  "Closed-HH",
];
const audioArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", () => {
    display.innerText = "Sound: " + soundsArray[i];
    document.getElementById(audioArray[i]).play();
  });
}
document.addEventListener("keydown", () => {
  for (let i = 0; i < audioArray.length; i++) {
    console.log(event.key);
    if (
      event.key == audioArray[i] ||
      event.key == audioArray[i].toLowerCase()
    ) {
      display.innerText = "Sound: " + soundsArray[i];
      document.getElementById(audioArray[i]).play();
    }
  }
});
