/*pc站视频播放*/
$(function() {
    /*切换语言*/
    $('.lang').click(function(event) {
        $(this).find('ul').stop().slideToggle();
    });
    $('.lang').mouseleave(function(event) {
        $(this).find('ul').stop().slideUp(500);
    });
    $('.lang1').click(function(event) {
        $(this).find('ul').stop().slideToggle();
    });
    $('.lang1').mouseleave(function(event) {
        $(this).find('ul').stop().slideUp(500);
    });
	/*导航下拉*/	
	$('.navWrap .navlist>li').hover(function(event) {
			$(this).children('.bigmenu').stop().slideDown(200);
	},function(){
			$(this).children('.bigmenu').stop().slideUp(200);
	});
    $('.navWrap .navlist>li').hover(function(event) {
        $(this).children('.bigmenu1').stop().slideDown(200);
    },function(){
        $(this).children('.bigmenu1').stop().slideUp(200);
    });
    $('.navWrap .navlist>li').hover(function(event) {
        $(this).children('.bigmenu2').stop().slideDown(200);
    },function(){
        $(this).children('.bigmenu2').stop().slideUp(200);
    });

});
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.batfd2').css({'top':(45+(scrolled*0.01))+'%','width':(17+(scrolled*0.08))+'%','height':(47+(scrolled*0.28))+'%','right':(40-(scrolled*0.1))+'%'});
    $('.batfd1').css({'top':(23+(scrolled*0.02))+'%','width':(25+(scrolled*0.08))+'%','height':(86+(scrolled*0.16))+'%','left':(11-(scrolled*0.06))+'%'});
}
$(window).scroll(function() {
    parallaxScroll();
});