require([
    'jquery',
    './versions-selector',
    './api-search',
    './modal',
    './settings'
], function ($, versions, search, modal, settings) {
    window.jQuery = $;
    
    $(function () {
        var $links = $('.main-content a');

        versions.init($('#version'), $links);
        search.init($('#search'), $links);
        modal.init($('#modal'), $links);
        settings.init($('#about-link'));
    });

    handleOffline();
    $(window).on('online offline', handleOffline);

    function handleOffline () {
        if (navigator.onLine) {
            $('html').removeClass('is-offline');
        } else {
            $('html').addClass('is-offline');
        }
    }
});
