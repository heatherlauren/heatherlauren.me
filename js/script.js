---
---
$( document ).ready(function() {

  // Filters
  $(function(){
    $(".portfolio").mixItUp();
  })

  $(function(){
    $(".blog").mixItUp({
      layout: {
        display: 'flex'
      }
    });
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
