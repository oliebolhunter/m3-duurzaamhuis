//varibles
const clock = document.getElementById('clock');
const chartKwh = document.getElementById('chartKwh').getContext('2d');
const chartGas = document.getElementById('chartGas').getContext('2d');
const chartWatt = document.getElementById('chartWatt').getContext('2d');

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
                labels:['Watt gebruik Nu'],
                datasets:[{
                    label: 'Watt',
                    data:[189],
                }]
                     },
                     options: {
                        responsive: true,
                        maintainAspectRatio: false

                    },
            });