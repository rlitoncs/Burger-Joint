$(() => {
  console.log('DOM loaded');
  $('textarea#pick_up_time').val('');

    $('.msg-box-orders').on('submit', function(e) {
      e.preventDefault();

      const $formData = $(this).serialize();

      const sendMsgBox = () => {
        const $childElem = $(this).children().first().attr('class'); // returns name of class of the child ELEM

        const $msgBox = $(`.${$childElem}`);
        $msgBox.empty();
        $messageSent=$(`
          <i class="fas fa-spinner fa-spin" 
          style="--fa-animation-duration: 1s;">
          </i>`)
        $msgBox.append($messageSent);
        
        // Simulate a loading delay
        setTimeout(() => {
          $msgBox.empty();
          $messageSent = $(`
            <span class=> Message Sent
            </span>
            <dotlottie-player class="check-player" src="https://lottie.host/2c7eefa0-172d-4bd6-973c-5aca42771e31/6lSkctMKJc.json" background="transparent" speed="1" style="display: block; height:80px;" autoplay></dotlottie-player>
            `)
          $msgBox.append($messageSent);
        }, 2000)
      }

      // Use AJAX to post data manually
      $.ajax({
        method: 'POST',
        url: $(this).attr('action'),
        data: $formData
      })
        .done(() => {
          console.log('Data has been posted')
          sendMsgBox();
        })

        .fail((err) => {
          console.log('ERROR', err);
        })
    });
})

