import lume from "lume/mod.ts";
import eta from "lume/plugins/eta.ts";
import postcss from "lume/plugins/postcss.ts";
import gpm from "https://deno.land/x/gpm@v0.5.0/mod.ts";

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
  .script(
    "deploy",
    "lume",
    "rsync -r _site/ oscarotero@oscarotero.com:~/www/jquery",
  )
  .addEventListener("beforeBuild", () =>
    gpm([
      "jquery/jquery",
      "dimsemenov/Magnific-Popup",
      "necolas/normalize.css",
      {
        name: "selectize/selectize.js",
        files: [
          "dist/js/standalone/selectize.js",
          "dist/css/selectize.css",
        ],
      },
    ], "src/vendor"));

export default site;
