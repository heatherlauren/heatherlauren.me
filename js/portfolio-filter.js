$(document).ready(function () {

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
})
