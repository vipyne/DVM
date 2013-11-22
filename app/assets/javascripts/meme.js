$(document).ready(function(){



  $(".caption_form form").on('submit',function(e){
    e.preventDefault()

    var form = $(this);

    $.ajax({
      url: '/captions',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(server_data){
      $(".caption_table table").append(server_data)
      form.find("textarea, input[type=text]").val("");
    })

  })


  // function add_caption(server_data){
  //   $("table").append(server_data)
  // }









})