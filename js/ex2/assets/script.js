function verify() {
    var date = new Date();
    var year = date.getFullYear();
    var fyear = document.getElementById('txtyear');
    var res = document.querySelector('div#res');

    if (fyear.value.length == 0 || fyear.value > year){
        window.alert('Check data provided');
    } else {
        var fsex = document.getElementsByName('radsex');
        var age = year - Number(fyear.value);
        var gender = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo');
        if (fsex [0].checked){
            gender = 'Male'
            if (age >= 0 && age < 10){
                //kid
                img.setAttribute('src', './assets/images/kid-boy.jpg')
            } else if (age < 21){
                //teenager
                img.setAttribute('src', './assets/images/boy.jpg')
            } else if (age < 50){
                //adult
                img.setAttribute('src', './assets/images/man.jpg')
            } else if (age < 100){
                //old man
                img.setAttribute('src', './assets/images/old-man.jpg')
            } else {
                res.innerHTML = `R U serious?`
            }
        } else if (fsex [1].checked){
            gender = 'Female'
            if (age >= 0 && age < 10){
                //kid
                img.setAttribute('src', './assets/images/kid-girl.jpg')
            } else if (age < 21){
                //teenager
                img.setAttribute('src', './assets/images/girl.jpg')
            } else if (age < 50){
                //adult
                img.setAttribute('src', './assets/images/woman.jpg')
            } else if (age < 100){
                //old woman
                img.setAttribute('src', './assets/images/old-woman.jpg')
            } else {
                res.innerHTML = `R U serious?`
            }
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `${gender} detected with ${age} years old`;
    res.appendChild(img);
}