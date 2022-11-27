function math() {
    var tn1 = document.getElementById('number1')
    var tn2 = document.getElementById('number2')
    var show = document.getElementById('result')

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var r = n1 + n2

    show.innerHTML = `The result between ${n1} and ${n2} is <strong>${r}</strong>.`
}