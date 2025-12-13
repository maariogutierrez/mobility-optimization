console.log("battery.js cargado.");

var batteryLevels = window.BATTERY_LEVELS;
var step = 0;

function updateBattery() {
    if (step >= batteryLevels.length) return;

    let pct = batteryLevels[step];

    let fill = document.getElementById("battery-fill");
    let text = document.getElementById("battery-text");

    fill.style.width = pct + "%";

    if (pct > 60) fill.style.background = "green";
    else if (pct > 30) fill.style.background = "orange";
    else if (pct > 0) fill.style.background = "red";
    else fill.style.background = "black";

    text.innerHTML = pct.toFixed(1) + "%";

    step++;
}

setInterval(updateBattery, 5000);
