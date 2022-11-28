function speedometer
var vel = document.getElementById('speed')
var res = document.querySelector('div#res')
var vel1 = Number(vel.value)

res.innerHTML = `<p>Your current speed is <strong>${vel}</strong></p>`
if (vel > 60) {
    res.innerHTML += `<p>You will receive a ticket! You are driving faster than you should.</p>`
} else {
    res.innerHTML += `<p>Never drink and drive! Always wear seatbelt.</p>
}