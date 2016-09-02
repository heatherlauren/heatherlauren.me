$('.category-container__category').click(function (event) {
  $('a').removeClass('category-container__category--active')
  $(this).addClass('category-container__category--active')
})
