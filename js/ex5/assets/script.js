var num = document.getElementById('nb1')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        values.push(Number(num.value))
    } else {
        window.alert('Number not in range or already added.')
    }
}

function analyze(){

    res.innerHTML = `Overall, we have ${tab.length} numbers registered.`
    res.innerHTML = `The highest number registered is ${tab}.`
    res.innerHTML = `The lowest number registered is ${tab}.`
    res.innerHTML = `Adding all numbers registered the sum is ${tab}.`
    res.innerHTML = `The average from registered number is ${tab}.`
}