// regex used for days
//`\b(\w*Tuesday\w*)\b`
//`\b(\w*Thursday\w*)\b`
//`\b(\w*Saturday\w*)\b`

// Hourly rate for Tuesdays and Thursdays
let tuesAndThurs = 4.25;
// Hourly rate for Saturdays
let saturdays = 4.75;
// Total number of week days including Tuesdays and Thursdays
let numWeekDays = 15;
// Total number of Saturdays
let numSaturdays = 7;
// Hourly rate
let perHour = 20;
// Factoring in any missed class hours
let missedClassHours = 8.5;

    function workOutHours () {
        // Total week hours multiplied by number of week days
        let totalWeekHours = tuesAndThurs * numWeekDays;
        console.log("This is the total hours worked on weekdays: " + totalWeekHours + " hours");
        // Total Saturday hours multiplied by number of Saturdays
        let totalSatHours = saturdays * numSaturdays;
        console.log("This is the total hours worked on Saturdays: " + totalSatHours + " hours");
        // 
        let totalHoursWorked = totalWeekHours + totalSatHours;
        console.log("This is the total hours for every class: " + totalHoursWorked + " hours");

        let missedPay = missedClassHours * perHour;

        let totalAmountPaid = totalHoursWorked * perHour - missedPay;
        console.log("This is the gross pay for every class worked: " + "$" + totalAmountPaid + ".00");
    }
    // Running the function and passing in all of the variables
    workOutHours(tuesAndThurs, saturdays, numWeekDays, numSaturdays, perHour, missedClassHours);


