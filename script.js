function handleIconClick() {
  $('#phoneNumber').on('click', function() {
    $('.displayInfo').html(`<h2>(707) 529-8295</h2>`);
  });
}

$("nav").find("a").click(function(e) {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

function handlePage() {
  handleIconClick();
}

$(handlePage);