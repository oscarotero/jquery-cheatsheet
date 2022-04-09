export default function init($selector, $links) {
  $selector.selectize({
    sortField: "sort",
    render: {
      option: function (data) {
        const regex = /\./g;
        let className = "option v" + data.from.replace(regex, "-") + " " +
          data.type;

        if (data.deprecated) {
          className += " v" + data.deprecated.replace(regex, "-") + "-d";
        }

        if (data.removed) {
          className += " v" + data.removed.replace(regex, "-") + "-r";
        }

        return '<div class="' + className + '">' + data.text + "</div>";
      },
    },
  });

  $selector.change(function () {
    const value = $selector.val();

    if (value) {
      $links.filter("." + value.replace(".", "-")).first().click();
    }
  });

  const selectize = $selector[0].selectize;

  $(window).keydown(function (event) {
    if (
      !event.metaKey && !event.shiftKey && !event.ctrlKey && !event.altKey &&
      event.keyCode != 27 && !$(":focus").is("input")
    ) {
      const open = function () {
        selectize.open();
        $selector.siblings(".selectize-control").find(".selectize-input input")
          .focus();
      };

      open();
    }
  });

  $selector.siblings(".selectize-control").find(".selectize-input input")
    .keydown(function (event) {
      if (event.which === 27) { //esc
        $selector.siblings(".selectize-control").find(".selectize-input input")
          .blur();
        selectize.blur();
        selectize.clear();
      }
    });

  selectize.on("dropdown_open", function () {
    selectize.clear();
  });
}
