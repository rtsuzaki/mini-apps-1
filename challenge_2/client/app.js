let csvToggle = true;

let post = function() {
    $.ajax({
        type: "POST",
        url: '/',
        data: $('#jsonInput').val(),
        success: function(response) {


            let splitResponse = response.split('<br />')
            let rows = splitResponse.map((el)=> {
                return el.split(',')
            })
            rows.pop();
            console.log(rows)
            rowsCopy = rows.slice();
            for (var i = 0; i < rowsCopy.length; i++) {
                rowsCopy[i].shift();
            }
            let list = rowsCopy.join('<br />');
            console.log(rowsCopy)


            let headers = rows[0];
            headers.forEach((el)=>{
                $('tr').last().append(`<th style="border: 1px solid black;">${el}</th>`);
            })
            for (var i = 1; i < rows.length; i++) {
                $('#results').append('<tr></tr>')
                rows[i].forEach((cell) => {
                    $('tr').last().append(`<td style="border: 1px solid black;">${cell}</td>`)
                })
            }
            
            $('#csvResults').html(list)
        },
        contentType: 'application/json',
      });

    //Reset text area 
    $('#jsonInput').val('')
}

//Add Event Handlers
$('#submitButton').on('click', post)