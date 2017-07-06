//index.js
Page({
  //画球球的功能
  
  huaBall:function(context){
    //console.log("画个球球");
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var x = parseInt(Math.random() * 400);
    var y = parseInt(Math.random() * 800);
    context.setFillStyle("rgb("+r+","+g+","+b+")");
    context.beginPath();
    context.arc(x,y,10,0,2*Math.PI);
    context.fill();
  }, 
  onReady:function(){
    var context = wx.createCanvasContext("canva");
    for(var i = 0;i <= 1000; i++){
      this.huaBall(context);
    }
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
   
    context.draw();
  }
})
