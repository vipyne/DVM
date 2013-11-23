$(document).ready(function(){
/////////////////////////////

$('.visible').hide()

$('.add-a-meme a').on('click', function(e){
  e.preventDefault()
  console.log("wtf")
    $('.visible').slideDown()
})

// containers for impact caption text
var picHeightBefore = $('div.height-fix').text()
var picHeight = picHeightBefore - 80
$('div.image').css('height', picHeight)

var picWidthBefore = $('div.width-fix').text()
var picWidth = picWidthBefore - 80
$('div.image').css('width', picWidth)

console.log('hBB:', picHeightBefore,'wBB:', picWidthBefore)
console.log('h:', picHeight,'w:', picWidth)

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
