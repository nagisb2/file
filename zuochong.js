(function () {
        var zc,zcCss,w1,w2,leftStart,leftEnd,speed,time,fx,isfirst; //预设变量
        document.addEventListener("DOMContentLoaded", function () {// 初始化
            zc=document.querySelector("#yanglikeu"),
            zcCss=document.querySelector("#zcCss"),
            w1=document.body.scrollWidth,   //页面宽度
            w2=86,  //桌宠宽度
            leftStart=0-w2, //左边界
            leftEnd=w1-w2,  //右边界
            speed=100,  //每秒移动多少像素
            time=parseInt(w1/speed),    //动画时长
            fx="r", //桌宠方向
            isfirst=true;   //是否是第一次执行
            zcmove(fx); //启动
            zc.addEventListener("animationend", function () {   //动画播放完毕后再启动
                isfirst=false;
                fx==="r"?fx="l":fx="r";
                zcmove(fx);
            });
        });
    function zcmove(fx) {   // 要注意两次的动画名要有区别，不然第二次就不正常了
            if (!isfirst) { //如果已经不是第一次执行了，则把左边界设置为0（即不走出屏幕外）
                leftStart=0;
            }
            if (fx==="r") { //向右移动
                zc.style.transform="scaleX(-1)";
                zcCss.innerHTML='@keyframes zcmove{' +
                                    'from {left: '+leftStart+'px}' +
                                    'to {left: '+leftEnd+'px}' +
                                '}';
                zc.style.animationName="zcmove";
                zc.style.animationDuration=time+"s";
            }else if (fx==="l") {   //向左移动
                zc.style.transform="scaleX(1)";
                zcCss.innerHTML='@keyframes zcmove2{' +
                                    'from {left: '+leftEnd+'px}' +
                                    'to {left: '+leftStart+'px}' +
                                '}';
                zc.style.animationName="zcmove2";
                zc.style.animationDuration=time+"s";
            }
        }
    })();