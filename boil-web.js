/**
 *
 */
var tag=true;


function down(c){
    $("#"+c).slideDown("slow");
}

function up(b){
    $("#"+b).slideUp("slow");
}

function scroll(a) {
    $("html,body").animate({scrollTop:$("#"+a).offset().top}, 1000);
}

function myslide(){
    if(tag){
        $(".self-btn").on({click:down("more")},{click:scroll("job")});//绑定两个操作不能直接安操作顺序书写，需要用toggle或者bind
        $(".self-btn").animate({width:"1140",opacity:"0.6"},1500,
            function(){
            $(".plant").animate({top:$(".back").position().top},900)
            });
    }
    else{
        $(".self-btn").on("click",up("more"));
        $(".self-btn").animate({width:"100px",opacity:"1"},1000,
            function(){
            $(".plant").animate({top:$(".back").position().top},500)
            });
    }
    $(".plant").css("top",$(".back").position().top);
    tag=!tag;
}

//myslide修正slidToggle打开时web位置,拆开来做打开关闭的效果。bug第一次点击没有响应

/**
 * Created by wwtliu on 14/10/14.
 */
var tipmove ={
    init:function(){
        this.lessImgShow();
    },
    stopEventBubble:function(event){
        var e= event;
        if(e){
            e.stopPropagation();
        }
    },
    lessImgShow:function(){
        $('.lessonimgbox').bind("mouseover",function(e){
            var _pop = $(this).find('.img-pop');
            TweenMax.to(_pop,0.5,{top:200,ease:Bounce.easeOut});
            tipmove.stopEventBubble(e);
        });

        $(document).bind("mouseover",function(){
            var _pop = $(this).find(".img-pop");
            TweenMax.to(_pop,0.5,{top:500,ease:Linear.easeNone});
        })

    }

};












$(function(){
    tipmove.init();
});






$(document).ready(function(){
    $(".self-btn").on("click",myslide);
    $(".back").click(function(){
        scroll("head");
        $(".plant").animate({top:"700px"},900,function(){
            $(".plant").animate({top:$(".back").position().top},900)


        });

    })




});