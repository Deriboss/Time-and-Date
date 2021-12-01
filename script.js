function timeshoow() {
    var tim = new Date();
    document.getElementById('displaytime').innerHTML = tim;
    var timee = setInterval(timeshoow, 1000);
}

timeshoow();

function timeshow() {
    document.getElementById('displaytime').style.display = "block";
}

function timehide() {
    document.getElementById('displaytime').style.display = "none";
}