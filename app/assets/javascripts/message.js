$(document).on('turbolinks:load', function(){
$(function(){
  function buildHTML(message) {
    //${ message.image.url }
    if (message.image) {
      var image = `<img src=${message.image}>`;
      console.log(image);
    } else {
      var image = "";
    }
   var html = `<div class="chat__main__body__message--name">
                 ${message.user_name}
               </div>
               <div class="chat__main__body__message--time">
                 ${message.time}
               </div>
               <div class="chat__main__body__message--text">
                 <p class="lower-message__content">
                 ${message.content}
                 </p>
               ${image}
               </div>`
      return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat__main__body__message').append(html);
      $('#message_image').val('');
      $('.form__message').val('');
      $('.chat__main__body').animate({scrollTop: $('.chat__main__body')[0].scrollHeight}, 'swing');
      $('.form__submit').prop("disabled", false)
    })
    .fail(function(){
      alert('error');
    })
  })
});
return false
});
