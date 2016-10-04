var cards;
var matchingGame = {};
window.onload = function(){
    demo1Init();
    cards = $("#cards>.card:first-child").clone();
    $("#show-demo1").click(showDemo1);
    $('#show-demo2').click(demo2Init);
};

function demo1Init(){
    var deck = puker.AllCards.concat(puker.KingsA).concat(puker.KingsB);
    for(var i = 0; i<deck.length; i++){
        $('#cards-show>.card:first-child').clone().appendTo('#cards-show');
    }
    console.log(deck);
    $('#cards-show').children().each(function(index){
        var pattern = deck.shift();
        $(this).find('.front').addClass(pattern).attr("title",pattern);
        console.log(pattern);
    });
}


function showDemo1(){
   $('#demo02').hide();
   $('#demo01').show();
}

function demo2Init(){
    $('#demo01').hide();
    $("#popup").addClass("hide");
    $('#demo02').show();

    matchingGame.elapsedTime = 0;

    matchingGame.timer = setInterval(countTimer, 1000);

    var deck = [];
    deck = puker.chooseCards(6);
    deck = deck.concat(deck);
    //洗牌： 把12张扑克牌随机打乱顺序
    puker.shuffle(deck);
    
    $('#cards').empty();
    //复制12张牌
    for(var i=0; i<=11; i++){
        cards.clone().appendTo("#cards");
    }
    //初始化每张牌的位置
    $('#cards').children().each(function(index){
        //让纸牌以4*3的形式对齐
        $(this).css({
            "left": ($(this).width() + 20) * (index % 4),
            "top": ($(this).height() + 20) * Math.floor(index / 4),
        });
        //从已经洗过的纸牌中获取图案
        var pattern = deck.pop();
        //应用纸牌的背面图案，并让其可见
        $(this).find(".back").addClass(pattern);
        //把图案数据嵌入DOM元素中
        $(this).attr("data-pattern", pattern);
        //监听每张纸牌DIV元素的单击事件
        $(this).click(selectCard);
    });    
}

function countTimer(){
    matchingGame.elapsedTime++;
    var minute = Math.floor(matchingGame.elapsedTime / 60);
    var second = matchingGame.elapsedTime%60;
    if(minute < 10) minute = "0" + minute;
    if(second < 10) second = "0" + second;
    $("#elapsed-time").html(minute+":"+second);

}
//以下的demo2的逻辑实现
function selectCard(){
    //如果已经翻开了两张纸牌：
    if($('.card-flipped').length > 1){
        return;
    }
    $(this).addClass("card-flipped");
    //0.7秒后，检测两张已翻开的牌的图案
    if($(".card-flipped").length == 2){
        setTimeout(checkPattern, 700);
    }
}

function checkPattern(){
    if(isMatchPattern()){
        $('.card-flipped').removeClass('card-flipped').addClass('card-removed');
        $('.card-removed').bind("webkitTransitionEnd", removeTookCards);
    } else {
        $('.card-flipped').removeClass('card-flipped');
    }
}

function isMatchPattern(){
    var cards = $('.card-flipped');
    var pattern = $(cards[0]).data('pattern');
    var anotherPattern = $(cards[1]).data('pattern');
    return (pattern == anotherPattern);
}

//已配对纸牌删除
function removeTookCards(){
    $('.card-removed').remove();

    //检测是否所有纸牌都移除并显示游戏结束画面
    if($("#cards>.card").length == 0){
        gameover();
    }
}

function gameover(){
    clearInterval(matchingGame.timer);
    $(".score").html($("#elapsed-time").html());

    var lastElapsedTime = localStorage.getItem("last-elapsed-time");

    var minute = Math.floor(lastElapsedTime/60);
    var second = lastElapsedTime%60;

    if(minute < 10) minute = "0" + minute;
    if(second < 10) second = "0" + second;

    $(".last-score").html(minute + ":" + second);
    

    $("#popup").removeClass("hide");

    if(lastElapsedTime == 0 || matchingGame.elapsedTime < lastElapsedTime){
        localStorage.setItem("last-elapsed-time", matchingGame.elapsedTime);
        $(".ribbon").removeClass("hide");
    } else {
        $(".ribbon").addClass("hide");
    }
}
