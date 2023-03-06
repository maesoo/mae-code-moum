$(function(){

    var x = "위대한 디자인은 불필요한 디테일을 제거하는 작업이다.";
    var y = " "; // 글씨가 누적
    var i = 0; // 글씨의 인덱스 번호가 누적

    type();

    function type() {
        // console.log(x.length);
        if (i < x.length) {
            $(".about_inner .info h1").text(y += x[i]);
            i++;
            setTimeout(type, 100);
        } // if setTimeout
    } //function type




    
    // 스킬
function animateProgress() {
    const progressData = [
        { selector: '.html p', max: 100 },
        { selector: '.css p', max: 95 },
        { selector: '.java p', max: 80 },
        { selector: '.js p', max: 80 },
        { selector: '.pho p', max: 100 },
        { selector: '.illu p', max: 95 }
    ];

    for (let i = 0; i < progressData.length; i++) {
        let num = 0;
        let interval = setInterval(function() {
        if (num < progressData[i].max) {
            num++;
        } else {
            clearInterval(interval);
        }
            $(progressData[i].selector).css('width', `${num}%`).text(`${num}%`);
        }, 50);
    }
}


var n = 0;
var moving = false;

//마우스 휠의 동작감지 -150 120 3 -3
$("html, body").on("mousewheel DOMMouseScroll",function(e){
    console.log(e);
    var delta = e.originalEvent.wheelDelta // 익스 크롬 오페라 > 다운 -150 업 150
    var detail = e.originalEvent.detail // 파이어폭스 > 다운 3 업 -3
    console.log("delta:",delta);
    console.log("detail:",detail);
    
    
    if (moving == false){
        moving = true;
        var h = window.innerHeight;
        console.log("h:",h);
        
        var top = $(".contents").offset().top;
        if(delta == -150 || detail == 3) {//마우스 스크롤 다운
            if(n<3){
                n++;
                top -= h
            }//n<4
        }else if(delta == 150 || detail == -3){ //마우스 스크롤 업
            if(n>0){
                n--;
                top += h;
            } //n>0
        } //delta == -150 || detail == 3 //delta>0 || detail<0 스크롤 업다운 if
        console.log("n:",n);
        console.log("top:",top);
    }//moving == false

    $(".contents").animate({top:top},500,function(){
        moving = false;
        if(n != 0){
            $(".nav ,.fix_nav").addClass("show");
        }else {
            $(".nav, .fix_nav").removeClass("show");
        }

        $(".nav ul li").removeClass("on");
        $(".nav ul li").eq(n).addClass("on");
        $(" .fix_nav ul li").removeClass("add");
        $(" .fix_nav ul li").eq(n).addClass("add");
        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");
        
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            animateProgress();
        }
    })// animate
}) // mouse scroll




    //메뉴버튼+버튼그룹
    $(".nav a, .fix_nav a, .btn_group a").click(function(){
        n = $(this).parent().index();
        console.log(n);
        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");
        
        $(".nav ul li").removeClass("on");
            $(".nav ul li").eq(n).addClass("on");
            $(" .fix_nav ul li").removeClass("add");
            $(" .fix_nav ul li").eq(n).addClass("add");

        var top = (-1) * n *  window.innerHeight;
        
        $(".contents").animate({top:top},500,function(){

            if(n != 0){
                $(".fix_nav").addClass("show");
                $(".nav").addClass("show");
                $(".nav ul li").removeClass("on");
                $(".nav ul li").eq(n).addClass("on");
                $(" .fix_nav ul li").removeClass("add");
                $(" .fix_nav ul li").eq(n).addClass("add");
            }else {
                $(".fix_nav").removeClass("show");
                $(".nav").removeClass("show");
                $(".nav ul li").removeClass("on");
                $(".nav ul li").eq(n).addClass("on");
                $(" .fix_nav ul li").removeClass("add");
                $(" .fix_nav ul li").eq(n).addClass("add");
            }

            
        })//animate

    })// click


    $(".fort05").click(function(e){
        e.preventDefault();
        $(".popup_port05, .bg").show();
    })//$(".fort05").click

    $(".close_pop").click(function(e){
        e.preventDefault();
        $(".popup_port05, .bg").hide();
    })//$(".close_pop").click

    $(".fort06").click(function(e){
        e.preventDefault();
        $(".popup_port06, .bg").show();
    })//$(".fort06").click

    $(".close_pop").click(function(e){
        e.preventDefault();
        $(".popup_port06, .bg").hide();
    })//$(".close_pop").click

    resize();

    function resize(){
        var top =  (-1) * n *  window.innerHeight;
        console.log("top1:",top);
        $(".contents").css("top",top);
        $(".contents .page").css({width:innerWidth,height:innerHeight});
    }

    $(window).resize(function(){
        resize()
    })

    $(".design_list").slick({
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
        autoplay:true,
        prevArrow:false,
        nextArrow:false
    })


// 웹 영역
    var btn_tab = $(".tool_tab a.btn_tab");
    var web_list = $(".web_list");
    
    btn_tab.click(function(e){
        e.preventDefault();
        
        var nn = $(this).index();
        btn_tab.removeClass("on");
        $(this).addClass("on");

        web_list.removeClass("act");
        web_list.eq(nn).addClass("act");

    })

    $(".vid_view").click(function(){
        $(".vid").show();
    })
    $(".close").click(function(){
        $(".vid").hide();
    })




})//js close


