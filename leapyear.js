// declare the function CheckLeapYear()s
function checkLeapYear(year) {
    //leap is a constant variable 

    const leap = new Date(year, 1,29).getDate() === 29;
    //getDate() method is used to return the day of the month.
    if (leap) {
        document.write( year + ' is a leap year');

    }
    else{
        document.write(year + ' is not a leap year');

    }

}
//input the year
const year = prompt ('Enter a random year: ');
checkLeapYear(year);
    