    $('[data-magnific-popup]').each(function(i, el){
        var $el = $(el),
            popType = $el.data('magnificPopup')
        ;
        $el.magnificPopup({
            type: popType === true ? 'image' : popType,
            titleSrc : 'title'
        });
    });