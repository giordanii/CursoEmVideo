function math(){
    var nb1 = document.getElementById('nb1');
    var nb2 = document.getElementById('nb2');
    var nb3 = document.getElementById('nb3');
    var res = document.getElementById('res');
    var numberRes = 0

    if (nb1.value.length == '' || nb2.value.length == '' || nb3.value.length == '') {
        window.alert('Please enter a number on every field.')
        res.innerHTML = `Counting not possible`
    } else {
        res.innerHTML = 'Counting: '
        var i = Number(nb1.value);
        var e = Number(nb2.value);
        var by = Number(nb3.value);

        if (i == e) { // SAME VALUE
            res.innerHTML = `Error. Your starting number <span>${i}</span> is the same as your ending number <span>${e}</span>.`
        } else if (i < e) { //ASCENDING
            for(var c = i; c <= e; c += by){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else { 
            for(var c = i; e <= c; c -= by){ //DESCENDING
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`

        }
    }
}