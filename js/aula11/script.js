function speedometer() {
var vel = document.getElementById('speed')
var res = document.querySelector('div#res')
var vel1 = Number(vel.value)

res.innerHTML = `<p>Your current speed is <strong>${vel1}</strong> km/h.</p>`
if (vel1 > 60) {
    res.innerHTML += `<p>You <strong>RECEIVED</strong> a ticket! You are driving faster than you should.</p>`
}
    res.innerHTML += `<p>Never drink and drive! Always wear seatbelt.</p>`
}