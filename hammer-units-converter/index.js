var huPerMeter = 39.6278;

var gridSize = 64;

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
    var scale = hu / gridSize;
    document.getElementById("hammers").value = hu;
    document.getElementById("scale").value = scale;
}

function hammersUpdated(){
    var hammers = document.getElementById("hammers").value;
    var meters = hammers / huPerMeter;
    var scale = hammers / gridSize;
    document.getElementById("meters").value = meters;
    document.getElementById("scale").value = scale;
}

function gridChanged(){
    var grid = document.getElementById("grid-select").value;
    gridSize = grid;
}
