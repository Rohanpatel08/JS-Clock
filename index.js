let d
let time
let date
const option = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
setInterval(() => {
    d = new Date()
    date = d.toLocaleDateString(undefined, option)
    time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    document.getElementById('time').innerHTML = time + ' On ' + date
}, 1000);