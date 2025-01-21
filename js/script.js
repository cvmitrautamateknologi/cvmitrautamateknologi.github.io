// Efek smooth scrolling saat klik link di navbar
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Efek zoom pada gambar tutor saat dihover
$('.kartu-tutor img').hover(
    function() { $(this).addClass('zoom'); },
    function() { $(this).removeClass('zoom'); }
);

// Efek zoom pada gambar partner saat dihover
$('.kartu-partner img').hover(
    function() { $(this).addClass('zoom'); },
    function() { $(this).removeClass('zoom'); }
);