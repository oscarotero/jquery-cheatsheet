let currentVersion;
const sources = {};

export default function init($selector, $links) {
  $selector.find("option").each(function () {
    const $this = $(this);

    sources[$this.attr("value")] = $this.data("source");
  });

  $selector.selectize();

  $selector.change(function () {
    const value = $selector.val();
    let activate = false;
    currentVersion = value;

    $links.removeClass("old-version removed");

    $.each($selector.data("selectize").options, function (_, option) {
      if (option.value == value) {
        activate = true;
      }

      const selector = ".v" + option.value.replace(/\./g, "-");

      if (!activate) {
        $links.filter(selector).addClass("old-version removed");
      } else {
        $links.filter(selector + "-d").addClass("old-version"); //Deprecated
        $links.filter(selector + "-r").addClass("removed"); //Removed
      }
    });
  });

  $selector.change();
}

export function getCurrent() {
  return currentVersion;
}

export function getCurrentSource() {
  return sources[currentVersion];
}
