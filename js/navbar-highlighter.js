$(document).ready(function () {
  if (/blog/.test(window.location.href)) {
    $('.navbar__link--blog').addClass('navbar__link--active')
  } else if (/portfolio/.test(window.location.href)) {
    $('.navbar__link--portfolio').addClass('navbar__link--active')
  }
})
