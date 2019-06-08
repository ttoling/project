;
(function ($) {
    "use strict";

    $.fn.banner = function (options) {
        var {
            items,
            left,
            right,
            list,
            autoPlay,
            delayTime,
            moveTime,
            index
        } = options;
        list = list === false ? false : true;
        autoPlay = autoPlay === false ? false : true;
        delayTime = delayTime || 2000;
        moveTime = moveTime || 200;
        index = index || 0;
        let iPrev = items.length - 1;
        if (left != undefined && left.length > 0 && right != undefined && right.length > 0) {
            console.log("有左右按钮")
            //绑定事件
            left.click(leftEvent)
            right.click(rightEvent)
        }
        function leftEvent(){
            if (index == 0) {
                index = items.length - 1;
                iPrev = 0;
            } else {
                index--;
                iPrev = index + 1;
            }
            move(1)
        }
        function rightEvent() {
            if (index == items.length - 1) {
                index = 0;
                iPrev = items.length - 1;
            } else {
                index++;
                iPrev = index - 1;
            }
            move(-1)
        }
        let move = function (direct) {
            items.eq(iPrev).css({
                left: 0
            }).stop().animate({
                left: items.eq(0).width() * direct
            }, moveTime).end().eq(index).css({
                left: -items.eq(0).width() * direct
            }).stop().animate({
                left: 0
            }, moveTime)

            list && $(".list").children().eq(iPrev).css({
                background: "#999"
            }).end().eq(index).css({
                background: "#fff"
            })
        }

            if (list) {
                var str = "";
                for (var i = 0; i < items.length; i++) {
                    str += `<li></li>`
                }
                this.append($("<ul class='list'>").html(str));
                $(".list").css({
                    width: "100%",
                    textAlign:"center",
                    height: 10,
                    position: "absolute",
                    left: "50%",
                    bottom: 10,
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display:"flex"
                }).children().css({
                    height:10,
                    width:10,
                    borderRadius:10,
                    background:"#999",
                    marginLeft:3,
                    marginRight:3,
                    textAlign: "center"
                }).eq(index).css({
                    background: "#fff"
                })


                function move(direct, iPrev, iNow) {
                    items.eq(iPrev).css({
                        left: 0
                    }).stop().animate({
                        left: -items.eq(0).width() * direct
                    }, moveTime).end().eq(iNow).css({ //end返回上一步
                        left: items.eq(0).width() * direct
                    }).stop().animate({
                        left: 0
                    }, moveTime)
                }
                $(".list").children("li").click(function () {
                    // 计算索引
                    if ($(this).index() > index) { //向左
                        move("1", index, $(this).index())
                    }
                    if ($(this).index() < index) { //向右
                        move("-1", index, $(this).index())
                    }
                    $(".list").children("li").eq(index).css({
                        background: "#999"
                    }).end().eq($(this).index()).css({
                        background: "#fff"
                    })
                    index = $(this).index(); //让点击的li的索引等于index；
                })
            }
            //是否自动播放：
            if (autoPlay) {
                let timer;
                timer = setInterval(() => {
                    // 如果没有传左右按钮就没有自动轮播效果
                    // right.trigger("click")
                    rightEvent()
                }, delayTime);
                this.hover(function () {
                    clearInterval(timer)
                }, function () {
                    timer = setInterval(() => {
                        // right.trigger("click")
                        rightEvent()
                    }, delayTime);
                })
            }

            console.log(this) //jQuery.fn.init [div.box.banner1,这里的this指向banner1

    }
        console.log("插件启动成功")
})(jQuery);