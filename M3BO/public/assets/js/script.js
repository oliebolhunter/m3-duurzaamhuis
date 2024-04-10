//varibles
const clock = document.getElementById('clock');
const chartKwh = document.getElementById('chartKwh').getContext('2d');
const chartGas = document.getElementById('chartGas').getContext('2d');
const chartWatt = document.getElementById('chartWatt').getContext('2d');
const settings = document.getElementById('settings');

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
//Calls charts
//Kwh Chart
chartmaker(chartKwh,'Stroom verbruik vandaag',50,0);
//Gas Chart
chartmaker(chartGas,'Gas verbruik vandaag',57,1);
chartmaker(chartWatt,'Stroom verbruik vandaag',50,2);

//instwllleingen
