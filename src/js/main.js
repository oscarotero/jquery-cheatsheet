import "./deps.js";
import versions from "./versions-selector.js";
import search from "./api-search.js";
import modal from "./modal.js";
import settings from "./settings.js";

const $links = $(".main-content a");

versions($("#version"), $links);
search($("#search"), $links);
modal($("#modal"), $links);
settings($("#about-link"), $links);

handleOffline();
$(window).on("online offline", handleOffline);

function handleOffline() {
  if (navigator.onLine) {
    $("html").removeClass("is-offline");
  } else {
    $("html").addClass("is-offline");
  }
}
