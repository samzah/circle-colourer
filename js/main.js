var $input = $('#word');
var $ball = $('.ball');

$('form').on('change', function () {
  var ballColor = $input.val();

  $ball.css('background-color', ballColor);

});
