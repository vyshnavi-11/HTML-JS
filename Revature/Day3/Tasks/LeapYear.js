// Check if a year is leap year or not.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const yearToCheck = prompt("You can input any year..?"); 
if (isLeapYear(yearToCheck)) {
    console.log(" leap year.");
} else {
    console.log(" not a leap year.");
}
