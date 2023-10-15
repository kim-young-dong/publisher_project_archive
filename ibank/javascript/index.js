
$(window).scroll(function(){
var scr=$(window).scrollTop();
console.log("스크롤위치값: "+scr);
if(scr<500){
$("div.headerWrap").css({display:"none"});
$("div.headerWrap").fadeOut();
}else{
$("div.headerWrap").css({display:"block"});
}
})
