$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

$(document).on('ready', function() {
    $(".modal").on("shown.bs.modal", function()  {
        var urlReplace = "#" + $(this).attr('id');
        history.pushState(null, null, urlReplace);
    });

    $(window).on('popstate', function() {
        $(".modal").modal('hide');
    });

    $(".category_box").click(function() {
        $("body").animate({ scrollTop: $('.products-scroll').offset().top - 30 }, 'slow');
    });
});

