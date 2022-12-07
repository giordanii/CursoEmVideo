function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    //var hour = data.getHours();
    var hour = 18
    msg.innerHTML = `Now it is ${hour} hours.`
    if (hour >= 0 && hour < 12) {
        //GOOD MORNING
        img.innerHTML = '<img src="./assets/morning.jpg">'
    } else if (hour >= 12 && hour < 18) {
        //GOOD AFTERNOON
        img.innerHTML = '<img src = "./assets/afternoon.jpg">'
    } else {
        //GOOD NIGHT
        img.innerHTML = '<img src = "./assets/night.jpg">'
    }
}
