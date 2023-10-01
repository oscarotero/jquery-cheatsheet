import lume from "lume/mod.ts";
import eta from "lume/plugins/eta.ts";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
  src: "./src",
  location: new URL("https://oscarotero.com/jquery"),
});

site
  .copy("files", ".")
  .copy("vendor")
  .copy("js")
  .use(eta())
  .use(postcss())
  .use(basePath())
  .remoteFile(
    "/vendor/jquery/jquery.js",
    "https://code.jquery.com/jquery-3.5.1.min.js",
  )
  .remoteFile(
    "/vendor/Magnific-Popup/jquery.magnific-popup.js",
    "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js",
  )
  .remoteFile(
    "/vendor/Magnific-Popup/magnific-popup.css",
    "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css",
  )
  .remoteFile(
    "/vendor/normalize.css/normalize.css",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
  )
  .remoteFile(
    "/vendor/selectize/selectize.js",
    "https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.13.3/js/standalone/selectize.min.js",
  )
  .remoteFile(
    "/vendor/selectize/selectize.css",
    "https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.13.3/css/selectize.min.css",
  );

export default site;
