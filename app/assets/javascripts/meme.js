$(document).ready(function(){

  $(".caption_form").on('submit',function(e){
    e.preventDefault()

    $.ajax({
      url: '/captions',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(server_data){
      $("table").append(server_data)
      $("#caption_title").val("")
      $("#caption_signature").val("")
    })

  })


  // function add_caption(server_data){
  //   $("table").append(server_data)
  // }









})