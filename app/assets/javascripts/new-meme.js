$(document).ready(function(){
/////////////////////////////

$('.visible').hide()

$('.add-a-meme a').on('click', function(e){
  e.preventDefault()
  console.log("wtf")
    $('.visible').slideDown()
})

// containers for impact caption text
var actualPicHeight = $('img.meme_show').height()
var actualPicWidth = $('img.meme_show').width()

var picHeightBefore = $('div.height-fix').text()
var picHeight = picHeightBefore - 80
$('div.image').css('height', actualPicHeight)

var picWidthBefore = $('div.width-fix').text()
var picWidth = picWidthBefore - 80
$('div.image').css('width', actualPicWidth)

console.log('wBB:', picWidthBefore, 'hBB:', picHeightBefore)
console.log('w:', picWidth,'h:', picHeight)
console.log('meme_show pic height', actualPicWidth, actualPicHeight)

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
