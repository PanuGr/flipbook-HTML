//FLIPBOOK
if (window.innerWidth >= 900) {
    $("#flipbook").turn({
        autoCenter: true,
    });
} else {
    $("#flipbook").turn({
        autoCenter: true,
        display: 'single'
    });
}
// Arrows
$(document).keydown(function (e) {
    var previous = 37,
        next = 39;

    switch (e.keyCode) {
        case previous:
            $("#flipbook").turn("previous");

            break;
        case next:
            $("#flipbook").turn("next");

            break;
    }
});
