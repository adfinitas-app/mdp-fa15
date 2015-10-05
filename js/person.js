$(function() {
    $('#video').videoUI();


    var size = 710;
    if ($(window).width() < 710) {
        size = $(window).width() - 0;
    }
    size = size + 'px';
    $('#video').css('width', size);
    $(window).resize(function() {
        var size = 710;
        if ($(window).width() < 710) {
            size = $(window).width() - 0;
        }
        size = size + 'px';
        $('#video').css('width', size);
    });
});