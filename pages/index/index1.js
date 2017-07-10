// pages/index/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  huaBall: function (context, x, y, width, height) {
    //console.log("画个球球");
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    context.setFillStyle("rgb(" + r + "," + g + "," + b + ")");
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fill();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // //得到画布
    // var context = wx.createCanvasContext("canvaone");
    // //定义x,y的初始值
    // var x = 100;
    // var y = 300;
    // //y的速度值
    // var ySpeed = 20;
    // var xSpeed = 5;
    // y = y - 10;
    // //将this保存到self
    // var self = this;
    // //定时器,每隔一段时间执行
    // setInterval(function(){
    //   x = x;
    //   y = y - ySpeed;
    //   //y的变量越来越小,相当于减速运动
    //   ySpeed = ySpeed - 1;
    //   //用self调用画球的功能,因当前this代表是定时器里的功能,不能用前面的
    //   self.huaBall(context,x,y);
    //   context.draw();
    // },100);

    // var context = wx.createCanvasContext("canvaone");
    // var ball = {};
    // ball.x = 160;
    // ball.y = 300;
    // ball.xSpeed = -5;
    // ball.ySpeed = 20;
    // var balltwo = {};
    // balltwo.x = 160;
    // balltwo.y = 300;
    // balltwo.xSpeed = 5;
    // balltwo.ySpeed = 20;
    // var all = [];
    // all.push(ball);
    // all.push(balltwo);

    // var self = this;
    // setInterval(function(){
    //   for(var i = 0; i < all.length; i++){
    //     var b = all[i];
    //     b.x = b.x - b.xSpeed;
    //     b.y = b.y - b.ySpeed;
    //     b.ySpeed = b.ySpeed - 1;
    //     self.huaBall(context, b.x, b.y);
    //   }
    //   context.draw();
    // },100);

    var context = wx.createCanvasContext("canvaone");
    var self = this;
    var arr = [];
    setInterval(function(){
        var ball = {};
        ball.x = 170;
        ball.y = 300;
        ball.xSpeed = 10*(Math.random() - 0.5);
        ball.ySpeed = 20 + parseInt(5 * Math.random());
        arr.push(ball);
      for(var i = 0; i <arr.length; i++){
        var bal = arr[i];
        bal.x = bal.x - bal.xSpeed;
        bal.y = bal.y - bal.ySpeed;
        bal.ySpeed = bal.ySpeed - 1;
        self.huaBall(context, bal.x, bal.y);
      }
      if(arr.length > 100){
        arr.splice(0,1);
      }
      context.draw();
    },100);
  }
})