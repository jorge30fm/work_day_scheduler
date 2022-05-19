//get container that holdshour blocks
var container = $(".container");

{/* <div class="input-group">
        <span class="input-group-text">9:00 am</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div> */}
var displayScheduler = function() {
        for (i = 0; i < 8; i++) {
                var hourBlock = $("<div class='input-group'>");

                var timeSlot = $("<span class='input-group-text col-1'>");

                if (i < 3) {
                        var timeDisplay = i + 9;
                        timeSlot.text(timeDisplay + ' am');
                } else if (i===3) {
                        timeSlot.text('12 pm');
                } else {
                        var timeDisplay = i - 3;
                        timeSlot.text(timeDisplay + ' pm')
                }
                hourBlock.append(timeSlot);
                var textArea = $('<textarea class="form-control" aria-label="With textarea">');
                hourBlock.append(textArea);
                var btn = $('<button class="saveBtn col-2 btn-outline-secondary" type="button" id="button-addon2" style="--bs-bg-opacity: .5;">');
                btn.attr('id', (i + 9));
                var icon = $('<span class="oi oi-box">');
                btn.append(icon);
                hourBlock.append(btn);
                container.append(hourBlock);
        }
};
displayScheduler()

/*0-9
1-10
2-11
3-12
4-1
5-2
6-3
7-4
*/