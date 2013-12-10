$(document).ready(function(){
///////////////////////////////////////////////

  $(".caption_table table").on("click", "button.vote_up_button", function(e){
    e.preventDefault()
    var thisThing = $(this).parent()
    var votes = Number(thisThing.children().text())
    var id = $(this).attr("id")
    $.ajax({
      url: "/captions/"+id,
      type: "PUT"
    }).done(function(server_data){
      votes += 1
      var grandParent = thisThing.parent()
      grandParent.parent().replaceWith(server_data)
      console.log(grandParent.parent())
    })
  })

///////////////////////////////////////////////
})
