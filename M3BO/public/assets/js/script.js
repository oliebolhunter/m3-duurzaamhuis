//varibles
const chartKwh = document.getElementById('chart--kwh');

//load chart file
let chartScript = document.createElement("script");
chartScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.min.js');
document.body.appendChild(chartScript);
//check if file is loaded
chartScript.addEventListener("load", () => {
    console.log("File loaded")
});

chartScript.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
});
// cloclfunction
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();