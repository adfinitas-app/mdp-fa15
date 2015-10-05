$(function() {
    function getDonAmount() {
        $.ajax({
            url: "https://donner.miedepain.asso.fr/api/counter/get",
            data: {
                "user_api": "umdpapi",
                "pwd_api": "drR3tmYQ",
                "campaigns[]": [16, 17]
            }
        }).done(function(data, status, jqXHR) {
            if (data[0] == '1') {
                var amount = data.slice(data.indexOf('|') + 1, data.length - 2);
                $('#progress_don').css("width", (amount > 0 ? amount * 100 / 80000 : 0) + "%");
                if (amount.length > 3) {
                    amount = amount.slice(0, amount.length - 3) + " " + amount.slice(amount.length - 3);
                }
                $('#amount_collected').html(amount ? amount : 0);
            }
        });
    }
    getDonAmount();

    // PERSO POUR RESPONSIVE
    var size = 600;
    if ($(window).width() < 900) {
        size = $(window).width() - 300;
    }
    size = size + 'px';
    $('.compteur').css('width',
        size);
    $(window).resize(function() {
        var size = 600;
        if ($(window).width() < 900) {
            size = $(window).width() - 300;
        }
        size = size + 'px';
        $('.compteur').css('width',
            size);
    });
    // PERSO

});