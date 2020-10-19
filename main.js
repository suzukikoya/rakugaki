var btn = document.getElementById("btn");
// 下記の説明　HTMLよりキャンバスを取得しよう
var canvas = document.getElementById("canvas");　
// 下記の説明　キャンバスを使う時はコンテキストが必要
var ctx = canvas.getContext("2d");
var mousex,mousey;
var state = false;
var color = 0;

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

//線にデコレーションする
// ctx.lineWidth = 50;
ctx.lineCap = "round";


//下記の説明　マウスが動いたときに感知してくれる
canvas.addEventListener("mousemove",mouseMove);
canvas.addEventListener("mousedown",mouseDown);
canvas.addEventListener("mouseup",mouseUp);
btn.addEventListener("click",clearBtn);

function clearBtn(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function mouseDown(e){
  mousex = e.clientX;
  mousey = e.clientY;
  state = true;
}

function mouseUp(){
  state = false;
}

function mouseMove(e){
    // 下記の説明　consoleでx座標確かめられる
    // console.log(e.clientX);
    if(!state) return;

    var w = Math.random()*51
    ctx.lineWidth = w;
    color++;
    ctx.strokeStyle = "hsl("+color+",100%,50%)";
    ctx.beginPath();
    ctx.moveTo(mousex,mousey);
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();

    mousex = e.clientX;
    mousey = e.clientY;
}
