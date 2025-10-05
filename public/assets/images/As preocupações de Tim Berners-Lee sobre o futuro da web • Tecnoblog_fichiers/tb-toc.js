window.addEventListener("DOMContentLoaded", () => {
  const startClosed = document.body.classList.contains("single-responde") || document.body.classList.contains("single-guias");
  const TbYoastToc = document.querySelector(".wp-block-yoast-seo-table-of-contents.yoast-table-of-contents");
  if (!TbYoastToc) return;
  const readMore = document.querySelector(".read-more .entry");

  const nested = TbYoastToc.querySelectorAll("li:has(ul)");
  const links = TbYoastToc.querySelectorAll("li");
  if (readMore) {
    links.forEach((link) => {
      link.addEventListener("mousedown", (e) => remove_read_more());
      link.addEventListener("touchstart", (e) => remove_read_more());
    });
  }

  if (nested) {
    nested.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.classList.toggle("closed");
      });
    });
  }

  const TbYoastTocTitle = TbYoastToc.querySelector("h2");
  TbYoastTocTitle.addEventListener("click", () => {
    if (readMore) remove_read_more();
    TbYoastToc.classList.toggle("closed");
  });
});
