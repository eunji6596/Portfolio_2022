/* main.js */

$(document).ready(function(){
    // start 버튼 눌렀을때 3차원으로 화면 회전
    $("#main > section > .cont > p:nth-child(2) > a").click(function(){
        $("#main > section").attr("perspective : 300px");
    })

});