$(document).ready(function(){

// regex used for days
//`\b(\w*Tuesday\w*)\b`
//`\b(\w*Thursday\w*)\b`
//`\b(\w*Saturday\w*)\b`

// Hourly rate for Tuesdays and Thursdays
let tuesAndThurs = 4.25;
// Hourly rate for Saturdays
let saturdays = 4.75;
// Total number of week days including Tuesdays and Thursdays
// let numWeekDays = 15;
let numWeekDays = 0;
// Total number of Saturdays
// let numSaturdays = 7;
let numSaturdays = 0;
// Hourly rate
let perHour = 20;
// Factoring in any missed class hours
let missedClassHours = 8.5;

    $('#submit').on('click', function () {
        event.preventDefault();
        numWeekDays = $('#weekdays').val();
        numSaturdays = $('#saturdays').val();
        // Running the function and passing in all of the variables
        workOutHours(tuesAndThurs, saturdays, numWeekDays, numSaturdays, perHour, missedClassHours);
    });

    function workOutHours () {
        // Total week hours multiplied by number of week days
        let totalWeekHours = tuesAndThurs * numWeekDays;
        // Total Saturday hours multiplied by number of Saturdays
        let totalSatHours = saturdays * numSaturdays;
        // Work out total hours worked by combining weekdays with Saturdays hours and subtracting any missed hours
        let totalHoursWorked = totalWeekHours + totalSatHours - missedClassHours;
        $("#displayHours").html("<h5> Total hours including missed hours: " + "<h3>" + totalHoursWorked + " hours");
        // Work out the total gross pay including any missed classes

        let totalAmountPaid = totalHoursWorked * perHour;
        $("#displayPay").html("<h5> Gross pay for every class worked to date: " + "<h3>" + "$" + totalAmountPaid + ".00");

            $("#main").html(`<hr class="my-4">

            <div class="p-2">
                <h5>Total hours including missed hours:<h3>${totalHoursWorked}</h3></h5>
            </div>

                <hr class="my-4">
            
            <div class="p-2">
                <h5>Hourly rate:<h3>$${perHour}.00</h3></h5>
            </div>
            
                <hr class="my-4">
            
            <div class="p-2">
                <h5>Gross pay for every class worked to date:<h3>$${totalAmountPaid}.00</h3></h5>
            </div>

                <hr class="my-4">

            <div class="p-2">
            <h5>Total missed hours:<h3>${missedClassHours} hours</h3></h5>

        </div>`)
    }

});
