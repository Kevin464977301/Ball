// pages/index/index4.js
Page({
  huaQiu:function(context, x, y){
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    context.setFillStyle("rgb(" + r + "," + g + "," + b + ")");
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fill();
  },
  onReady:function(){
    var context = wx.createCanvasContext("canvasid");
    var all = [];
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        setInterval(function(){
          var bool = {};
          bool.x = res.windowWidth/2;
          bool.y = res.windowHeight/2;
          if(all.length < 450){
            all.push(bool);
            for(var i = 0; i < all.length; i++){
              var b = all[i];
              b.x = b.x - 0.5 * Math.cos((i + 1) * Math.PI/36);
              b.y = b.y - 0.5 * Math.sin((i + 1) * Math.PI/36);
              self.huaQiu(context, b.x, b.y);
            }
          }else{
            for(var i = 0; i < all.length; i++){
              var b = all[i];
              b.x = b.x;
              b.y = b.y;
              self.huaQiu(context, b.x, b.y);
              if(all.length > 450){
                all.splice(0, 1);
              }
            }
          }
          context.draw();
        },100)
      }
    })
  }
})