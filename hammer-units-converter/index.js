var huPerMeter = 39.6278;

function unitChanged(){
    var unit = document.getElementById("unit-select").value;

    if (unit == "tf2"){
        huPerMeter = 52.52100840336134
    } 
    else if (unit == "cs2"){
        huPerMeter = 39.6278
    }
}

function metersUpdated(){
    var meters = document.getElementById("meters").value;
    var hu = meters * huPerMeter;
    document.getElementById("hammers").value = hu;
}

function hammersUpdated(){
    var hammers = document.getElementById("hammers").value;
    var meters = hammers / huPerMeter;
    document.getElementById("meters").value = meters;
}
