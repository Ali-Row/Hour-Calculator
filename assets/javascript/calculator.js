$(document).ready(function(){

// Hours for Tuesdays and Thursdays
let tuesAndThurs = 4.25;
// Hours for Saturdays
let saturdays = 4.75;
// Total number of week days including Tuesdays and Thursdays
let numWeekDays = 0;
// Total number of Saturdays
let numSaturdays = 0;
// Hourly rate
let perHour = 20;
// Factoring in any missed class hours
let missedClassHours = 8.5;
// Set the launchModal id to a variable and hide the button
let openModal = $('#launchModal').hide();

    // When the submit button is clicked run this function
    $('#submit').on('click', function () {
        event.preventDefault();
        numWeekDays = $('#weekdays').val().trim();
        numSaturdays = $('#saturdays').val().trim();
        missedClassHours = $('#missedHours').val().trim();
        // Running the workOutHours function and passing in all of the variables
        workOutHours(tuesAndThurs, saturdays, numWeekDays, numSaturdays, perHour, missedClassHours);
    });

     workOutHours = () => {
        // Total week hours multiplied by number of week days
        let totalWeekHours = tuesAndThurs * numWeekDays;
        // Total Saturday hours multiplied by number of Saturdays
        let totalSatHours = saturdays * numSaturdays;
        // Work out total hours worked by combining weekdays with Saturdays hours and subtracting any missed hours
        let totalHoursWorked = totalWeekHours + totalSatHours - missedClassHours;
        // Work out the total gross pay including any missed classes
        let totalAmountPaid = totalHoursWorked * perHour;

        // Ternary conditional to determin whether or not the fields have been filled out
        !numWeekDays || !numSaturdays || !missedClassHours ? fillOutFields() : renderResults();

        function fillOutFields () {
            openModal.click();
        }

        function renderResults () {
            $('#main').html(`
                    <hr class="my-4">
                <div class="p-2 animated fadeInDown">
                    <h5>Total hours including missed hours:<h3>${totalHoursWorked}</h3></h5>
                </div>
                    <hr class="my-4">
                <div class="p-2 animated fadeInDown">
                    <h5>Hourly rate:<h3>$${perHour}.00</h3></h5>
                </div>
                    <hr class="my-4">
                <div class="p-2 animated fadeInDown">
                    <h5>Gross pay for every class worked to date:<h3>$${totalAmountPaid}.00</h3></h5>
                </div>
                    <hr class="my-4">
                <div class="p-2 animated fadeInDown">
                    <h5>Total missed hours:<h3>${missedClassHours}</h3></h5>
            </div>`)
        }
    }
});
