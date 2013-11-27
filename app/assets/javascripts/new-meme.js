// commented code is evil.
$(document).ready(function(){
/////////////////////////////

$('.visible').hide()

$('.add-a-meme a').on('click', function(e){
  e.preventDefault()
  console.log("wtf")
    $('.visible').slideDown()
})

/////////////////////////////
})

////// possible future easter egg?? ///////////////
///////////////////////////////////////////////////
// <a href="http://www.cornify.com"
// onclick="cornify_add();return false;">
// <img src="http://www.cornify.com/assets/cornify.gif"
// width="61" height="16" border="0" alt="Cornify" />
// </a>

// <script type="text/javascript" src="http://www.cornify.com/js/cornify.js"></script>
///////////////////////////////////////////////////
