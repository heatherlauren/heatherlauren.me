---
---
$( document ).ready(function() {

  $('.category-container__category_all').click(function() {
    $(".portfolio__post").hide('slow')
    $(".portfolio__post").show('slow')
  })

  $('.category-container__category_branding').click(function() {
    $(".portfolio__post").hide('slow')
    $(".portfolio__post-branding").show('slow')
  })

  $('.category-container__category_print').click(function() {
    $(".portfolio__post").hide('slow')
    $(".portfolio__post-print").show('slow')
  })

  $('.category-container__category_web').click(function() {
    $(".portfolio__post").hide('slow')
    $(".portfolio__post-web").show('slow')
  })

})
