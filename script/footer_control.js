window.addEventListener("DOMContentLoaded", () => {
  function doRepositionFooter() {
    const header_height = document.getElementsByTagName("header")[0].clientHeight + 2;
    const content_height = document.getElementsByTagName("div")[0].clientHeight;
    const footer_height = document.getElementsByTagName("footer")[0].clientHeight;

    const body_height = header_height + content_height + footer_height;

    if (window.innerHeight > body_height) {
      t = window.innerHeight - header_height - footer_height - 20;
      document.getElementsByClassName("content")[0].style.height = t + "px";
    }
  }

  doRepositionFooter();
  window.addEventListener("resize", () => {
    doRepositionFooter();
  });
  });