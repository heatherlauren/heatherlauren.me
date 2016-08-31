---
---
$( document ).ready(function() {

  var categories = {{ site.categories | jsonify }}

  $('.category-container__category_all').click(function() {
    $(".blog__post").hide('slow')
    $(".blog__post").show('slow')
  })

  $.each( categories, function (key) {
    $(`.category-container__category_${key}`).click(function() {
      $(".blog__post").hide('slow')
      $(`.blog__post-${key}`).show('slow')
    })
  })

})
