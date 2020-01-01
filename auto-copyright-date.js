//HTML
//The static date is in place in the event the user has js turned off
<div class="copyright">
  <p>&copy; 2001 - <span class="current-yr">2020</span> YOUR NAME OR COMPANY NAME</p>
</div>

// Plain JavaScript 
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
var yrSpan = document.getElementsByClassName('current-yr')[0]
yrSpan.innerHTML = copyRightYr;


// Using jQuery
var thisYear = new Date();
var copyRightYr = thisYear.getFullYear();
$('.current-yr').html(copyRightYr);
