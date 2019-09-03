function handleIconClick() {
  $('#email').on('click', function() {
    $('.displayInfo').html(`<h2>cgreffly@gmail.com</h2>`);
  });
}

$('nav')
  .find('.pageLink')
  .click(function(e) {
    e.preventDefault();
    let section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  });

function handlePage() {
  handleIconClick();
}

$('.videoPlayer').hide();
$('#viewDemo').click(function(e) {
  e.preventDefault();
  $('.videoPlayer').fadeIn();
});

$(handlePage);
