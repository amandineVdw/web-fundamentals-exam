var socialShare = document.querySelectorAll('.js-social-share');

for (let i = 0; i < socialShare.length; i++) {
  socialShare[i].addEventListener("click", function(e) {
    e.preventDefault();
    var intWidth = '500',
        intHeight = '400',
        strResize = true,
        strTitle = ((typeof this.getAttribute('title') !== 'undefined') ? this.getAttribute('title') : 'Compartilhar'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize;

    return window.open(this.getAttribute('href'), strTitle, strParam).focus();
  });
}