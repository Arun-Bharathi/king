function onResult() {
    var a = parseInt(document.getElementById("value1").value);
    var b = parseInt(document.getElementById("value2").value);
    var result = a + b;
    document.getElementById("results").innerHTML = result;
}


function onResults() {
    var c = parseInt(document.getElementById("v1").value);
    var d = parseInt(document.getElementById("v2").value);
    var value = document.getElementById("action").value;

    if (value === "+") {
        document.getElementById("resultss").innerHTML = c + d;
    }
    if (value === "-") {
        document.getElementById("resultss").innerHTML = c - d;
    }
    if (value === "*") {
        document.getElementById("resultss").innerHTML = c * d;
    }
    if (value === "/") {
        document.getElementById("resultss").innerHTML = c / d;
    }
}

function onHandleInput() {
    var value = document.getElementById("action").value;
    document.getElementById("operator").innerHTML = value;
}

function onHandle() {
    var values = document.getElementById("fruit").value;
    document.getElementById("fruits").innerHTML = "you select fruit name is :" + values;
}

function onHandleInputs() {
    var c = parseInt(document.getElementById("v3").value);
    var d = parseInt(document.getElementById("v4").value);

    var value = document.getElementById("actions").value;
    document.getElementById("operators").innerHTML = value;

    if (value === "+") {
        document.getElementById("result").innerHTML = c + d;
    }
    if (value === "-") {
        document.getElementById("result").innerHTML = c - d;
    }
    if (value === "*") {
        document.getElementById("result").innerHTML = c * d;
    }
    if (value === "/") {
        document.getElementById("result").innerHTML = c / d;
    }
}