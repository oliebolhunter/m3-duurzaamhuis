//varibles
const clock = document.getElementById('clock');
const chartKwh = document.getElementById('chartKwh').getContext('2d');
const chartGas = document.getElementById('chartGas').getContext('2d');
const chartWatt = document.getElementById('chartWatt').getContext('2d');
const settings = document.getElementById('settings');
const stroomjaar = document.getElementById('stroomjaar');


// clockfunction
function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;
    clock.innerText = time;
    clock.textContent = time;
    //ammout of time to refresh is now at 30 seconds
    setTimeout(showTime, 30000);
}
showTime();

//Made a chartmaker 
function chartmaker(chartName,chartUsage,chartData,refreshTime,chartId){
    let chart = new Chart(chartName,{
        type:'bar',
            data:{
            labels:[chartUsage],
            datasets:[{data:[chartData]}]
                 },
            options:{},
            id: chartId
        });
        setTimeout(chartmaker(chartName,chartUsage,chartData),refreshTime);
}
let buttonJaarClick = true;
const jaarButton = document.getElementById('Jaarbutton');
jaarButton.onclick = function(){
   if (buttonJaarClick === true){
    stroomjaar.style.display = 'flex';
    buttonJaarClick = false;
   }
}

const buttonjaar = document.getElementById('backbutton');
buttonjaar.onclick = function(){
    if (buttonJaarClick === false){
        stroomjaar.style.display = 'none';
        buttonJaarClick = true;
    } 
}

const settingscreen = document.getElementById('settingsDisplay');
let settingsbuttonClick = true
const back2 = document.getElementById('backbuttoninst');
back2.onclick = function() {
    if (settingsbuttonClick === true){
        settingsDisplay.style.display = 'none';
        back2 = false;
        console.log('klcik');
    }
}
