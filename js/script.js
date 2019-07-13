$(document).ready(function() {
    $('.card + .card').hide();
    $('.tab').first().addClass('active');


    $('.tab').on('click', function(e) {
        e.preventDefault();
        $('.card').hide();
        $('.tab').removeClass('active');
        $($(this).attr('href')).fadeIn();
        $(this).addClass('active');
    });
    

    var shape = document.getElementById('progress');
    var shapeLength = shape.getTotalLength().toFixed(0) - 117;
    var progressShow = shape.setAttribute('stroke-dashoffset', shapeLength);
    	document.getElementById('percent').innerText = (shapeLength/10);

});