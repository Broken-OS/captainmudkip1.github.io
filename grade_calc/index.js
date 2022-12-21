function CALC() {
    e = document.getElementById("earned").value;
    t = document.getElementById("total").value;
    o = document.getElementById("outputText");
    msg = null;
    if (e == "") { o.innerHTML = ""; } else if (t == "") { o.innerHTML = ""; } else {
        x = ((e * 100) / t);
        if (x >= 0 && x <= 59.49) {
            msg = "E";
        } else if (x >= 59.50 && x <= 69.49) {
            msg = "D";
        } else if (x >= 69.50 && x <= 79.49) {
            msg = "C";
        } else if (x >= 79.50 && x <= 89.49) {
            msg = "B";
        } else if (x >= 89.50) {
            msg = "A";
        } else {
            msg = "ERR"
        }
        o.innerHTML = "Your grade was: <b>" + msg + "</b> (" + x + "%)";
    }
}