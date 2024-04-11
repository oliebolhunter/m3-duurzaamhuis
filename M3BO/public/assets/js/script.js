//varibles
const clock = document.getElementById('clock');
const chartKwh = document.getElementById('chartKwh').getContext('2d');
const chartGas = document.getElementById('chartGas').getContext('2d');
const chartWatt = document.getElementById('chartWatt').getContext('2d');
const settings = document.getElementById('settings');
const stroomJaarMenu = document.getElementById('stroom-JaarMenu');
const gasJaarMenu = document.getElementById('gas-jaarMenu');
const wattJaarMenu = document.getElementById('watt-jaarMenu');



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

    let chart = new Chart(chartKwh,{
        type:'bar',
            data:{
            labels:['Stroom verbruik Vandaag'],
            datasets:[{
                label: 'Stroom',
                data:[1884],}]
                 },
            options:{
                responsive: true,
                maintainAspectRatio: false
            },
        });
    let chart2 = new Chart(chartGas,{
        type:'bar',
            data:{
            labels:['Gas verbruik Vandaag'],
            datasets:[{
                label: 'Gas',
                data:[1884],}]
                 },
            options:{
                responsive: true,
                maintainAspectRatio: false
            },
        });
        let chart3 = new Chart(chartWatt,{
            type:'bar',
                data:{
                labels:['Gas verbruik Vandaag'],
                datasets:[{
                    label: 'Gas',
                    data:[1884],}]
                     },
                options:{
                    responsive: true,
                    maintainAspectRatio: false
                },
            });


//expenses power yearly menu  
let kwhJaarClick = true;
const kwhJaarButton = document.getElementById('js--uitgavenKWH');
kwhJaarButton.onclick = function(){
   if (kwhJaarClick === true){
    stroomJaarMenu.style.display = 'flex';
    kwhJaarClick = false;
   }
}
//backbutton power yearly menu  
const kwhBackButton = document.getElementById('backbutton');
kwhBackButton.onclick = function(){
    if (kwhJaarClick === false){
        stroomJaarMenu.style.display = 'none';
        kwhJaarClick = true;
    } 
}
//expenses gas yearly menu  
let gasJaarClick = true;
const gasJaarButton = document.getElementById('js--uitgavenGas');
gasJaarButton.onclick = function(){
   if (gasJaarClick === true){
    gasJaarMenu.style.display = 'flex';
    gasJaarClick = false;
   }
}

//backbutton gas yearly menu  
const gasBackButton = document.getElementById('gas-BackButton');
gasBackButton.onclick = function(){
    if (gasJaarClick === false){
        gasJaarMenu.style.display = 'none';
        gasJaarClick = true;
    } 
}

//expenses wattage yearly menu  
let wattJaarClick = true;
const wattJaarButton = document.getElementById('js--wattNu');
wattJaarButton.onclick = function(){
   if (wattJaarClick === true){
    wattJaarMenu.style.display = 'flex';
    wattJaarClick = false;
   }
}

//backbutton wattage yearly menu  
const wattBackButton = document.getElementById('watt-backButton');
wattBackButton.onclick = function(){
    if (wattJaarClick === false){
        wattJaarMenu.style.display = 'none';
        wattJaarClick = true;
    } 
}




let settingsbuttonClick = false
const instelklick = document.getElementById('js--instellingen')
instelklick.onclick = function() {
    if (settingsbuttonClick === true){
        settingsDisplay.style.display = 'flex';
        settingsbuttonClick = false;
       }
}




const settingscreen = document.getElementById('settingsDisplay');
const back2 = document.getElementById('backbuttoninst');
back2.onclick = function() {
    if (settingsbuttonClick === false){
        settingsDisplay.style.display = 'none';
        settingsbuttonClick = true;
    }
}


