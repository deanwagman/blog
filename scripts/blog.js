/* blog.js */



$('img').on('click', function(){
	var src, img, box;
	src = $(this).attr('src');
	img = $("<img></img>").attr('src', src);
	box = $('.lightbox')
		.empty()
		.append(img)
		.addClass('active');
	box.on('click',function(){
		box.removeClass('active');
	});
});


