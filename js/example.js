let idx = 0;

function ani(){

    $('html').stop().animate({
        scrollTop: $(window).height()*idx
    },500,function(){
        console.log('애니가 끝났으니 다른 명령 실행')
    })//

    $(".nav ul li").removeClass("on");
    $(".nav ul li").eq(n).addClass("on");
    $(" .fix_nav ul li").removeClass("add");
    $(" .fix_nav ul li").eq(n).addClass("add");
    $(".btn_group li").removeClass("on");
    $(".btn_group li").eq(n).addClass("on");



}

$('btn_group a').click(function(){
    event.preventDefault();
    idx = $(this).index();
    ani();
})



let offset = 0;
$('section').on('mousewheel', function(e){
    //try는 에러가 뜰때 실행을 하지 않는다.
    try{
        if(e.originalEvent.wheelDelta<0){
            //스크롤 내릴때
            //offset= $(this).next().offset().top; //top과 left만 쓰임
            idx = $(this).next().index();
        }else{
            //스크롤 올릴때
            //offset= $(this).prev().offset().top;
            idx = $(this).prev().index();
        }
        ani();
    }catch{
        console.log('더이상 컨텐츠가 없습니다.')
    }
})
