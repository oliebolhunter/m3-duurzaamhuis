
//varibles
const chartKwh = document.getElementById('chartKwh').getContext('2d');
const chartGas = document.getElementById('chartGas').getContext('2d');
const chartWatt = document.getElementById('chartWatt').getContext('2d');
const settings = document.getElementById('settings');
const stroomJaarMenu = document.getElementById('stroom-JaarMenu');
const gasJaarMenu = document.getElementById('gas-jaarMenu');
const wattJaarMenu = document.getElementById('watt-jaarMenu');
const jaarcanvas = document.getElementById('jaarcanvas');
const gasjaarCanvas = document.getElementById('gas-jaarCanvas');
const wattJaarButton = document.getElementById('js--wattNu');
const wattJaar = document.getElementById('watt-jaarCanvas');

// clockfunction
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

    let chart = new Chart(chartKwh,{
        type:'bar',
            data:{
            labels:['Stroom verbruik Vandaag'],
            datasets:[{
                label: 'Stroom',
                data:[7.4],}]
                 },
            options:{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        max: 10,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            },
        });
    let chart2 = new Chart(chartGas,{
        type:'bar',
            data:{
            labels:['Gas verbruik Vandaag'],
            datasets:[{
                label: 'Gas',
                data:[4.1],}]
                 },
                 
            options:{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        max: 10,
                        ticks: {
                            
                            stepSize: 2
                        }
                    }
                }
            },
        });
        let chart3 = new Chart(chartWatt,{
            type:'bar',
                data:{
                labels:['Watt verbruik Nu'],
                datasets:[{
                    label: 'Watt',
                    data:[0.2],}]
                     },
                options:{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 2.0,
                            ticks: {
                                
                                stepSize: 0.5
                            }
                        }
                    }
                },
            });


            let chart4 = new Chart(jaarcanvas,{
                type:'bar',
                    data: {
                        labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                        datasets:[{
                            label: 'KWH',
                            data:[3247,1879,4502,2756,3910,1034,4987,2198,3671,1423,489,2685],}]
                    },
                });

                let chart5 = new Chart(gasjaarCanvas,{
                    type:'bar',
                        data: {
                            labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                            datasets:[{
                                label: 'kubieke meter',
                                data:[1456,2730,301,1789,1245,2874,572,2063,1048,2997,1321,891],}]
                        },
                    });

                let chart6 = new Chart(wattJaar,{
                    type:'bar',
                        data: {
                            labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
                            datasets:[{
                                label: 'KWH',
                                data:[5.2, 9.6, 3.5, 7.2, 8.3, 4.9, 8.8 ],}]
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




let settingsbuttonClick = true
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

const weer = document.getElementById("js--weer");
fetch("https://api.weatherapi.com/v1/forecast.json?key=831aac22332149b38ed114733241804&q=Amsterdam&days=7&aqi=no&alerts=no&lang=nl")
.then(function(response){
    return response.json();
})
.then(function(realData){
    for (const { date, day } of realData.forecast.forecastday) {
        const div = document.createElement("div");
        div.className = "weather-card";
        weer.appendChild(div);

        const img = document.createElement("img");
        img.src = day.condition.icon;
        div.appendChild(img);
    
        const p = document.createElement("p");
        p.className = "weather-temp";
        p.innerText = date + "\n\nMin: " + day.mintemp_c + " °C\nMax: " + day.maxtemp_c + " °C";
        div.appendChild(p);
    }
});