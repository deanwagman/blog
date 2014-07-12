
'use strict';

jQuery(document).ready(function ($) {
    // Variables
    var win, articles;
    win = $(window);
    articles = $('article');

    // Scroll Effect that fades in Articles as they come into View
    win.on('scroll', function () {
        articles.each(function () {
            // Cache each articles coordinates
            var article, offset;
            article = $(this);
            offset = article.offset();
            // Conditional to see if article's 15% in view
            if (offset.top >  win.scrollTop() + win.height() - (win.height() * 0.25)) {
                article.addClass('transparent');
            } else {
                article.removeClass('transparent');
            }
        });
    });

    // Light Box Functionality
    $('img').on('click', function () {
        var src, img, box;
        src = $(this).attr('src');
        img = $("<img></img>").attr('src', src);
        box = $('.lightbox')
            .empty()
            .append(img)
            .addClass('active');
        box.on('click', function () {
            box.removeClass('active');
        });
    });

});







