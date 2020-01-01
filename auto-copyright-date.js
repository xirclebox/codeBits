//HTML
<div class="copyright">
  <p>&copy; 2001 - <span class="current-yr"></span> YOUR NAME OR COMPANY NAME</p>
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
