var minSize=5;
var maxSize=50;
var newOn=200;
var flakColor="#fff";
var flak=$("<div></div>").css({"position":"absolute","top":"-50px","background":"transparent"}).html("❆");
$(function(){
//	浏览器宽高
var documentHeight=$(document).height();
var documentWidth=$(document).width();
setInterval(function(){
//	距离左边距离，在浏览器范围之内
	var startPostionLeft=Math.random()*documentWidth;
//	雪花透明度随机，0.3为了不大于1
//最小0.7，最大1
	var startOpacity=0.7+Math.random()*0.3;
	//下降之后距离浏览器高度
	var endPositionTop=documentHeight;
	//雪花距离左边距
	var endPositionLeft=Math.random()*documentWidth;
	//下落时间随机
	var durationFall=5000+Math.random()*3000;
	var sizeFlak=minSize+Math.random()*maxSize;
	//复制雪片到页面
	flak.clone().appendTo("body").css({
		"left":startPostionLeft,
		"opacity":startOpacity,
		"font-size":sizeFlak,
		"color":flakColor,
	}).animate({
		"top":endPositionTop,
		"left":endPositionLeft,
		"opacity":0.5,
	},durationFall,function(){
//		下完之后就清除
		$(this).remove();
	});
},newOn);
});


