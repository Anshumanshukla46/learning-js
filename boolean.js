// boolean
// all null, empty, 0, -0, false, NaN are -> false

// ==	equal to
// ===	equal value and equal type

// switch

let text = "";

// The default case does not have to be the last case in a switch block:


switch (new Date().getDay()) {
    case 0:
        text = "Sunday"
        break;

    case 1:
        text = "Monday"
        break;
    case 2:
        text = "Tuesday"
        break;
    case 3:
        text = "wednesday"
        break;
    case 4:
        text = "thursday"
        break;
    case 5:
        text = "friday"
        break;
    case 6:
        text = "saturday"
        break;
    default:
        text = "kdjs";

        text = "dsfh";
}

document.write(text);


// loops

const numbers = [45, 4, 9, 16, 25];

// for in loops access certain index
let txt = "";
for (let x in numbers) {
    txt += numbers[x] + " ";
}

document.write("<br>" + txt);


// for of loops access the element
for (let x of numbers) {
    document.write("<br>" + x);
}