define([
    'jquery',
    './settings',
    './versions-selector',
    'magnific-popup'
], function ($, settings, versions) {
    
    return {
        init: function ($modal, $links) {
            // Open links
            $links.click(function (e) {
                var $this = $(this);

                if ($this.hasClass('deactivate')) {
                    e.preventDefault();
                    return;
                }

                switch (settings.getValue('open_links')) {
                    case 'modal-window':
                        e.preventDefault();

                        $modal.find('.link-api a').attr('href', $this.attr('href')).click();

                        if ($this.data('src') && versions.getCurrentSource()) {
                            $modal.find('.link-src a').show().attr('href', 'http://james.padolsey.com/jquery/' + versions.getCurrentSource() + '/' + $this.data('src'));
                        } else {
                            $modal.find('.link-src a').hide();
                        }

                        $.magnificPopup.open({
                            items: {
                                src: $modal,
                                type: 'inline'
                            },
                            mainClass: 'modal-doc',
                            close: function () {
                                $modal.find('iframe').attr('src', 'about:blank');
                            }
                        });
                        return;

                    case 'new-window':
                        e.preventDefault();

                        window.open($this.attr('href'));
                        return;

                    case 'same-window':
                        document.location.href = $this.attr('href');
                        return;
                }
            });

            //Modal menu
            var $menu = $modal.find('> ul a');

            $menu.on('click', function (e) {
                var $this = $(this);

                if ($this.attr('target') !== '_blank') {
                    e.preventDefault();

                    $menu.removeClass('selected');
                    $this.addClass('selected');

                    $modal.find('iframe').attr('src', $this.attr('href'));
                }
            });
        }
    }
});
