// DOM element
const clockElement = document.getElementById("clock");


function updateClock(){
    const now = new Date();
    const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;
}


setInterval(updateClock, 1000);

updateClock();