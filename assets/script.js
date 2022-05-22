//get container that holdshour blocks
var container = $(".container");
var currentDate = moment().format('dddd' + ', ' + 'MMM Do YYYY');
var currentDayEl = $('#currentDay');
currentDayEl.text(currentDate);



var displayScheduler = function() {
        for (i = 9; i < 17; i++) {
                var hourBlock = $("<div class='input-group'>");
                //create time list
                var timeSlot = $("<span class='input-group-text hour col-2 col-md-2'>");
                if (i < 12) {
                        var timeDisplay = i;
                        timeSlot.attr('data-time', i + ':00AM');
                        timeSlot.text(timeDisplay + ':00 am');
                } else if (i===12) {
                        timeSlot.attr('data-time', '12:00PM')
                        timeSlot.text(i +':00 pm');
                } else {
                        var timeDisplay = i - 12;
                        timeSlot.attr('data-time', timeDisplay + ':00PM');
                        timeSlot.text(timeDisplay + ':00 pm')
                }
                hourBlock.append(timeSlot);

                //add text area
                var textArea = $('<textarea class="form-control col-8 col-md-9" aria-label="With textarea">');
                textArea.attr('id', 'textArea-' + (i));
                hourBlock.append(textArea);

                //add button
                var btn = $('<button class="saveBtn col-2 col-md-1 btn-outline-secondary" type="button" id="button-addon2" style="--bs-bg-opacity: .5;">');
                var icon = $('<span class="oi oi-box">');
                btn.append(icon);
                hourBlock.append(btn);
                container.append(hourBlock);
        }
};
displayScheduler();
$('.saveBtn').on('click', function(){
        var buttonClicked = $(this)
        var textElValue = buttonClicked.prev('textarea').val().trim();
        var textEl = $(buttonClicked.prev('textarea'))

        var textAreaID = textEl.attr('id');
        localStorage.setItem(textAreaID, textElValue)
})

var loadText = function() {
        for(i = 9; i < 17; i++){
        var displayText = localStorage.getItem('textArea-'+ i);
        $('#textArea-'+ i).  text(displayText);
}
}

loadText();


var pastPresentFuture = function () {
        var time = moment().format('H')
        for (i = 9; i < 17; i++ ){
                if (i < time) {
                        var content = $('#textArea-' + i);
                        content.addClass("past");
                }
                else if (i == time) {
                        var content = $('#textArea-' + i);
                        content.addClass("present");
                }
                else {if (i > time) {
                        var content = $('#textArea-' + i);
                        content.addClass("future");
                }
        }
        }
}
setInterval(pastPresentFuture(), (1000 * 60) * 30)
