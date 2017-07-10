// pages/index/index3.js
Page({
  data: {
  },
  huaBall:function(context, x, y, width, height){
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    context.setFillStyle("rgb("+r+","+g+","+b+")");
    context.beginPath();
    context.arc( x, y, 10, 0 ,2*Math.PI);
    context.fill();
  },
  onReady: function () {
    var self = this;
    var context = wx.createCanvasContext("doublecan");
    var arr = [];
    setInterval(function(){
      wx.getSystemInfo({
        success: function(res) {
          // var width = self.windowWidth;
          // var height = res.windowHeight;
          var ball = {};
          var ball2 = {};
          ball.x = 0.5 * res.windowWidth;
          ball.y = 0.5 * res.windowHeight;
          ball.xSpeed = 20 * (Math.random() - 0.5);
          ball.ySpeed = 5 + parseInt( 5 * Math.random());
          ball2.x = 0.5 * res.windowWidth;
          ball2.y = 0.5 * res.windowHeight;
          ball2.xSpeed = (-20) * (Math.random() - 0.5);
          ball2.ySpeed = (-5) + parseInt(5 * Math.random());
          arr.push(ball);
          arr.push(ball2);
          // console.log(res.windowWidth);
          // console.log(res.windowHeight);
          for(var i = 0; i < arr.length; i++){
            var ballone = arr[i];
            var balltwo = arr[i];
            ballone.x = ballone.x - ballone.xSpeed;
            ballone.y = ballone.y - ballone.ySpeed;
            ballone.ySpeed = ballone.ySpeed - 1;
            balltwo.ySpeed = balltwo.ySpeed + 1;
            balltwo.x = balltwo.x - balltwo.xSpeed;
            balltwo.y = balltwo.y - balltwo.ySpeed;
            self.huaBall(context, ballone.x, ballone.y, balltwo.x, balltwo.y);
          }
          if(arr.length > 100){
            arr.splice( 0, 1);
          }
        }
      });
      context.draw();
    },50);
  }
})