$(function(){
  function buildHTML(message) {
    message.image ? image = `<img src=${message.image}>` : image = "";

    var html = `<div class="chat__main__body__message clearfix" msg-id = ${ message.id }>
                 <div class="chat__main__body__message--name">
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
                 </div>
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
      $('.chat__main__body__messages--list').append(html);
      $('#new_message')[0].reset();
      $('.chat__main__body').animate({scrollTop: $('.chat__main__body')[0].scrollHeight}, 'swing');
      $('.form__submit').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  });
  function getMsg() {
    var newMsgId = $('.chat__main__body__message').last().attr('msg-id');
    var url = $('#new_message').attr('action');
    $.ajax ({
      type: 'GET',
      url: url,
      data: {id: newMsgId },
      dataType: 'json'
    })
    .done(function(data){
      if (data.length == 0) return false
      data.forEach(function(msg) {
        var html = buildHTML(msg);
        $('.chat__main__body__messages--list').append(html);
      });
      $('.chat__main__body').animate({ scrollTop: $('.chat__main__body')[0].scrollHeight});
    })
  }
  setInterval(getMsg, 5000);
});

