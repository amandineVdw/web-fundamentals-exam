// fastdom.measure(function () {
//   var toggle = document.querySelector(".theme-mode-bg");
//   toggle.addEventListener("mousedown", () => {
//     window.requestAnimationFrame(TbToggleThemeMode);
//   });
// });

function TbToggleThemeMode() {
  window.requestAnimationFrame(() => {
    fastdom.measure(function () {
      var cookie = localStorage.getItem("amp-dark-mode"),
        darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches,
        lightmode = window.matchMedia("(prefers-color-scheme: light)").matches,
        targetTheme = "";

      fastdom.mutate(function () {
        // Se o cookie estiver setado como yes, quer dizer que forçou dark mode
        if (cookie === "yes" && lightmode) {
          document.documentElement.removeAttribute("dark-mode");
          localStorage.removeItem("amp-dark-mode");
        }
        // Se o cookie estiver setado como no, quer dizer que forçou light mode
        else if (cookie === "no" && darkmode) {
          document.documentElement.removeAttribute("dark-mode");
          localStorage.removeItem("amp-dark-mode");
        }
        // Se não tiver cookie setado, quer dizer que está forçando pela primeira vez
        else {
          // Verifica se ele prefere o dark e seta o inverso
          if (darkmode) {
            targetTheme = "no";
          }
          // Verifica se ele prefere o light e seta o inverso
          else if (lightmode) {
            targetTheme = "yes";
          }
        }

        if (targetTheme) {
          document.documentElement.setAttribute("dark-mode", targetTheme);
          localStorage.setItem("amp-dark-mode", targetTheme);
        }
      });
    });
  });
}
