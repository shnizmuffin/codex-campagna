$(document).foundation();
$(document).ready(function() {

  $('.table-of-contents').toc({
    content: '.content',
    headings: 'h2,h3'
  });

  $('.content h1, .content h2, .content h3, .content h4, .content h5, .content h6').each( function () {
    var id = $(this).attr('id');
    $(this).parent().attr('data-magellan-target', id);
  });

  $('.table-of-contents a').attr('data-close', '');
});
