$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
});

// Tabs
$('#home-tab').hover(function() {
  $('#home').addClass( "active show" )
}, function() {
  $('#home').removeClass( "active show" )
});
$('#home').hover(function() {
  $(this).addClass( "active show" )
}, function() {
  $(this).removeClass( "active show" )
})

$('#profile-tab').hover(function() {
  $('#profile').addClass( "active show" )
}, function() {
  $('#profile').removeClass( "active show" )
});
$('#profile').hover(function() {
  $(this).addClass( "active show" )
}, function() {
  $(this).removeClass( "active show" )
})

$('#contact-tab').hover(function() {
  $('#contact').addClass( "active show" )
}, function() {
  $('#contact').removeClass( "active show" )
});
$('#contact').hover(function() {
  $(this).addClass( "active show" )
}, function() {
  $(this).removeClass( "active show" )
})
