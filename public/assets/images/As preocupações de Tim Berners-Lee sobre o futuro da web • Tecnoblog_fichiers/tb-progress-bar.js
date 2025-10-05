const top_header = document.querySelector("#top header");
const ad_sticky = document.getElementById("ad-mobile-sticky-container");
const ad_sticky_top = ad_sticky ? ad_sticky.offsetTop : null; //ad_sticky.parentElement.id == "ad-mobile-sticky-header-home" ? ad_sticky.offsetTop - 50 : ad_sticky.offsetTop;

let scroll_last = 0;
let reset = 0;
const viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const progress_bar = document.getElementById("progress-bar");

function tb_progress_bar() {
  fastdom.measure(function () {
    const total_height = document.body.scrollHeight - window.innerHeight;
    const progress_height = window.scrollY;
    const progress_percent = (progress_height / total_height) * 100;
    fastdom.mutate(function () {
      progress_bar.style.width = progress_percent > 100 ? 100 : progress_percent + "%";
    });
  });
}

tb_progress_bar();

window.addEventListener("scroll", function () {
  var scroll_value = window.scrollY;
  if (scroll_value >= 50) top_header.classList.add("pinned");
  else top_header.classList.remove("pinned");

  // const hide_top_header = viewport_width < 744 && scroll_value > 50;

  if (progress_bar) {
    tb_progress_bar();
  }

  // 	if (hide_top_header) {
  // 		if (scroll_value > scroll_last) {
  // 			top_header.style.transform = "translateY(-100%)";
  // 			reset = 0;
  // 		} else if (reset == 0) {
  // 			reset = scroll_value;
  // 		} else if (reset && reset - scroll_value > 100) {
  // 			top_header.style.transform = "translateY(0)";
  // 		}
  // 		scroll_last = scroll_value;
  // 	}
  // } else {
  // 	top_header.style.transform = "translateY(0)";
  // }
});
