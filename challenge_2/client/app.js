let post = function() {
    $.ajax({
        type: "POST",
        url: '/',
        data: $('textarea').val(),
        success: function(response) {
            console.log('Successfully posted: ' + response);
        },
        contentType: 'application/json',
      });
}






//Add Event Handlers
$('button').on('click', post)
