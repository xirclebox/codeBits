// Plain JavaScript 
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
document.getElementById('YOUR ELEMENT ID').innerHTML="© 2010 - " + copyRightYr + " YOUR NAME";

// Using jQuery
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
$('YOUR ELEMENT ID OR CLASS').html("© 2010 - " + copyRightYr + " YOUR NAME");