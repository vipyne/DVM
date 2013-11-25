$(document).ready(function(){



  $(".caption_form form").on('submit',function(e){
    e.preventDefault()
    var form = $(this);
    var title = form.find("textarea, input[type=text]").val()

    console.log("input title", title)

    $.ajax({
      url: '/captions',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(data){
      $("tbody").append(data)
      form.find("textarea, input[type=text]").val("");
      console.log($(".image p").text())
      if ($(".image p").text() == "") {
        $(".image p").text(title)
      }
    })
  })


  var orig_text = $(".image p").text()


  $("tbody").on('mouseover', 'tr', function(e){
    e.preventDefault
    var meme_text = $(this).children().eq(1).text()
    $(".image p").text(meme_text)
  })

  $("tbody").on('mouseout','tr', function(e){
    e.preventDefault
    $(".image p").text(orig_text)
  })


})
