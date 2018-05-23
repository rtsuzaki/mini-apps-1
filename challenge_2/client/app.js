let post = function() {
    $.ajax({
        type: "POST",
        url: '/',
        data: $('#jsonInput').val(),
        success: function(response) {
            console.log(response);
            // var split = response.split(',')
            // console.log(split);
            // split.forEach((el)=> {
            //   if (el !== )
            //   $('#results').append("<td>"+el+"</td>")
            // })
            $('#results').html(response)
        },
        contentType: 'application/json',
      });
    $('#jsonInput').val('')
}

//Add Event Handlers
$('#submitButton').on('click', post)