$(document).ready(function () {
	var $search = $('#search');

	$search.autocomplete({
		select: function (event, ui) {
			$sources.slice(ui.item.index, ui.item.index+1).click();
		}
	});


	// Autocomplete
	var sources = [];
	var $sources = $('section ul a');

	var refreshSources = function () {
		sources = [];

		$sources.each(function (i) {
			if (!$(this).hasClass('old-version')) {
				sources.push({
					label: $(this).text(),
					index: i
				});
			}
		});

		$search.autocomplete('option', 'source', sources);
	}

	$('#version').change(function () {
		var value = $(this).val();
		var activate = false;

		$('section .old-version').removeClass('old-version removed');

		$(this).children().each(function () {
			var text = $(this).val();

			if (text == value) {
				activate = true;
			}

			if (!activate) {
				$(text).addClass('old-version removed');
			} else {
				$(text + '-d').addClass('old-version'); //Deprecated
				$(text + '-r').addClass('removed'); //Removed
			}
		});

		$('section ul').each(function () {
			if (!$(this).find('a:not(.old-version)').length) {
				$(this).parents('section').children('h2').addClass('old-version');
			} else {
				$(this).parents('section').children('h2').removeClass('old-version');
			}
		});

		refreshSources();
	});

	var initialVersion = document.location.hash;

	if (initialVersion) {
		initialVersion = 'a.v' + initialVersion.substr(1).replace('.', '-');
		$('#version').val(initialVersion);
	}

	$('#version').change();	

	$('#search').quicksearch('section a', {
		onAfter: function () {
			var $lists = $('section ul');

			$lists.each(function () {
				if (!$(this).find('a:not(.deactivate)').length) {
					$(this).parents('section').children('h2').addClass('deactivate');
				} else {
					$(this).parents('section').children('h2').removeClass('deactivate');
				}
			});

			var offset = $lists.find('a:not(.deactivate)').eq(0).offset();

			if (offset && (((offset.left + 200) > ($(window).scrollLeft() + $(window).width())) || (offset.left < $(window).scrollLeft()))) {
				$(window).scrollTo({
					left: offset.left - 50,
					top: $(window).scrollTop()
				}, 1000);
			}
		},
		hide: function () {
			$(this).addClass('deactivate');
		},
		show: function () {
			$(this).removeClass('deactivate');
		}
	});
	
	var getSource = function (obj) {
		var output = [], temp;

		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				temp = '"' + i + '"' + ":";

				switch (typeof obj[i]) {
					case "object" :
					temp += getSource(obj[i]);
					break;

					case "string" :
					temp += "\"" + obj[i] + "\"";    // add in some code to escape quotes
					break;

					default :
					temp += obj[i];
				}
				output.push(temp);
			}
		}
		return "{" + output.join() + "}";
	}

	// User Settings

	var settings = $.parseJSON($.cookie('settings')) || {};
	var $settings = $('#settings');
	var $themes = $('#theme');


	//Theme
	$themes.change(function () {
		settings.theme = $themes.val();
		$('#theme-styles').attr('href', $themes.val());
	});

	if (settings.theme) {
		$themes.val(settings.theme).change();
	}


	$settings.dialog({
		modal: true,
		autoOpen: false,
		open: function () {
			$(this).find(':radio').each(function () {
				var $this = $(this);

				if (settings[$this.attr('name')] == $this.val()) {
					$this.prop('checked', true);
				}
			});

			$(this).find(':checkbox').each(function () {
				var $this = $(this);

				if (settings[$this.attr('name')] == 1) {
					$this.prop('checked', true);
				}
			})
		},
		close: function () {
			$.cookie('settings', getSource(settings), { expires: 365 });

			_gaq.push(['_trackPageview', '/settings/open_window/' +  settings.open_links]);
			_gaq.push(['_trackPageview', '/settings/theme/' +  $('#theme').val()]);
		}
	});

	if (!settings.open_links) {
		settings.open_links = 'modal-window';
		settings.theme = 'css/colorfull.css';

		$.cookie('settings', getSource(settings), { expires: 365 });
	}

	$settings.find('input').click(function () {
		var $this = $(this);

		if ($this.is(':radio')) {
			settings[$this.attr('name')] = $this.val();
		} else if ($this.is(':checkbox')) {
			settings[$this.attr('name')] = $this.is(':checked');
		}
	});

	$('#settings-button').click(function () {
		$settings.dialog('open');
		return false;
	});


	// Open links
	var $modal = $('#modal').dialog({
		autoOpen: false,
		modal: true,
		close: function () {
			$modal.find('iframe').attr('src', 'iframe.html');
		}
	});

	$('section ul a').click(function () {
		var $this = $(this);

		if ($this.hasClass('deactivate')) {
			return false;
		}

		switch (settings.open_links) {
			case 'modal-window':
				$modal.find('iframe').attr('src', $this.attr('href'));
				$modal.dialog('option', {
					width: $(window).width() - 100,
					height: $(window).height() - 100,
					title: $this.html()
				});
				$modal.dialog('open');
				return false;

			case 'new-window':
				window.open($this.attr('href'));
				return false;

			case 'same-window':
				return true;
		}
	});

	$(window).keydown(function (event) {
		if (!event.metaKey && !event.shiftKey && !event.ctrlKey && !event.altKey && event.keyCode != 27 && !$search.is(':focus')) {
			$search.focus();
		}
	});

	$search.keydown(function (event) {
		if (event.keyCode == 27) {
			$search.val('').keyup().blur();
		}
	});

	$search.bind('search', function () {
		if (!$search.val()) {
			$search.keyup().blur();
		}
	});
});
