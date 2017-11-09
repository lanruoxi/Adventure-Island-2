
// 开局动画

$(function () {
    fun()
    function fun() {
        $("#top-color .fl").animate({ top: 0 }, function () {
            $("#bBox").slideDown(200, function () {
                $("#right").animate({ top: 0 }, function () {
                    $("#aside").animate({ left: 0 })
                    $("#zongw").fadeIn()
                })
            })
        })

    }
})
// 点击logo
$("#top-color .fl").click(function () {
    $("#banner1").fadeIn().children().fadeIn();
    $("#bigpage").hide()
})



//起源角色移入事件
$(function(){
    $(".npc-list .item").mouseenter(function(){
        $(this).find("i").addClass("kuang")

        console.log(1);
    })
    $(".npc-list .item").mouseleave(function(){
        $(this).find("i").removeClass("kuang")
        console.log(1);
    })

})



// <!--         banner1 内容设置  -->
$(function () {
    //获取元素
    var fr = document.getElementById("fr");
    var list_hide = document.getElementById("list_hide");
    var pic = document.getElementById("pic");
    var zongw = document.getElementById("zongw")
    var aside = document.getElementById("aside")
    var ul = aside.children[0]
    var lis = ul.children  //侧边栏列表

    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            //排它操作
            for (var i = 0; i < lis.length; i++) {

                lis[i].style.borderBottom = ""
            }
            this.style.borderBottom = "4px solid #ffaa31"
        }

    }

    zongw.onmouseover = function () {
        arr.style.display = "block"
    }
    zongw.onmouseout = function () {
        arr.style.display = "none"
    }

    //鼠标移入移出事件操作
    fr.onmouseover = function () {
        var l_hClass = list_hide.className;
        var classArr = l_hClass.split(" ")
        var index = classArr.indexOf("hide")
        classArr[index] = "show"
        list_hide.className = classArr.join(" ")
        pic.src = "img/line2.png"
        fr.style.cursor = "pointer"
    }
    fr.onmouseout = function () {
        changeClass(list_hide, "show", "hide")
        pic.src = "img/lt.png"
        fr.style.cursor = ""

    }


    //修改类名函数
    function changeClass(element, searchValue, replaceValue) {
        //获取到标签当前的类名
        var oldClass = element.className;
        //先将获取到的类名按照" "分割，再去查看内部的每个类名部分
        var classArr = oldClass.split(" ");
        //从classArr中找到需要的部分，修改为新的类名
        var index = classArr.indexOf(searchValue);
        //设置为新的类名值
        classArr[index] = replaceValue;
        //将设置完的类名合并后，设置给className属性
        element.className = classArr.join(" ");
    }

})


// <!--         侧边栏切换  ---  -->

$(function () {
    $("#aside ul li").click(function () {
        var $index = $(this).index()
        $("#bigpage").fadeIn()

        $("#bigpage").find(".bigimg").eq($index).fadeIn(1000).siblings(".bigimg").hide()

    })


    //        $("")
})


// <!--         人物展示栏 设置  -->

$(function () {
    // 给每个角色的展示栏动态设置大图背景
    var bgArr = [5, 6, 7, 8, 0, 1, 2, 3, 4,]
    $("#npc-stage .big-pic").each(function (index, ele) {
        $(ele).css({
            background: "url(img/npc_" + bgArr[index] + "_view.png) no-repeat"
        })
    })

    //         底部图片选择栏 移入移出效果
    $("#npc-stage .btm-stage").stop().mouseenter(function () {
        $(this).animate({
            bottom: "0px"
        })
    }).stop().mouseleave(function () {
        $(this).animate({
            bottom: "-125px"
        })
    })
    // 底部图片选择栏 点击下放小图标 切换角色
    $("#npc-stage .btm-stage li").click(function () {

        var index = $(this).index()
        $("#npc-stage").find(".big-box").eq(index).fadeIn(1000).siblings(".big-box").hide()


    })

    // 右上角关闭按钮特效
    $("#npc-stage .closebtn").click(function () {
        console.log(1)
        $("#npc-stage").fadeOut(1000).children(".big-box").hide(1000)
    })

    $("#qyjs .npc-list").children("li").click(function () {
        var index = $(this).index()
        $("#npc-stage").stop().fadeIn(1000).children(".big-box").eq(index).stop().fadeIn(1000)
        // $("#npc-stage .big-pic").css({
        //     background: "url(img/npc_" + bgArr[index] + "_view.png) no-repeat"
        // })
    })
})


// <!--         侧边栏特效  +    键盘事件      -->

$(function () {
    $("#bigpage").children().hide()
    //点击侧边栏的选项切换对应的页面模块
    $("#aside li").click(function () {
        //获取点击li标签的索引
        //            var index = $(this).index()
        //点击里标签,对它的子元素的颜色进行修改
        $(this).children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
            //同时对li标签的同级兄弟元素进行还原
            .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })
        //            //对应的bigpage下的子页面进行显示,同时对其他子页面隐藏
        //            $("#bigpage").children().eq(index).fadeIn(1000).siblings().hide()
        //            //对主页进行隐藏
        $("#zongw").hide()
    })




    //   --------------------添加键盘事件------addNew---------!!!!!!!!!!!!!
    var count;
    var index = -1;
    myKey({
        leftFun: function () {
            console.log("向左")
        },
        rightFun: function () {
            console.log("向右")
        },
        downFun: function () {
            // console.log("向下")
            count = index;
            count++
            if (count >= 5) {
                count = 0
            }
            $("#bigpage").children().eq(count).fadeIn().siblings().fadeOut()
            $("#aside ul li").eq(count).children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
                .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })

            $("#zongw").hide()

            index = count;
        },
        upFun: function () {
            // console.log("向上")
            index = count
            count--
            if (count <= 0) {
                count = 0
            }
            $("#bigpage").children().eq(count).fadeIn().siblings().fadeOut()
            $("#aside ul li").eq(count).children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
                .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })
            $("#zongw").hide()
            index = count;
        }
    })
    // 键盘事件封装函数 点击上下左右=====
    function myKey(options) {
        //给document设置keydown事件
        document.onkeydown = function (e) {
            //如何判断，当前按下的按键是哪个按键呢？
            var e = e || window.event;
            //事件对象的keyCode属性，可以返回某个按键对应的唯一键盘码，数值类型
            //console.log(e.keyCode);
            //37 - 左    38 - 上   39 - 右   40 - 下
            var keyCode = e.keyCode;

            switch (keyCode) {
                case 37:
                    //事件内部，this不是我们需要的值，可以使用之前设置的that变量进行访问
                    options.leftFun && options.leftFun();
                    break;
                case 38:
                    options.upFun && options.upFun();
                    break;
                case 39:
                    options.rightFun && options.rightFun();
                    break;
                case 40:
                    options.downFun && options.downFun();
                    break;
            }
        };
    };

    //   --------------------添加键盘事件---------------!!!!!!!!!!!!!


})


// <!--       banner栏  视频背景切换-->


//第一个banner主页
$(function () {
    //声音
    $("#right").find("i").click(function () {
        $(this).toggleClass("icon-shengyintixingguan icon-shengyintixingkai")
    })
    //图片滚动
    var count = 0//记录当前显示的图片的索引值
    var $lis = $("#frame li")
    $("#arr .right").click(function () {
        count++
        //在++操作后检测count值是否超出了最大值,超出是设置为0
        //                count==$lis.length?count=0:count
        count == $lis.length && (count = 0)
        //               if(count==$lis.length){
        //                   count=0
        //               }
        $lis.eq(count).stop().fadeIn().siblings().stop().fadeOut(0)
    })
    $("#arr .left").click(function () {
        count--
        //                count==-1?count=1:count
        (count == -1) && (count = $lis.length - 1)

        $lis.eq(count).stop().fadeIn().siblings().stop().fadeOut(0)

    })

    $("#list_hide>.icon_list>.iconfont").mouseenter(function () {
        $(this).find("a").stop().slideDown(300)
    })
    $("#list_hide>.icon_list>.iconfont").mouseleave(function () {
        $(this).find("a").stop().slideUp(300)
    })

})




// <!--       li栏同步         -->

$(function () {
    $("#list_hide li").click(function () {
        var $index = $(this).index()
        //                //点击里标签,对它的子元素的颜色进行修改
        //                $("#aside li").children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
        //                    //同时对li标签的同级兄弟元素进行还原
        //                        .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })

        $("#bigpage").find(".bigimg").eq($index).slideDown(1000).siblings(".bigimg").hide()



        // addNew-------------点击同时对右侧栏进行样式操作
        $("#aside ul li").eq($index).children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
            //同时对li标签的同级兄弟元素进行还原
            .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })

    })
})


// <!--      起源角色鼠标滚轮控制图片        -->


// 起源角色的鼠标滚轮切换图片
$(function () {

    var step;
    var current;
    myWheelEvent({
        downFun: function () {
            current = $("#mask .npc-list").position().left
            $("#mask .npc-list").css({ left: current + 50 })
        },
        upFun: function () {
            current = $("#mask .npc-list").position().left
            $("#mask .npc-list").css({ left: current - 50 })

        }

    })

    // 需要的滚轮   封装函数
    function myWheelEvent(options) {
        document.body.onmousewheel = fun;
        //addEventListener使用以前的兼容性封装处理即可
        document.body.addEventListener("DOMMouseScroll", fun);
        function fun(e) {
            //如何在滚动滚轮时判断，当前滚轮滚动的方向呢？
            //判断方式通过事件对象的属性值即可检测
            //1 事件对象的兼容
            var e = e || window.event;
            //2 检测时发现，有两种属性可以获取到滚轮的方向
            console.log(e.wheelDelta, e.detail);
            var detail = e.wheelDelta || e.detail;
            //3 对detail兼容后的结果进行判断，
            // 120 和 -3 表示向上滚动
            // -120 和 3 表示向下滚动
            if (detail == 120 || detail == -3) {
                //  console.log("向上滚动的功能");
                options.upFun && options.upFun();
            } else {
                //        console.log("向下滚动的功能");
                options.downFun && options.downFun();
            }
        }
    }

    //可以通过对象方法的形式设置向上滚动和向下滚动的功能。

})


// <!--      视觉盛宴      -->
window.onload = function () {
    // 得到按钮
    var rightBtn = document.getElementById("rightBtn");
    var leftBtn = document.getElementById("leftBtn");
    // 得到所有的li
    var myLis = document.getElementById("liebiao").getElementsByTagName("li");
    // 定义一个数组
    var arr = ["stateA", "stateB", "stateC", "stateD", "stateE", "waiting", "waiting", "waiting", "waiting"];

    //锁
    var lock = true;

    //右按钮监听
    rightBtn.onclick = function () {
        //执行右按钮的时候，要判定lock
        //只有lock是真的时候，才能执行
        if (lock) {
            // 删除数组的最后一项
            var lastOne = arr.pop();
            // 添加到最前面
            arr.unshift(lastOne);
            // 让第x个li的类名，变为数组中的第x项：
            for (var i = 0; i < myLis.length; i++) {
                myLis[i].className = arr[i];
            }

            //过河拆桥
            lock = false;

            //1.2秒后，重新修个桥
            setTimeout(function () {
                lock = true;
            }, 1200);
        }
    }

    //右按钮监听
    leftBtn.onclick = function () {
        if (lock) {
            // 删除数组的第一项
            var firstOne = arr.shift();
            // 添加到最后面
            arr.push(firstOne);
            // 让第x个li的类名，变为数组中的第x项：
            for (var i = 0; i < myLis.length; i++) {
                myLis[i].className = arr[i];
            }

            //过河拆桥
            lock = false;

            //1.2秒后，重新修个桥
            setTimeout(function () {
                lock = true;
            }, 1200);
        }
    }
}


// <!--    右上角图标切换     -->

$(function () {
    $("#list_hide li").click(function () {
        var $index = $(this).index()
        //                //点击里标签,对它的子元素的颜色进行修改
        //                $("#aside li").children("span").css({ color: "#ffaa31" }).next().css({ color: "#ffaa31" })
        //                    //同时对li标签的同级兄弟元素进行还原
        //                        .parent().siblings().children("span").css({ color: "#727680" }).next().css({ color: "#727680" })

        $("#bigpage").find(".bigimg").eq($index).slideDown(1000).siblings(".bigimg").hide()


    })
})


// <!--    小箱子     -->

$(function () {
    // $("#bBox ul li").mouseenter(function () {
    //     $(this).css("color", "#ffaa31").prevAll().css("color", "#ffaa31").end().nextAll().css("color", "")
    // })
    // $("#bBox ul").mouseleave(function () {
    //     $("#bBox ul li").css("color", "")
    // })

})
$(function () {
    $("#bBox ul li.iconfont").click(function () {


        $(this).css("color", "#ffaa31").prevAll().css("color", "#ffaa31").end().nextAll().css("color", "")
        var index = $(this).index();
        console.log(index)
        $("#mxd").fadeIn(1000).nextAll().hide()
        $("#mxd .page").eq(index / 2 - 1).fadeIn(1000).siblings().hide()
        $("#zongw").hide()


    })



})



// <!--      冒险岛与神之战争       -->

$(function () {
    var count = 1;
    $("#mxd .btn").click(function () {
        count = count == 4 ? count = 0 : count
        $("#mxd").find(".page").eq(count++).fadeIn(1000).siblings(".page").fadeOut(1000)
    })
})


// <!--    播放按钮变色        -->

$(function () {
    $("#frame .bofang ").mouseenter(function () {
        //设置播放按钮变色  btn  video3
        $("#frame .bofang").css({
            background: "url(img/btn_video_3.png) no-repeat",
            cursor: "pointer"
        })
    }).mouseleave(function () {
        $("#frame .bofang").css("background", "url(img/btn_video_2.png) no-repeat")
    })
})


// <!--     冒险序曲  -->

$(function () {
    var $blockBox = $("#mxxq ul li .blockBox a");
    var $lis = $("#mxxq ul li")
    $blockBox.mouseenter(function () {
        $(this).parents("li").css({
            width: "850",
        })

        $(this).parent().siblings().css("display", "block");
        return false;
    })
    $blockBox.mouseleave(function () {
        $(this).parents("li").css({
            width: "274",
        });
        $(this).parent().siblings().css("display", "none");
        return false;
    })
})

// <!--     冒险序曲滚动设置     -->

$(function () {
    var $scrollBar = $(".scrollBox span");
    var $neirong = $(".inner");

    //让jQuery自动帮我们算出一些数值
    var boxWidth = $(".box").width();
    var neirongWidth = $neirong.width();

    //自动计算滑块应该有的高度
    var scrollBarWidth = (boxWidth / neirongWidth) * boxWidth;
    $scrollBar.css("110", scrollBarWidth);

    var nowTop = 0;

    $(".scrollBox span").draggable(
        {
            "containment": "parent",
            "axis": "x",
            drag: function (event, ui) {
                //当drag的时候，做什么
                //滑块位置
                var scrollBarY = ui.position.left;
                //数学之美
                nowTop = -(neirongWidth - boxWidth) * scrollBarY / (boxWidth - scrollBarWidth);

                $(".inner").css("left", nowTop);
            }
        }
    );

    $(".box").mousewheel(function (event, delta) {
        //阻止默认滚动
        event.preventDefault();
        //delta表示滚轮方向。往下滚，-1；往上滚是1。
        nowTop = nowTop + delta * 20;
        //数学之美
        var scrollBarY = nowTop * (boxWidth - scrollBarWidth) / (neirongWidth - boxWidth);
        $neirong.css("left", nowTop);
        $scrollBar.css("left", -scrollBarY);
    });
})





// <!--     平行世界logo返回主页    -->

//        $(function(){
//            $("#top-color .fl").click(function(){
//                $("body").find("#banner1").fadeIn(1000).siblings().hide()
//            })
//        })


// <!--     more++         -->

$(function () {
    $("#bottom .more").click(function () {
        $("#bigpage").find(".bigimg").eq(0).fadeIn(1000)
    }).mouseenter(function () {
        $(this).css("cursor", "pointer")
    })
})









// 视频控制都在这里啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
$(function(){
// 视频操作
var srcS=[]
addVideo($(".to-video1"))
addVideo($(".to-video"))
addVideo($(".bt111"))
    addVideo($(".btn"))

    var media = $(".media")[0];
    var audioTimer = null;

//    视频框引用函数
//    *
//    * @param {any} $ele   $对象
//    */
    function addVideo($ele) {
        $ele.click(function () {

            $("#video1").fadeIn(1000).find("embed").attr("src",$(this).attr("src") )
            $("#video1").fadeIn(1000).find("video").attr("src",$(this).attr("src") )

        })

        $("#video1 .closebtn").click(function () {
            console.log(1)
            $("#video1").hide()
            pause()
            var audioTimer = null;
        })
    }
    var media = $(".media")[0];
    var audioTimer = null;
//播放暂停切换
    function playAudio() {
        if(media.paused) {
            play();
        } else {
            pause();
        }
    }
//播放
    function play() {
        media.play();
        $('#play').html('Pause');
    }

//暂停
    function pause() {
        media.pause();
        $('#play').html('Play');
    }
})








// 音频控制在这

$(function(){
    var audio = document.createElement("audio");
    audio.src = "img/jmhh.mp3";

    $(".blockBox .music1").click(function(){
        
        if(audio!==null){             
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
            audio.paused
          if(audio.paused)                     {                 
              audio.play();//audio.play();// 这个就是播放  
          }else{
           audio.pause();// 这个就是暂停
          }
         }
    })
})










