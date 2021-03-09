$('input').on('change', function () {
    var v = $(this).val();
    $('item').css('font-size', v + 'px')
});
