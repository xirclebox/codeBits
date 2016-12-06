//HTML
//The static date is in place in the event the user has js turned off
<div class="copyright" aria-label="copyright"><p>&copy; 2001 - <span class="yr">2016</span> YOUR NAME OR COMPANY NAME</p></div>

// Plain JavaScript 
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
var yrSpan = document.getElementsByClassName('yr')[0]
yrSpan.innerHTML = copyRightYr;


// Using jQuery
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
$('.yr').html(copyRightYr);
