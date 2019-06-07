$(document).ready(function() {
    $('.card + .card').hide();
    $('.tab').first().addClass('active');


    $('.tab').on('click', function(e) {
        e.preventDefault();
        $('.card').hide();
        $('.tab').removeClass('active');
        $($(this).attr('href')).fadeIn();
        $(this).addClass('active');
    })
    
});