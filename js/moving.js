/* main.js */

$(document).ready(function(){
    //윈도우 시작하면 화면 맨위로 이동
    $("body,html").stop().animate({"scrollTop" : 0},1500,"swing");

    var wt = $(window).width();
    $("#container > div").width(wt);

    //container 가로크기만큼 body의 높이값 지정
    var Length = $("#container > div").length; //10
    var containerWid = wt * Length;
    $("body").height(containerWid);

    var start = setTimeout(function(){ //맨처음 시작
        $("#content1 > section").addClass("on");
    },500);

    var lastScrollTop = 0; //마지막 스크롤값

    //스크롤이 움직일때
    $(window).scroll(function(){
        
        // var scroll = $(window).scrollTop(); //현재 scroll 위치값
        // $("#container").css({"transform":"translateX(-" + scroll + "px)"})

        var winW = $(window).width();
        var winH = $(window).height();

        var H = containerWid - winH;
        var W = containerWid - winW;
        var R = W / H; //가로세로 비율

        var scrollTop = $(window).scrollTop(); //현재scroll위치값
        var scrollR = scrollTop * R;
        console.log(scrollTop);

        $("#container").css({"transform":"translateX(-" + scrollR + "px)"}); //가로세로 비율만큼 스크롤이동

        //캐릭터 움직이기
        if(scrollTop > lastScrollTop){
            // 스크롤 내릴때
            // 현재 스크롤값 scroll이 이전 스크롤값 lastScroll 보다 크냐
            $(".character").removeClass("left");
            $(".character").addClass("on");
            $(".follow").removeClass("on");
        }else{
            // 스크롤 올릴때
            // 현재 스크롤값 scroll이 이전 스크롤값 lastScroll 보다 작다
            $(".character").addClass("left");
            $(".character").addClass("on");
        }

        // 1번 글씨 나타났다 사라지기
        if(scrollTop > 1000 && scrollTop < 2000){
            $(".oneclick").addClass("on");
        }else{
            $(".oneclick").removeClass("on");
        }

        // 2번 글씨 나타났다 사라지기
         if(scrollTop > 4000 && scrollTop < 5000){
            $(".twoclick").addClass("on");
        }else{
            $(".twoclick").removeClass("on");
        }

        // 3번 글씨 나타났다 사라지기
        if(scrollTop > 7000 && scrollTop < 8000){
            $(".threeclick").addClass("on");
        }else{
            $(".threeclick").removeClass("on");
        }

        // 4번 글씨 나타났다 사라지기
        if(scrollTop > 9500 && scrollTop < 10500){
            $(".fourclick").addClass("on");
        }else{
            $(".fourclick").removeClass("on");
        }

        // 5번 글씨 나타났다 사라지기
        if(scrollTop > 11500 && scrollTop < 12500){
            $(".fiveclick").addClass("on");
        }else{
            $(".fiveclick").removeClass("on");
        }

        // 6번 글씨 나타났다 사라지기
        if(scrollTop > 13000 && scrollTop < 14000){
            $(".sixclick").addClass("on");
        }else{
            $(".sixclick").removeClass("on");
        }

        // 7번 글씨 나타났다 사라지기
        if(scrollTop > 15500 && scrollTop < 16500){
            $(".sevenclick").addClass("on");
        }else{
            $(".sevenclick").removeClass("on");
        }

        // 8번 글씨 나타났다 사라지기
        if(scrollTop > 17000 && scrollTop < 18000){
            $(".eightclick").addClass("on");
        }else{
            $(".eightclick").removeClass("on");
        }


        lastScrollTop = scrollTop;

        // 스크롤이 멈추면 0.5초 뒤에 애니메이션이 멈춰라
        clearTimeout( $.data(this,"scrollCheck"));

        $.data(this,"scrollCheck", setTimeout(function(){
            $(".character").removeClass("on"); 
        },500));

        //content1
        if(scrollTop >= wt*0 && scrollTop < wt*1){
            // 내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{//움직임 취소
            $("#content1 > section").removeClass("on");
        }

        //content2
        if(scrollTop >= wt*1 && scrollTop < wt*2){
            // 내용물 움직임 시작
            $("#content2 > section").addClass("on");
        }else{//움직임 취소
            $("#content2 > section").removeClass("on");
        }

    }); //scroll

    $(document).keydown(function(e){ //이벤트 객체
        if(e.keyCode == 39){ //오른쪽 방향키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow + 50);
        }

        if(e.keyCode == 37){ //왼쪽 방향키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow - 50);
        }

    })

    /* 팝업창 띄우기 */
    var screenX = window.screenX;
    var screenY = window.screenY;
    console.log(screenX);
    console.log(screenY);
    
    /* basicInfo */
    $("#content2 > section > img:nth-child(2)").click(function(){
        $("#basicInfo").addClass("active");
        $("#basicInfo").addClass("on");
    });

    $("#basicInfo > .box > img:nth-child(2)").click(function(){
        $("#basicInfo").removeClass("active");
    });

    /* samsungElec */
    $("#content3 > section > img:nth-child(2)").click(function(){
        $("#samsungElec").addClass("active");
        $("#samsungElec").addClass("on");
    });

    $("#samsungElec > .box > img:nth-child(2)").click(function(){
        $("#samsungElec").removeClass("active");
    });

    /* cjoneWeb */
    $("#content5 > section > img:nth-child(2)").click(function(){
        $("#cjoneWeb").addClass("active");
        $("#cjoneWeb").addClass("on");
    });

    $("#cjoneWeb > .box > img:nth-child(2)").click(function(){
        $("#cjoneWeb").removeClass("active");
    });

    $("#content5 > section > img:nth-child(11)").click(function(){
        $("#cjoneWeb").addClass("active");
        $("#cjoneWeb").addClass("on");
    })

    /* thetastableWeb */
    $("#content6 > section > img:nth-child(9)").click(function(){
        $("#thetastableWeb").addClass("active");
        $("#thetastableWeb").addClass("on");
    });

    $("#thetastableWeb > .box > img:nth-child(1)").click(function(){
        $("#thetastableWeb").removeClass("active");
    });

    /* homecent */
    $("#content7 > section > img:nth-child(8)").click(function(){
        $("#homecent").addClass("active");
        $("#homecent").addClass("on");
    });
    
    $("#content7 > section > .smalllightset1").click(function(){
        $("#homecent").addClass("active");
        $("#homecent").addClass("on");
    });

    $("#content7 > section > .smalllightset2").click(function(){
        $("#homecent").addClass("active");
        $("#homecent").addClass("on");
    });

    $("#homecent > .box > img:nth-child(1)").click(function(){
        $("#homecent").removeClass("active");
    });

    /* rolexUI */
    $("#content8 > section > img:nth-child(10)").click(function(){
        $("#rolexUI").addClass("active");
        $("#rolexUI").addClass("on");
    });

    $("#rolexUI > .box > img:nth-child(1)").click(function(){
        $("#rolexUI").removeClass("active");
    });

    /* pureCSS */
    $("#content9 > section > img:nth-child(8)").click(function(){
        $("#pureCSS").addClass("active");
        $("#pureCSS").addClass("on");
    });

    $("#pureCSS > .box > img:nth-child(1)").click(function(){
        $("#pureCSS").removeClass("active");
    });

    /* contactME */
    $("#content10 > section > img:nth-child(7)").click(function(){
        $("#contactME").addClass("active");
        $("#contactME").addClass("on");
    });

    $("#contactME > .box > img:nth-child(1)").click(function(){
        $("#contactME").removeClass("active");
    });



});