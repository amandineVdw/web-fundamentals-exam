function runABTestForAdTags(config) {
  var competitorTagURL = config.competitorTagURL;
  var fuseTagURL = config.fuseTagURL;
  var randomChoice = Math.random() * 100;
  if (randomChoice < 50) {
    var gptScript = document.createElement("script");
    gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    gptScript.async = true;
    document.head.appendChild(gptScript);

    var competitorScript = document.createElement("script");
    competitorScript.src = competitorTagURL;
    document.head.appendChild(competitorScript);
  } else {
    var fuseScript = document.createElement("script");
    fuseScript.async = true;
    fuseScript.src = fuseTagURL;
    document.head.appendChild(fuseScript);

    update_fuse_tag();

    const fusetag = window.fusetag || (window.fusetag = { que: [] });
    fusetag.que.push(function () {
      fusetag.registerAll();
      fusetag.pageInit();
    });
  }
}

runABTestForAdTags({
  competitorTagURL: tb_prebid_file, //"https://static.tecnoblog.net/wp-content/cache/perfmatters/tecnoblog.net/minify/1f5bb2e635b0.tb-prebid.main.min.js",
  fuseTagURL: "https://cdn.fuseplatform.net/publift/tags/2/4002/fuse.js",
});

function update_fuse_tag() {
  document.addEventListener("DOMContentLoaded", function () {
    function update_fuse() {
      var container = document.querySelector("#fullbanner .container");
      var mobileSticky = document.getElementById("ad-mobile-sticky");
      if (container) container.setAttribute("data-fuse", window.innerWidth <= 1024 ? "Tablet Super" : "Desktop Super");

      if (mobileSticky) mobileSticky.setAttribute("data-fuse", window.innerWidth >= 744 ? "Tablet Sticky" : "Mobile Sticky");
    }
    update_fuse();
    window.addEventListener("resize", update_fuse);
  });
}
