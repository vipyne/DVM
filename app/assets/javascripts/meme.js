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

  var orig_text = $(".image p").text()

  $(".caption_table tr").on('mouseover',function(e){
    e.preventDefault
    var meme_text = $(this).children().eq(1).text()
    $(".image p").text(meme_text)
  })

  $(".caption_table tr").on('mouseout',function(e){
    e.preventDefault
    $(".image p").text(orig_text)
  })

  // $(window).scroll(function(e){
  //   var y = $(this).scrollTop()
  //   console.log(y)
  //   if (y > 72)
  //     {
  //       $("#meme_box").attr('class','meme_stop')
  //     }
  //   else
  //     {
  //       $("#meme_box").attr('class','meme')
  //     }
  // })
})