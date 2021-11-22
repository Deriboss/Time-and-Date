function timeshow() {
    var tim = new Date();
    document.getElementById('displaytime').innerHTML = tim;
    var timee = setInterval(timeshow, 1000);
}

function timehide() {
    document.getElementById('displaytime').remove();
    location.reload();
}