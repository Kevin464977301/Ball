//index.js
Page({
  //画球球的功能
  
  huaBall:function(context,width,height){
    //console.log("画个球球");
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var x = parseInt(Math.random() * width);
    var y = parseInt(Math.random() * height);
    context.setFillStyle("rgb("+r+","+g+","+b+")");
    context.beginPath();
    context.arc(x,y,10,0,2*Math.PI);
    context.fill();
  },
  onReady:function(){
    var context = wx.createCanvasContext("canva");
    var self = this;
  wx.getSystemInfo({
    success: function (res) {
      var width = res.windowWidth;
      var height = res.windowHeight;
    //var y = y - 10;
    //var x = x - 10;
    setInterval(function(){
      for(var i = 1;i <= 500; i++){
        self.huaBall(context,width,height);
      }
        context.draw();
    },1000);
    }
  });
    // //使用画球球的功能
    // this.huaBall(context, 150 * Math.random(), 120 * Math.random());
    // this.huaBall(context, 150 * Math.random(), 150 * Math.random());
    // this.huaBall(context, 150 * Math.random(), 170 * Math.random());
    // this.huaBall(context, 150 * Math.random(), 200 * Math.random());

    // this.huaBall(context, 100, 50);
    // this.huaBall(context, 100, 100);
    // this.huaBall(context, 100, 150);

    // this.huaBall(context,150, 50);
    // this.huaBall(context,150,100);    
    // this.huaBall(context,150,150);
  }
})
