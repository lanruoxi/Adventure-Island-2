// 轮播图=======================================================

var box = document.getElementById("bannBox");
var screenBox = box.children[0];
var imgWid = screenBox.offsetWidth;
console.log(imgWid)
var ul = screenBox.children[0];
console.log(ul);
var lisUl = ul.children;
var ol = screenBox.children[1];
var lisOl = ol.children;
var arrBox = box.children[1];
var arrLeft = arrBox.children[0];
var arrRight = arrBox.children[1];
var li;
for (var i = 0; i < lisUl.length; i++) {
    li = document.createElement("li");
    ol.appendChild(li);
}

//2.1 给第一个小方块设置默认颜色
lisOl[0].className = "current";
//3 简单轮播图效果
for (i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onmouseover = function () {
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        this.className = "current"
        animate(ul, {
            left: -this.index * imgWid
        })
    }
}
//4 左右焦点图效果
var count = 0;
ul.appendChild(lisUl[0].cloneNode(true));

arrRight.onclick = fun;

arrLeft.onclick = function () {

    if (count == 0) {
        ul.style.left = -(lisUl.length - 1) * imgWid + "px";
        count = lisOl.length;
    }
    count--;
    animate(ul, {
        left: -count * imgWid
    });
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    lisOl[count].className = "current";
}
//5 自动播放
var timer = null;
//timer = setInterval(fun,2000);
timer = setInterval(function () {
    arrRight.click();
}, 3000);

//鼠标移入移出，对自动播放进行取消和重新设置
//鼠标移入移出显示隐藏箭头
box.onmouseover = function () {
    animate(arrBox, {
        opacity: 0.8
    })
    arrBox.style.display = "block";
    clearInterval(timer);
};
box.onmouseout = function () {
    animate(arrBox, {
        opacity: 0
    })
    timer = setInterval(function () {
        arrRight.click();
    }, 2000);
};



function fun() {
    if (count == lisOl.length) {
        ul.style.left = 0 + "px";
        0
        count = 0;
    }
    count++;
    animate(ul, {
        left: -count * imgWid
    });

    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    if (count == lisOl.length) {
        lisOl[0].className = "current";
    } else {
        lisOl[count].className = "current";
    }
}

// 轮播图结束===========================================================


// banner 处的菜单下拉白
// var $menu=$("#banner").children(".menu")
// $menu.mouseenter(function(){
//     var box=$(this).children(".xiaLa")[0]
//     animate(box,{
//         height:300
//     });
//     $(this)[0].style.color="#000"
// })
// $menu.mouseleave(function(){
//     var box=$(this).children(".xiaLa")[0]
//     animate(box,{
//         height:0,
//     })
//     $(this)[0].style.color="#fff"
// })


//滚轮事件
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
        //    console.log(e.wheelDelta, e.detail);
        var detail = e.wheelDelta || e.detail;
        //3 对detail兼容后的结果进行判断，
        // 120 和 -3 表示向上滚动
        // -120 和 3 表示向下滚动

        if (detail == 120 || detail == -3) {
            //        console.log("向上滚动的功能");
            options.upFun && options.upFun();
        } else {
            //        console.log("向下滚动的功能");
            options.downFun && options.downFun();
        }
    }
}



$(function () {
    $(window).scroll(function () {
        //注意：两个样式值的获取都是方法形式。
        var st = $(window).scrollTop()
        //$(window).scrollTop()
        myWheelEvent({
            downFun: function () {
                if (st > 1600) {
                    var num = 0;
                    timer = setInterval(function () {
                        console.log(1);
                        $("#mian .am-adv").show()
                        $("#mian .am-adv ul li:eq(" + num + ")").show(num + "000")
                        num++
                        // ']/'

                    }, 500)
                    setTimeout(function () {
                        timer = null;
                    }, 4000)
                }
                if (st > 2800) {
                    $("#mian .xs-adv").show(2000)
                    // $("#mian .am-adv").hide(1000)
                }
                if (st > 3800) {
                    $("#mian .dk-adv").fadeIn(2000)
                    // $("#mian .xs-adv").hide(1000)
                }
                if (st > 4800) {
                    $("#mian .dd-adv").slideDown(2000)
                    // $("#mian .xs-adv").hide(1000)
                }
                if (st > 5800) {
                    $("#mian .jn-adv").show(2000)
                    // $("#mian .xs-adv").hide(1000)
                }
            },
            upFun: function () {

                if (st < 1800) {
                    $("#mian .left-adv").hide()
                    // $("#mian .am-adv").hide(1000)
                }
                // if(st<3600){
                //     $("#mian .xs-adv").slideUp(2000)
                //     // $("#mian .am-adv").hide(1000)
                // }
                // if(st<4600){
                //     $("#mian .dk-adv").slideUp(2000)
                //     // $("#mian .xs-adv").hide(1000)
                // }
                // if(st<5600){
                //     $("#mian .dd-adv").slideUp(2000)
                //     // $("#mian .xs-adv").hide(1000)
                // }
                // if(st<6500){
                //     $("#mian .jn-adv").hide(2000)
                //     // $("#mian .xs-adv").hide(1000)
                // }



            }
        })




        // 视频
        addVideo($(".btnsp"))




        
        var media = $(".media")[0];
        var audioTimer = null;

        //    视频框引用函数
        //    *
        //    * @param {any} $ele   $对象
        //    */
        function addVideo($ele) {
            $ele.click(function () {

                $("#video1").fadeIn(1000).find("embed").attr("src", $(this).attr("src"))
                $("#video1").fadeIn(1000).find("video").attr("src", $(this).attr("src"))
                return false

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
            if (media.paused) {
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
})

