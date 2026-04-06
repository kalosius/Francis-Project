document.addEventListener('DOMContentLoaded', function () {
  var currentYear = new Date().getFullYear();
  var footerParagraphs = document.querySelectorAll('.footer-bottom p');

  footerParagraphs.forEach(function (paragraph) {
    if (paragraph.textContent.indexOf('All rights reserved') !== -1) {
      paragraph.textContent = paragraph.textContent.replace(/©?\s*\d{4}/, '© ' + currentYear);
    }
  });
});
