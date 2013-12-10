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

