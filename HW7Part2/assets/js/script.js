/**
 * Created by tisaconundrum on 4/30/2018.
 */

var name = "Prof Usha Jagannathan";
document.write("<h2> Hi everyone! This message is from " + name + " - Follow the instructions below to work on your Week 7 HW assignment!</h2>");
function myfunction() {
    alert("HELLO!")
}
function myotherfunction() {
    alert("Thank you for finishing the assignment, GOODBYE!")
}
function close_window() {
    if (confirm("Close Window?")) {
        close();
    }
}
function total(a, b) {
    answer = a + b;
    document.write("Our class student team consists of " + a + " girls and " + b + " lads: ");

    return answer // you can also write it without using another variable as answer like this: return a+b
}

document.write("We are a total of " + total(12, 54) + " students in this IFT301 online course! :)");
document.write("<br /> <p />");

// Few examples on functions shown above...
// Now, write a javascript function to find Netpay and display it on your browser to show the result. (25 POINTS)
// GROSSPAY is your (emoloyee's) wages BEFORE any deductions that include TAXES and DEDUCTIONS withheld
// The variables are the ones shown in caps above. Calcuate the Netpay using the 3 variables.
// Accept the variables from the user and do not manually enter values as shown above - You may use window prompts or a form to get the user input.

// Written a javascript code to show how to display a clock on your website
// NOTE: Your job is to display the clock in our sundevil colors with gold background color and maroon text color.
// Also, you should display the clock in the far-right corner.
// Refer to Chapter 15 in our text to recall the layout positions

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = "AM";

    //to add AM or PM after time
    // Add IF statement using the above declared variables to display your clock in AM and PM

    if (hr > 11) ap = "PM";
    if (hr > 12) hr = hr - 12;
    if (hr == 0) hr = 12;

    //to add a zero in front of numbers<10

    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById('clock').innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    t = setTimeout('startTime()', 500)
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}
// Added window prompt to call the onload event to display the time when page loads
window.onload = startTime;

//photos: will hold the filename of each image to be displayed
//photoindex: is the index of the photo, within the photos[] array, that is currently displayed

var photos = []; // better to use an Array literal
var photoindex = 0;

//populate the photos[] array
photos[0] = "../HW7Part2/assets/img/IT.jpg";
photos[1] = "../HW7Part2/assets/img/WhyIT1.jpg";
photos[2] = "../HW7Part2/assets/img/WhyIT2.jpg";
photos[3] = "../HW7Part2/assets/img/WhyIT3.jpg";
photos[4] = "../HW7Part2/assets/img/WhyIT4.jpg";
photos[5] = "../HW7Part2/assets/img/WhyIT4a.jpg";
photos[6] = "../HW7Part2/assets/img/WhyIT5.jpg";
photos[7] = "../HW7Part2/assets/img/weloveweb.png";
photos[8] = "../HW7Part2/assets/img/WhyIT6.jpg";
photos[9] = "../HW7Part2/assets/img/WhyIT8.jpg";
photos[10] = "../HW7Part2/assets/img/WhyIT7.jpg";
photos[11] = "../HW7Part2/assets/img/ITHolidayImage.gif";

//move backward, by one, within the photos array
//check to be sure that you are not moving outside of the array bounds
function backward() {
    if (photoindex > 0) {
        document.images.p.src = photos[--photoindex];
    }
}

//move forward, by one, within the photos array
//check to be sure that you are not moving outside of the array bounds
function forward() {
    if (photoindex < photos.length - 1) {
        document.images.p.src = photos[++photoindex];
    }
}

//go to a particular photo within the photos array
//check to be sure that you are not moving outside of the array bounds
function goto(n) {
    if (n < photos.length && n >= 0) {
        photoindex = n;
        document.images.p.src = photos[photoindex];
    }
}


function getNetPay() {
    var GROSSPAY = document.netpayForm.grossPay.value;
    var TAXES = document.netpayForm.taxes.value;
    var DEDUCTIONS = document.netpayForm.deductions.value;
    var tax = GROSSPAY / TAXES;
    var afterTax = GROSSPAY - tax;
    return (afterTax + parseInt(DEDUCTIONS))
}
