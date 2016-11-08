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

  $(function(){
    $(".portfolio").mixItUp();
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
