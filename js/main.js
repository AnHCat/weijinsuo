$(function(){ 
//	$(window).resize(function(){
//		$(".lunb .item").each(function(i,item){
//		var Width=$(window).innerWidth();
//		if(Width>768)
//		$(item).css('backgroundImage','url(img/slide_0'+(i+1)+'_2000x410.jpg)');
//		else{
//				
//				$(item).css('backgroundImage','url(img/slide_0'+(i+1)+'_640x340.jpg)');
//		}
//	});
//	});
//	$(window).trigger('resize');
//轮播体改变图片的大小
function resize(){
	var isSmallWidth=$(window).width()>768;
	$(".lunb .item").each(function(i,item){
		var $item=$(item);
		var imgSrc=isSmallWidth?$item.data('image-lg'):$item.data('image-sm');
		$item.css('backgroundImage','url("'+imgSrc+'")');
		if(isSmallWidth){
			$item.html("");
		}
		else{
			
			$item.html("<img src='"+imgSrc+"'></img>");
		}
	});
	var ulWidth=$(".ul-wrap").width()+40;
	var Srce=$(window).width();
	var Li=$(".ul-wrap").children();
	if(Srce<768){
		ulWidth=40;
			 Li.each(function(i,element){
			 	ulWidth+=$(element).width();
			 }); 		
	 		console.log(ulWidth);
	 		console.log(Srce);
	 		if(ulWidth>Srce){

	 			$(".ul-wrap").css('width',ulWidth).parent().css('overflow-x','scroll');
	 		}
	}
}
	$(window).on('resize',resize).trigger('resize');
	
	//京，泸 tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	//动态修改新闻题目
	$("#news .nav-pills a").click(function(){
		 var $this = $(this);
    // 获取对应的title值
    var title = $this.data('title');
    $("#news .news-title").html(title);
    
    //推荐模块的ul小屏幕滑动
   
	});
	
	  // 1. 获取手指在轮播图元素上的一个滑动方向（左右）



  // 获取界面上的轮播图容器
  var $carousels = $('.carousel');
  var startX, endX;
  var offset = 50;
  // 注册滑动事件
  $carousels.on('touchstart', function(e) {
    // 手指触摸开始时记录一下手指所在的坐标X
    startX = e.originalEvent.touches[0].clientX;
    // console.log(startX);
  });

  $carousels.on('touchmove', function(e) {
    // 变量重复赋值
    endX = e.originalEvent.touches[0].clientX;
    // console.log(endX);
  });
  $carousels.on('touchend', function(e) {
    console.log(e);
    // 结束触摸一瞬间记录最后的手指所在坐标X
    // 比大小
    // console.log(endX);
    // 控制精度
    // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
    var distance = Math.abs(startX - endX);
    if (distance > offset) {
      // 有方向变化
      // console.log(startX > endX ? '←' : '→');
      // 2. 根据获得到的方向选择上一张或者下一张
      //     - $('a').click();
      //     - 原生的carousel方法实现 http://v3.bootcss.com/javascript/#carousel-methods
      $(this).carousel(startX > endX ? 'next' : 'prev');
    }
  });
		
		
	
});