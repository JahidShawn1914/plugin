(function ($) {

    $.fn.cycleImages = function (options) {

        // Default settings
        var settings = $.extend({
            cover: $('.cover'),
            gallery: $('.gallery'),
            interval: 400
        }, options);

        $(this).css('position', 'relative');
        settings.gallery.css({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'none'
        });
        settings.gallery.find('img').css({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'none'
        });
        settings.gallery.find('img').eq(2).show(0);

        var hoverInterval;
        $(this).hover(function() {
            settings.gallery.show(0);

            hoverInterval = setInterval(function() {
                var currentImage = settings.gallery.find('img:visible');
                var allImages = settings.gallery.find('img');
                var currentIndex = allImages.index(currentImage);
                var nextIndex = (currentIndex + 1) % allImages.length;

                currentImage.hide(0);
                allImages.eq(nextIndex).show(0);

            }, settings.interval);

        }, function() {
            settings.gallery.hide(0);
            clearInterval(hoverInterval);
        });

    };

})( jQuery );
