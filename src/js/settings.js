const settings = {
  open_links: "modal-window",
  layout: "horizontal",
  hide_removed: false,
  hide_deprecated: false,
};

export default function init($link) {
  $link.magnificPopup({
    type: "inline",
    mainClass: "modal-about",
  });

  const $settings = $($link.attr("href"));

  $settings.find(":radio").click(function () {
    const $this = $(this);
    const name = $this.attr("name");

    settings[name] = $this.val();

    if (name === "layout") {
      changeLayout(settings[name]);
    }

    localStorage.setItem("settings", JSON.stringify(settings));
  });

  $settings.find(":checkbox").click(function () {
    const $this = $(this);
    const name = $this.attr("name");

    settings[name] = $this.is(":checked");

    if (name === "hide_removed") {
      hide(name, settings[name]);
    }

    if (name === "hide_deprecated") {
      hide(name, settings[name]);
    }

    localStorage.setItem("settings", JSON.stringify(settings));
  });

  const savedSettings = localStorage.getItem("settings");

  if (savedSettings) {
    $.extend(settings, JSON.parse(savedSettings));
  }

  $.each(settings, function (name, value) {
    $settings.find(':radio[name="' + name + '"][value="' + value + '"]').prop(
      "checked",
      true,
    );

    if (name === "layout") {
      changeLayout(value);
    }

    $settings.find(':checkbox[name="' + name + '"][value="' + value + '"]')
      .prop("checked", true);

    if (name === "hide_removed") {
      hide(name, settings[name]);
    }

    if (name === "hide_deprecated") {
      hide(name, settings[name]);
    }
  });
}

export function getValue(name) {
  return settings[name];
}

function changeLayout(value) {
  if (value === "horizontal") {
    $(".main-content").removeClass("ly-vertical").addClass("ly-horizontal");
  } else {
    $(".main-content").removeClass("ly-horizontal").addClass("ly-vertical");
  }
}

function hide(name, value) {
  $(".main-content").toggleClass(name.replace("_", "-"), value);
}
