// regex used for days
//`\b(\w*Tuesday\w*)\b`
//`\b(\w*Thursday\w*)\b`
//`\b(\w*Saturday\w*)\b`

// Hourly rate for Tuesdays and Thursdays
let tuesAndThurs = 4.25;
// Hourly rate for Saturdays
let saturdays = 4.75;
// Total number of week days including Tuesdays and Thursdays
let numWeekDays = 14;
// Total number of Saturdays
let numSaturdays = 6;
// Hourly rate
let perHour = 20;
// Factoring in any missed class hours
let missedClassHours = 8.5;

    function workOutHours () {
        // Total week hours multiplied by number of week days
        let totalWeekHours = tuesAndThurs * numWeekDays;
        console.log("Total hours worked on weekdays: " + totalWeekHours + " hours");
        // Total Saturday hours multiplied by number of Saturdays
        let totalSatHours = saturdays * numSaturdays;
        console.log("Total hours worked on Saturdays: " + totalSatHours + " hours");
        // Work out total hours worked by combining weekdays with Saturdays hours
        let totalHoursWorked = totalWeekHours + totalSatHours - missedClassHours;
        console.log("Total hours including missed hours: " + totalHoursWorked + " hours");
        // Work out the total gross pay including any missed classes
        let totalAmountPaid = totalHoursWorked * perHour;
        console.log("Gross pay for every class worked to date: " + "$" + totalAmountPaid + ".00");
    }

    // Running the function and passing in all of the variables
    workOutHours(tuesAndThurs, saturdays, numWeekDays, numSaturdays, perHour, missedClassHours);


