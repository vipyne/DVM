$(document).ready(function(){
///////////////////////////////////////////////

  $(".vote_up_button").on("click", function(e){
    e.preventDefault()
    var thisThing = $(this).parent()
    var id = $(this).attr("id")
    $.ajax({
      url: "/captions/"+id,
      type: "PUT"
    }).done(function(server_data){
      var grandParent = thisThing.parent()
      grandParent.parent().replaceWith(server_data)
      // location.reload()
    })
  })


///////////////////////////////////////////////
})
