var colors = ["#92dca9", "#525588"];

$('.shining-circle').each(function() {
    $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
});