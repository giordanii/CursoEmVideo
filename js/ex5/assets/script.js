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
    if(isNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} was added.`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Number not in range or already added.')
    }
    num.value = ''
    num.focus()
}

function analyze() {
    if (values.length == 0) {
        window.alert('No numbers were added. Not possible to analyze.')
    } else {
        let tot = values.length
        let high = values[0]
        let low = values[0]
        let sum = 0
        for (let pos in values) {
            sum += values[pos]
            if (values[pos] > high)
            high = values[pos]
            if (values[pos] < low)
            low = values[pos]
        }
            res.innerHTML = ''
            res.innerHTML += `<p>Overall, we have ${tot} numbers registered.</p>`
            res.innerHTML += `<p>The highest number registered is ${high}.</p>`
            res.innerHTML += `<p>The lowest number registered is ${low}.</p>`
            res.innerHTML += `<p>Adding all numbers registered the sum is ${sum}.</p>`
            res.innerHTML += `<p>The average from registered numbers is ${Math.floor(sum / values.length)}.</p>`
        }
}