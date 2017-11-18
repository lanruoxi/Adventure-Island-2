/**
 * Created by xxd on 2017/9/16.
 */


$(document).ready(function () {




    <!-- ��½���js -->
    function login(){

        $(".login").click(function () {
            console.log(1)
            $("#login").show()
        })

        $("#login .code").mouseenter(function () {
            $(this).stop().animate({ left: "-50px" })
            $("#login .sjpic").stop().show()
        }).mouseleave(function () {
            $(this).stop().animate({ left: "0" })
            $("#login .sjpic").stop().hide()
        })

        $("#login .close1").click(function () {
            $("#login").hide()
        });

    };

    login();




    //��ά����ʾ
    $(".ewm").mouseenter(function () {
        $(".ewm-hide").stop().slideDown(200);
    });
    $(".ewm-hide").mouseleave(function () {
        $(this).stop().slideUp(200);
    })

    //������ս
    $(".ml").mouseenter(function () {
        $(".mlkz-h").stop().slideDown(200);
    });
    $(".mlkz-h").mouseenter(function () {
        $(".mlkz-h").stop().slideUp();
    });


    //点击打开视频
    $("#video").click(function () {
        $(".video-border").fadeIn(500);
        $(".dm").slideToggle(500);
    })
    //�ر���Ƶ
    $(".close").click(function () {
        $(this).parent().hide(400);
        $(".dm").hide(400);
    })

    //��Ļ����Ч��--------------------------------------------------------------��Ļ
    var inp = $(".inp")[0];
    var lab = $("#lab");
    //inp.value="请输入您的姓名首字母查看你的本名神器（2到4个字符)";
    //2.绑定事件(获取焦点事件)
    console.log(lab);
    inp.onfocus = function () {
        //if(this.value){
        lab.hide();
        //}
    }
    //(失去焦点事件)焦点：插入条光标
    inp.onblur = function () {
        if(this.value === ""){

            lab.show();
        }
    }






        //������ɫ
        var colors = ["red", "green", "hotpink", "pink", "cyan", "yellowgreen", "purple", "deepskyblue"];

        //��ȡ��ť�������
        var $btn = $("#btn");
        var $inp = $(".inp");
        //����¼�
        $btn.click(function () {


            //-----------字典------------
            var nameOne ={
                A:"奇门",B:"玄天",C:"日月",D:"毒龙",E:"夜叉",F:"葵花",
                G:"纯阳",H:"玉女",I:"神门",J:"六合",K:"天罡",L:"天羽",M:"八卦",
                N:"太乙",O:"落英",P:"鹰蛇",Q:"太极",R:"回风",S:"混沌",
                T:"乾坤",U:"地煞",V:"邪灵",W:"九天",X:"流光",Y:"百变",Z:"逍遥"};

            var nameTwo = {
                A:"拂穴",B:"降魔",C:"霹雳",D:"阴阳",E:"丧门",F:"真气",G:"修罗",
                H:"碎石",I:"无形",J:"九九",K:"绵",L:"无痕",M:"两仪",N:"五神",O:"穿云",
                P:"破玉",Q:"奇",R:"迅雷",S:"伏魔",T:"游身",U:"饮血",V:"杀生",W:"连环",X:"星陨",Y:"神",Z:"无双"};

            var nameThree = {
                A:"钉",B:"棒",C:"掌",D:"刀",E:"拳",F:"掌",G:"爪",H:"指",
                J:"斧",I:"冰刃",K:"钩",L:"棍",M:"杖",N:"鞭",O:"剑",P:"镖",Q:"索",
                R:"刀",S:"拳",T:"手",U:"刺",V:"黑刀",W:"功",X:"锤",Y:"枪",Z:"剑"};

            var reg = /^[a-zA-Z]{2,4}$/;


            var inp = $(".inp")[0];
            var btn = $("#button")[0];




            //-----------�ж�����------------

            //������
            if(reg.test(inp.value)){
                //�ַ������ж�
                switch (inp.value.length){
                    case 2:
                        var one = inp.value.substr(0, 1).toUpperCase();
                        var two = inp.value.substr(1, 1).toUpperCase();
                        name = nameOne[one] + nameTwo[two];
//                        console.log(name);
                        inp.value="";
                        break;
                    case 3:
                        var one = inp.value.substr(0, 1).toUpperCase();
                        var two = inp.value.substr(1, 1).toUpperCase();
                        var three = inp.value.substr(2, 1).toUpperCase();
                        name = nameOne[one] + nameTwo[two]+nameThree[three];
//                        console.log(name);
                        inp.value="";
                        break;
                    case 4:
                        var one = inp.value.substr(0, 1).toUpperCase();
                        var two = inp.value.substr(1, 1).toUpperCase();
                        var three = inp.value.substr(2, 1).toUpperCase();
                        var four = inp.value.substr(3, 1).toUpperCase();
                        name = nameOne[one] + nameTwo[two]+nameThree[three]+ nameTwo[four];
//                        console.log(name);
                        inp.value="";
                        break;
                }


            }else{
                var name =  "别闹，按格式输入";

            }









            //����span��ǩ
            var $span = $("<span class='sp'>" + name + "</span>");

            //���뵽��Ƶ��
            $span.appendTo($(".video-border")).
                //����span����ʽ
                css({
                    color: colors[Math.floor(Math.random() * colors.length)],
                    //lfet:Math.floor(Math.random()*860),
                    lfet: $(".video-border").width() - 10,
                    top: Math.floor(Math.random() * 420)
                }).
                //�����˶�
                animate({left: -60}, 3500, function () {
                    $(".sp").remove();
                });

            $inp.val("");
        });



            //��װ������
















    //�������ֵĶ�������λ��
    var GGEnd = function () {
        //���Ͻ����½Ƿ���
        $(".left-box").animate({left: -130, top: -130}, 1500).fadeIn(1500);
        $(".right-box").animate({right: -380, bottom: -380}, 1500).fadeIn(1500);
        //������ʾ
        $(".skip").animate({right: 0}, 2000).fadeIn(2500);
        //��¼
        login();
    }


    //�������ֵĶ�����ʼλ��
    var GGStart = function () {
        //���Ͻ����½Ƿ���
        $(".left-box").stop().animate({left: 0, top: -400}, 0);
        $(".right-box").stop().animate({right: -750, bottom: 0}, 0);
        //������ʾ
        $(".skip").stop().animate({right: -600}, 0);
        //��Ļ
        $(".heimu").stop().css("display", "block").fadeOut(700);
    }

    //ִ�й������ֵĶ���
    GGEnd();


    //����ָ���յ�λ��
    var xsznTarget = function () {
        //С������
        $(".top-box").animate({left: 1055}, 400);
        //С������
        $(".middle-box").animate({left: 1051}, 600);
        //С������
        $(".bottom-box").animate({left: 607}, 1000);
        //��Ů
        $(".girl").animate({left: 530, opacity: 1}, 1500).fadeIn(1200);
        //����ָ��
        $(".xszn").animate({left: 4}, 800);
        //ð�մ�½
        $(".mxdl").animate({left: 79}, 1000, function () {
            $(this).fadeIn(5200)
        });
        /*��Ƶ*/
        $(".video").animate({left: 10}, 1000);
        /*����*/
        $(".qp").animate({width: 171, height: 168}, 1400)
        //�������
        $(".left-wawa").animate({left: 490}, 800);
        //�ұ�����
        $(".right-wawa").animate({top: 347, opacity: 1}, 1400);

        //б��
        $(".xg").animate({left: 597, opacity: 0.8}, 1600);
    };
    //����ָ����ʼλ��
    var xsznStart = function () {
        //С������
        $(".top-box").animate({left: 700}, 0);
        //С������
        $(".middle-box").animate({left: 1600}, 0);
        //С������
        $(".bottom-box").animate({left: 1600}, 0);
        //��Ů
        $(".girl").animate({left: 1400}, 0);
        //����ָ��
        $(".xszn").animate({left: -400}, 0);
        //ð�մ�½
        $(".mxdl").animate({left: 300}, 0);
        /*��Ƶ*/
        $(".video").animate({left: -300}, 0);
        /*����*/
        $(".qp").animate({width: 171, height: 168}, 0);
        //�������
        $(".left-wawa").animate({left: 1200}, 0);
        //�ұ�����
        $(".right-wawa").animate({top: 900, opacity: 1}, 0);

        //б��
        $(".xg").animate({left: 1600, opacity: 0.8}, 0);
    };
    //ִ��
    xsznTarget();


    //�뵺׼��-----------------------------------rdzb
    //�뵺׼��Ŀ��λ��
    var rdzbTarget = function () {
        //�뵺׼��
        $(".rdzb").animate({left: 4}, 1000);
        //����Ҫ��
        $(".pzyq").animate({left: 79}, 1000);
        //�ұ�С��
        $(".xs").animate({top: 401, opacity: 1}, 1300);
        //�ɵ�
        $(".fd").animate({left: 929, opacity: 1}, 800);
        //�뵺׼��-��Ů
        $(".girl-rdzb").animate({left: 682, opacity: 1}, 1200);
        //б���뵺׼��
        $(".xg-rdzb").animate({left: -42, opacity: 0.7}, 800);
        //��ѿ�˶�---------------------------------------------------
        setInterval(function () {
            $(".dy").animate({top: 460}, 500)
            var sx = $(".dy").css("top");
            var n = parseInt(sx);
            if (n >= 460) {
                $(".dy").animate({top: 500}, 500)
            }
        }, 100);

        //���õ�����
        //$(".zuidi-l").css({display: "block"}).animate({top: 47}, 800);
        //$(".zuidi-r").css({display: "block"}).animate({top: 47}, 1200);
        //���õ���������
        $(".pz").animate({top: 199}, 1400, function () {
            $(".pz").fadeIn(1600);
        });
        $(".pz-body").animate({top: 255}, 1500, function () {
            $(".pz").fadeIn(1600);
            //���õ�����
            $(".zuidi-l").css("display", "block").animate({top: 47}, 800);
            $(".zuidi-r").css("display", "block").animate({top: 47}, 1200);
        });

    }

    //�뵺׼����ʼλ��
    var rdzbStart = function () {
        //����ָ��
        $(".rdzb").animate({left: -400}, 0);
        //����Ҫ��
        $(".pzyq").animate({left: 300}, 0);
        //�ұ�С��
        $(".xs").animate({top: 800, opacity: 1}, 0);
        //�ɵ�
        $(".fd").animate({left: 800, opacity: 1}, 0);
        //�뵺׼��-��Ů
        $(".girl-rdzb").animate({left: 1200, opacity: 1}, 0);
        //б���뵺׼��
        $(".xg-rdzb").animate({left: 120, opacity: 0.7}, 0);
        //��ѿ�˶�
        $(".dy").animate({top: 500}, 0);
        //���õ�����
        $(".zuidi-l").css({display: "block"}).animate({top: 180}, 0);
        $(".zuidi-r").css({display: "block"}).animate({top: 180}, 0);
        //���õ���������
        $(".pz").animate({top: 500}, 0, function () {
            //���õ�����
            $(".zuidi-l").css({display: "none"}).animate({top: 200}, 0);
            $(".zuidi-r").css({display: "none"}).animate({top: 200}, 0);
        });

        $(".pz-body").animate({top: 600}, 0);
    }


    /*-----------------------ð����start-----------------------------*/
    //ð�����յ�λ��
    var mxqhTarget = function () {
        //ð��������
        $(".mxqh-tiaoFu").animate({left: 8}, 1000);
        //ְҵ����zyjs
        $(".zyjs").animate({left: 8}, 1000);
        //�뵺׼��-��Ů
        $(".girl-mxqh").animate({left: 626, opacity: 1}, 1200);
        /*��Ƶ*/
        $(".video-people").fadeIn(400).animate({top: 218}, 1200);
        //�ʹ�
        $(".hg").animate({top: 523}, 1200, function () {
            $(".hg").fadeIn(1000);
        });
        //��ţ����
        /* $(".qn").animate({left: 931, opacity: 1},100,function(){
         $(".qn").fadeIn(1000);
         });*/
        $(".qn").animate({left: 931, opacity: 1}, 1000);
        $(".qn").fadeIn(2000);

    }

    //ð������ʼλ��
    var mxqhStart = function () {
        //ð��������
        $(".mxqh-tiaoFu").animate({left: -400}, 0);
        //ְҵ����zyjs
        $(".zyjs").animate({left: 300}, 0);
        //�뵺׼��-��Ů
        $(".girl-mxqh").animate({left: 1400, opacity: 1}, 0);
        /*��Ƶ*/
        $(".video-people").animate({top: 400}, 0, function () {
            $(".video-people").hide();
        });
        //�ʹ�
        $(".hg").animate({top: 700}, 0);
        //��ţ����
        /* $(".qn").animate({left: 931, opacity: 1},0,function(){
         $(".qn").fadeIn(0);
         });*/
        $(".qn").animate({left: 700, opacity: 1}, 0);
        $(".qn").hide();

    }

    /*-----------------------ð����end-----------------------------*/

    //�����¼�------------------------------------------------------------jpsj
    var index = $("#title>li").index();
    var lis = $("#title>li");
    $(document).keydown(function (e) {
        var keyCode = e.keyCode

        //var count = 0;
        //�ж�
        if (keyCode == 38) {

            if (index == 0) {
                //console.log(index);

                $("#title>li").eq(4).click();
                index = 4;
            } else {

                index--;
                $("#title>li").eq(index).click();

            }

        }

        if (keyCode == 40) {

            if (index == 4) {
                console.log(index);
                $("#title>li").eq(0).click();
                index = 0;
            } else {

                index++;
                $("#title>li").eq(index).click();

            }

        }

    })


    //�������¼�------------------------------------------------------------�������¼�
    function myWheelEvent(options) {
        document.body.onmousewheel = fun;
        //addEventListenerʹ����ǰ�ļ����Է�װ������
        document.body.addEventListener("DOMMouseScroll", fun);
        function fun(e) {
            //����ڹ�������ʱ�жϣ���ǰ���ֹ����ķ����أ�
            //�жϷ�ʽͨ���¼����������ֵ���ɼ��
            //1 �¼�����ļ���
            var e = e || window.event;
            //2 ���ʱ���֣����������Կ��Ի�ȡ�����ֵķ���
//    console.log(e.wheelDelta, e.detail);
            var detail = e.wheelDelta || e.detail;
            //3 ��detail���ݺ�Ľ�������жϣ�
            // 120 �� -3 ��ʾ���Ϲ���
            // -120 �� 3 ��ʾ���¹���

            if (detail == 120 || detail == -3) {
//        console.log("���Ϲ����Ĺ���");
                options.upFun && options.upFun();
            } else {
//        console.log("���¹����Ĺ���");
                options.downFun && options.downFun();
            }
        }
    }

    //�����˼����¼�����������
    myWheelEvent({
        //�Ϲ�
        upFun: function () {


                if (index == 0) {
                    //console.log(index);

                    $("#title>li").eq(4).click();
                    index = 4;
                } else {

                    index--;
                    $("#title>li").eq(index).click();

                }


        },


        //�¹�
        downFun: function () {
            //�ж�
            if (index == 4) {
                console.log(index);
                $("#title>li").eq(0).click();
                index = 0;
            } else {

                index++;
                $("#title>li").eq(index).click();

            }

        }

    });


    //�����������li-----------------------------------------------�����li
    $("#title>li").click(function () {
        //��ģid��������
        var moKuaiArr = ["#xszn", "#rdzb", "#mxqh"];
        var i = $(this).index();
        //������ʾģ��
        $(moKuaiArr[i]).show().siblings().hide();
        //����������ͼ
        $(moKuaiArr[i]).css("background-image", "url(images/bg" + i + ".jpg)");
        //����li������
        $(this).addClass("li-bgColor").removeClass("yd").siblings().removeClass("li-bgColor").addClass("yd");


        //����ڶ���ģ��--------------------------------------------------------rdzb
        if (i == 1) {
            //����б�����˶�
            $(".left-box>img").attr("src", "images/left1.png");
            $(".right-box>img").attr("src", "images/right1.png");
            //�������ֶ���
            GGStart();
            GGEnd();
            //���ݶ���
            rdzbStart();
            rdzbTarget()
        }

        //�����1��ģ��--------------------------------------------------------xszn
        if (i == 0) {
            //бͼ����
            $(".left-box>img").attr("src", "images/left0.png");
            $(".right-box>img").attr("src", "images/right0.png");
            //ִ�й������ֶ���
            GGStart();
            GGEnd();

            //coutainer����Ķ���
            xsznStart();
            xsznTarget();


        }

        //�����3��ģ��--------------------------------------------------------mxqh
        if (i == 2) {
            //бͼ����
            $(".left-box>img").attr("src", "images/left2.png");
            $(".right-box>img").attr("src", "images/right2.png");
            //�������ֶ���
            GGStart();
            GGEnd();
            //ð�����ڲ�����
            mxqhStart();
            mxqhTarget();
            //����
            moveRocket();


        }


    })


    /*-----------------------�뵺׼��star-----------------------------*/


    //���ñ�񲿷�-------------------------------------------------
    var pzArr = []
    //��ͷ
    $(".tab li").click(function () {
        $(this).css("opacity", "1").addClass("active").siblings().removeClass("active").css("opacity", "0.5");
        var i = $(this).index();
        $(".zuidi-l").css({opacity: "0"}).animate({top: 180}, 0).animate({top: 47}, 800).css({opacity: "1"});
        $(".zuidi-r").css({opacity: "0"}).animate({top: 180}, 0).animate({top: 47}, 1200).css({opacity: "1"});


    })

    /*-----------------------�뵺׼��end-----------------------------*/


    function moveRocket() {
        $(".qp-mxqh")
            //2000������top = top + 60��
            .animate({'top': '+=50'}, 2000)
            //ͣ��100����
//                .delay(10)
            //2000������top = top - 60��ע�⣺֮��ÿ100����ִ��һ�α�����
            .animate({'top': '-=50'}, 2000, function () {
                setTimeout(moveRocket, 100);
            });
    };


    function look() {
        $(".look")
            //2000������top = top + 60��
            .animate({'top': '+=40'}, 1000)
            //ͣ��100����
//                .delay(10)
            //2000������top = top - 60��ע�⣺֮��ÿ100����ִ��һ�α�����
            .animate({'top': '-=40'}, 1000, function () {
                setTimeout(look, 100);
            });
    };

    look()


    function qpOfrdzb() {
        $(".qp-rdzb")
            //2000������top = top + 60��
            .animate({'top': '+=60'}, 1000)
            //ͣ��100����
//                .delay(10)
            //2000������top = top - 60��ע�⣺֮��ÿ100����ִ��һ�α�����
            .animate({'top': '-=60'}, 1000, function () {
                setTimeout(qpOfrdzb, 100);
            });
    };

    qpOfrdzb();


    function qpOfxszn() {
        $(".qp")
            //2000������top = top + 60��
            .animate({'left': '+=100'}, 1000)
            //ͣ��100����
//                .delay(10)
            //2000������top = top - 60��ע�⣺֮��ÿ100����ִ��һ�α�����
            .animate({'left': '-=100'}, 1000, function () {
                setTimeout(qpOfxszn, 100);
            });
    };

    qpOfxszn();


        //ð��������
    (function () {
        $(".qp-mxqh")
            //2000������top = top + 60��
            .animate({'top': '+=50'}, 2000)
            //ͣ��100����
//                .delay(10)
            //2000������top = top - 60��ע�⣺֮��ÿ100����ִ��һ�α�����
            .animate({'top': '-=50'}, 2000, function () {
                setTimeout(moveRocket, 100);
            });
    })();


})

