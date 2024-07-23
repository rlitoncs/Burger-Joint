
$(() => {
  $('#fetch-orders').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/orders'
    })
    .done((response) => {
      const $ordersList = $('#orders');
      $ordersList.empty();

      for(const order of response.orders) {
        $(`<li class="order">`).text(order.id).appendTo($ordersList);
      }
    });
  });
});