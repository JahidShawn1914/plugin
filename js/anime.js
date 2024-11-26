$('.hoverimg').each(function(){
    $(this).cycleImages({
      cover: $(this).find('.cover'),
      gallery: $(this).find('.gallery'),
    });
 });