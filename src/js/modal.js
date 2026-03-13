import { getValue } from "./settings.js";

export default function init($modal, $links) {
  // Open links
  $links.click(function (e) {
    const $this = $(this);

    if ($this.hasClass("deactivate")) {
      e.preventDefault();
      return;
    }

    switch (getValue("open_links")) {
      case "new-window":
        e.preventDefault();

        window.open($this.attr("href"));
        return;

      case "same-window":
        document.location.href = $this.attr("href");
        return;
    }
  });

  //Modal menu
  const $menu = $modal.find("> ul a");

  $menu.on("click", function (e) {
    const $this = $(this);

    if ($this.attr("target") !== "_blank") {
      e.preventDefault();

      $menu.removeClass("selected");
      $this.addClass("selected");

      $modal.find("iframe").attr("src", $this.attr("href"));
    }
  });
}
