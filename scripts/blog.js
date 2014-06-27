/* blog.js */

var win = $(window);

//if the articles scrollHeight is more than the scrolltop + wh - 200px, or less than scrolltop + 200px then blur.

var articles = $('article');

function updateBlur(){
	console.log("scrolled");
	var scrollPosition = win.scrollTop();
	articles.each(function(article){
		if(article.position().top >  scrollPosition - 200){
			article.addClass('blurred');
		}
	});
}

$(window).on('scroll', function(){
	console.log("scrolled");
	articles.each(function(index){
		var offset = $(this).offset();
		if(offset.top >  $(window).scrollTop() + window.innerHeight - (window.innerHeight * 0.15)){
			$(this).addClass('inverted');
		}else{
			$(this).removeClass('inverted');
		}
	});
});




$('img').on('click', function(){
	var src, img, box, close;
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

$('.blurred').on('click',function(){
	$(this).toggleClass('blurred');
});




