/*$('.email')on('click', function() {
  $('.displayInfo').html(`<h2>cgreffly@gmail.com</h2>`)
})*/

function handleIconClick() {
  $('#phoneNumber').on('click', function() {
    $('.displayInfo').html(`<h2>(707) 529-8295</h2>`);
  });
  $('#email').on('click', function() {
    $('.displayInfo').html(`<h2>cgreffly@gmail.com</h2>`);
  });
}

$("nav").find("a").click(function(e) {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

/*function handleNavBar() {
  $('#home').on('click').scrollto('.projects');
}*/

function handlePage() {
  handleIconClick();
  //handleNavBar();
}

$(handlePage);