/*网站底部返回顶部*/
$(function () {
    //header
	$(".in_news ul li:nth-child(6n)").css("margin-right", "0");
    $(".in_news .news_topa li").eq(0).addClass("on");
    $(".in_news .news_box ul").eq(0).addClass("on");
    $(".in_news .news_topa li").hover(function () {
        var index = $(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".in_news .news_box ul:eq(" + index + ")").addClass("on").siblings("ul").removeClass("on");
    })
	
	
	
	$(".in_newsb ul li:nth-child(6n)").css("margin-right", "0");
    $(".in_newsb .news_topb li").eq(0).addClass("on");
    $(".in_newsb .news_boxb ul").eq(0).addClass("on");
    $(".in_newsb .news_topb li").hover(function () {
        var index = $(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".in_newsb .news_boxb ul:eq(" + index + ")").addClass("on").siblings("ul").removeClass("on");
    })



	$(".leftfeature ul li:nth-child(3n)").css("border-right", "0");
	$(".leftfeature ul li:nth-child(4)").css("border-bottom", "0");
	$(".leftfeature ul li:nth-child(5)").css("border-bottom", "0");
	$(".leftfeature ul li:nth-child(6)").css("border-bottom", "0");


    //    字母大写
    for (var i = 0; i < $('.txt_yw').length; i++) {
        $(' .txt_yw').eq(i).text($('.txt_yw').eq(i).text().toUpperCase());
    }
})