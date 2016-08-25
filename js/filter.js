---
---
$( document ).ready(function() {

  var categories = {{ site.categories | jsonify }}

  $('.all_category_button').click(function() {
    $(".blog_post").hide('slow')
    $(".blog_post").show('slow')
  })

  $.each( categories, function (key) {
    $(`.${key}_category_button`).click(function() {
      $(".blog_post").hide('slow')
      $(`.${key}`).show('slow')
    })
  })

})
