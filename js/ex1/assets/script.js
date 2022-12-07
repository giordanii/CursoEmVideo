function load() {
    var msg = window.document.getElementById('msg');
    var data = new Date();
    var hour = data.getHours();
    var h1 = document.getElementById('title');
    msg.innerHTML = `Now it is ${hour} hours.`
    if (hour >= 0 && hour < 12) {
        //GOOD MORNING
        photo.innerHTML = '<img src="./assets/morning.jpg" alt = "time of the day">'
        document.body.style.background = 'rgb(255, 186, 124)'
    } else if (hour >= 12 && hour < 18) {
        //GOOD AFTERNOON
        photo.innerHTML = '<img src = "./assets/afternoon.jpg" alt = "time of the day">'
        document.body.style.background = 'rgb(1, 123, 192)'
    } else {
        //GOOD NIGHT
        photo.innerHTML = '<img src = "./assets/night.jpg" alt = "time of the day">'
        document.body.style.background = 'rgb(25, 58, 57)'
        h1.style.color = 'white'
    }
}
