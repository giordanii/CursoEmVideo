function math(){
    var num = document.getElementById('nb1')
    var tab = document.getElementById('seltab')
    var i = Number(nb1.value)

    if(num.value.length == ''){
        window.alert('Please enter a number.')
    } else {
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }  
    }
}