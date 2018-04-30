var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
	return document.getElementById(id);
};

window.onload = function () {
    $("show_quarter").onclick = quarterlyCalculations;
    $("show_region").onclick = regionCalculation;
    $("show_total").onclick = finalTotal;
};

function quarterlyCalculations() {
    var output;
    var q1 = 0;
    var q2 = 0;
    var q3 = 0;
    var q4 = 0;
    var q = [q1, q2, q3, q4];
    for (var i = 0; i < q.length; i++) {
        q[i] = r1[i] + r2[i] + r3[i] + r4[i] + r5[i];
    }
    output = "Sales by Quarter"
        + " \nQ1: " + q[0]
        + " \nQ2: " + q[1]
        + " \nQ3: " + q[2]
        + " \nQ4: " + q[3];

    $("results").value = output;

}

function regionCalculation() {
    var output;
    var reg1 = 0;
    var reg2 = 0;
    var reg3 = 0;
    var reg4 = 0;
    var reg5 = 0;
    for (var i = 0; i < r1.length; i++) {
        reg1 = r1[i] + reg1;
        reg2 = r2[i] + reg2;
        reg3 = r3[i] + reg3;
        reg4 = r4[i] + reg4;
        reg5 = r5[i] + reg5;
    }
    output = "Sales by region"
        + " \nRegion 1: " + reg1
        + " \nRegion 2: " + reg2
        + " \nRegion 3: " + reg3
        + " \nRegion 4: " + reg4
        + " \nRegion 5: " + reg5;

    $("results").value = output;
}

function finalTotal() {
    var output;
    var rgn1 = 0;
    var rgn2 = 0;
    var rgn3 = 0;
    var rgn4 = 0;
    var rgn5 = 0;
    for (var i = 0; i < r1.length; i++) {
        rgn1 = r1[i] + rgn1;
        rgn2 = r2[i] + rgn2;
        rgn3 = r3[i] + rgn3;
        rgn4 = r4[i] + rgn4;
        rgn5 = r5[i] + rgn5;
    }
    var value = rgn1 + rgn2 + rgn3 + rgn4 + rgn5;
    output = "Total Sales: " + value;
    $("results").value = output;
}