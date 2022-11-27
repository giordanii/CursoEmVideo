var areaDiv = document.getElementById('area');
areaDiv.addEventListener('mouseout', out);
areaDiv.addEventListener('mousemove', move);
areaDiv.addEventListener('click', click);

function out() {
    areaDiv.innerText = 'You have just left the area';
    areaDiv.style.background = 'green';
}
function move() {
    areaDiv.innerText = 'You moving around the area';
    areaDiv.style.background = 'purple';
}
function click() {
    areaDiv.innerText = 'You clicked';
    areaDiv.style.background = 'red';
}