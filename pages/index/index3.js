// pages/index/index3.js
Page({
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
    var context = wx.createCanvasContext("doublecan");
    var self = this;
    var arr = [];
    wx.getSystemInfo({
      success: function(res) {
        setInterval(function(){
          var ball = {};
          ball.x = 0.5 * res.windowWidth;
          ball.y = 0.5 * res.windowHeight;
          ball.xSpeed = 40 * (Math.random() - 0.5);
          ball.ySpeed = 100 * (Math.random() - 0.5);
          arr.push(ball);
          // console.log(res.windowWidth);
          // console.log(res.windowHeight);
          for(var i = 0; i < arr.length; i++){
            var ballone = arr[i];
            self.huaBall(context, ballone.x, ballone.y);
            ballone.x = ballone.x + ballone.xSpeed;
            ballone.y = ballone.y - ballone.ySpeed;
            ballone.ySpeed = ballone.ySpeed - 1;
            if(arr.length > 100){
              arr.splice( 0, 1);
            }
          }
          context.draw();
        },100)
      }
    })
  }
})