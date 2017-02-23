$(document).foundation();
$(document).ready(function() {

  $('.table-of-contents').toc({
    content: '.content',
    headings: 'h2,h3'
  });

  $('.content h1, .content h2, .content h3, .content h4, .content h5, .content h6').each(function() {
    var id = $(this).attr('id');
    $(this).parent().attr('data-magellan-target', id);
  });

  $('.table-of-contents a').attr('data-close', '');

  $('.accordion h4').click(function() {
    $(this).siblings().slideToggle();
  });

  //http://git.wimbarelds.nl/TimeCircles
  $('.timer').TimeCircles({
    start: false,
    count_past_zero: false,
    animation: 'smooth', // smooth or ticks.
    circle_bg_color: '#e0f1ff',
    fg_width: 0.1,
    bg_width: 0.8,
    time: {
      Days: {
        show: false,
        color: '#428bca'
      },
      Hours: {
        show: false,
        color: '#428bca'
      },
      Minutes: {
        show: true,
        color: '#428bca'
      },
      Seconds: {
        show: true,
        color: '#428bca'
      }
    }
  }).restart().stop();
  $('.timer-start').click(function() {
    $('.timer').TimeCircles().start();
  });
  $('.timer-stop').click(function() {
    $('.timer').TimeCircles().stop();
  });
  $('.timer-restart').click(function() {
    $('.timer').TimeCircles().restart().stop();
  });
});

