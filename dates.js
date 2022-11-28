const d = new Date();

document.getElementById("demo").innerHTML = d;

const e = new Date("2022-08-12");

document.getElementById("demo").innerHTML = e;

// year month day hour min sec millisecond
const q = new Date(2018, 11, 12, 21, 2, 23, 2123);
document.write(q);


// ISO Date	"2015-03-25"
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

var a = new Date("2015-03-24");
document.write(a);

a = new Date("03/25/2017");
document.write(a);

a = new Date("Mar 25 2016");
document.write(a);

// date to millisecond

a = Date.parse("15 aug 2022");
document.write("<br>" + a);

// getters in date
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

a = new Date("Mar 25 2015");
document.write("<br>" + months[d.getMonth()]);



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
a = new Date("2021-03-25");
// getDay()
document.write("<br>" + days[a.getDay()]);

// millisecond
a = Date.now();

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

document.write("<br>" + years);

// a.setFullYear(2020);
// document.write("<br>" + a.getFullYear());

a = new Date();
a.setHours(12);
document.write("<br>" + a);

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)



// comparision of dates
var now = new Date();
var some = new Date();

some.setFullYear(2019, 12);
let text = "";

if (some > now) {
    text = now;
} else {
    text = "i am at " + months[some.getMonth()] + " 2019";
}

document.write("<br>" + text);

document.write("<br>" + Math.sign(3));

document.write("<br>" + Math.log10(10000));



// random

// Returns a random integer from 0 to "99":
// Math.floor(Math.random() * "100"); <- check double quotes


// Returns a random integer from "1" to "10":
// Math.floor(Math.random() * "10") + "1"; <- check double quotes

document.write("<br>" + "Some randoms are :  ");

for (let i = 0; i < 6; i++) {
    document.write(Math.random() * 100 + " ");

}