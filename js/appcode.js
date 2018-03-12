// Initialize ListJS - http://listjs.com/
var options = {
    valueNames: ['term', 'meaning']
};

var glossaryList = new List('glossary', options);

function glossaryScroll() {
    var height = $('body').height();
    var width = $('#glossaryList').width();
    var offset = $('#siteHeader').height() + $('#site-navigation').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 100) {
        $('#alphabet').addClass('fixed').css({
            'position': 'fixed',
            'top': offset,
            'width': width
        });
    } else {
        $('#alphabet').removeClass('fixed').css({
            'position': 'relative',
            'top': '0'
        });
    }
}

$(function () {
    // Fix alphabet navigation to top of page with search box
    $(window).scroll(function () {
        glossaryScroll();
    });

    // Navigate to letters
    $(".glossaryNav a").click(function (event) {

        // Clear active search if user navigates with button
        glossaryList.search();
        $('#glossarySearch').val('');

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: $('#glossaryList').scrollTop() + target.offset().top
                });
            }
        }

        event.preventDefault();
    });

    // Back to top link
    $("#glossaryList a").click(function (event) {
        // Clear active search if user navigates with button
        glossaryList.search();
        $('#glossarySearch').val('');

        $("html, body").animate({
            scrollTop: 0
        });

        event.preventDefault();
    });

    $("#glossarySearch").keyup(function () {
        $("html, body").animate({
            scrollTop: 0
        })
    });

    $("a.disabled").click(function (event) {
        return false;
    })
});