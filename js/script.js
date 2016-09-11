---
---
$( document ).ready(function() {

  // Blog Filter
  var categories = {{ site.categories | jsonify }}

  $('.category-container__category_all').click(function() {
    $('.blog__post').hide(1200)
    $('.blog__post').show(1200)
  })

  $.each( categories, function (key) {
    $(`.category-container__category_${key}`).click(function() {
      $('.blog__post').hide(1200)
      $(`.blog__post-${key}`).show(1200)
    })
  })

  // Portfolio Filter
  var $portfolio_post = $('.portfolio__post')
  var $portfolio_post_branding = $('.portfolio__post-branding')
  var $portfolio_post_print = $('.portfolio__post-print')
  var $portfolio_post_web = $('.portfolio__post-web')

  $('.category-container__category_all').click(function () {
    TweenLite.to($portfolio_post, 0.5, {opacity: 0, display: 'none', ease: Power1.easeOut})
    TweenLite.to($portfolio_post, 0.5, {opacity: 1, display: 'flex', delay: 0.5, ease: Power1.easeIn})
  })

  $('.category-container__category_branding').click(function () {
    TweenLite.to($portfolio_post, 0.5, {opacity: 0, display: 'none', ease: Power1.easeOut})
    TweenLite.to($portfolio_post_branding, 0.5, {opacity: 1, display: 'flex', delay: 0.5, ease: Power1.easeIn})
  })

  $('.category-container__category_print').click(function () {
    TweenLite.to($portfolio_post, 0.5, {opacity: 0, display: 'none', ease: Power1.easeOut})
    TweenLite.to($portfolio_post_print, 0.5, {opacity: 1, display: 'flex', delay: 0.5, ease: Power1.easeIn})
  })

  $('.category-container__category_web').click(function () {
    TweenLite.to($portfolio_post, 0.5, {opacity: 0, display: 'none', ease: Power1.easeOut})
    TweenLite.to($portfolio_post_web, 0.5, {opacity: 1, display: 'flex', delay: 0.5, ease: Power1.easeIn})
  })

  // Category Container
  $(document).ready(function () {
    $('.category-container__category').click(function (event) {
      $('a').removeClass('category-container__category--active')
      $(this).addClass('category-container__category--active')
    })
  })

  // Navbar Highlighter
  if (/blog/.test(window.location.href)) {
    $('.navbar__link--blog').addClass('navbar__link--active')
  } else if (/portfolio/.test(window.location.href)) {
    $('.navbar__link--portfolio').addClass('navbar__link--active')
  }

  // Console Log
  console.log("Hire me! Find my CV at http://heatherlauren.me/cv.pdf")

})
