// pages/index/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var arrayone = {};
    // arrayone.name ="张三";
    // arrayone.sex = "男";
    // arrayone.age = 24;

    // var arraytwo = {};
    // arraytwo.name = "王玉";
    // arraytwo.sex = "女";
    // arraytwo.age = 22;

    // console.log(arrayone.name);
    // console.log(arrayone.sex);
    // console.log(arrayone.age);

    // console.log(arraytwo.name);
    // console.log(arraytwo.sex);
    // console.log(arraytwo.age);
    
    // //定义一个数组,可以存放多个值
    // var array = [];
    // //往数组中添加值
    // array.push("张三,男,24");
    // array.push(200,300,400,500);
    // array.push(300);
    // array.push(200);
    // array.push(300);
    // //在控制台输出对应的数值,array[0]代表数组中的第一个元素
    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // for(var i = 0; i < 8; i++){
    //     console.log(i);
    //     console.log(array[i]);
    // };
    // array.length 代表数组的长度
    // for(var i = 0; i < array.length; i++){
    //   console.log(i);
    //   console.log(array[i]);
    // }


    var array = [];
    setInterval(function(){
      var a1 = {};
      a1.name = "张三";
      a1.sex = "男";
      array.push(a1);
      console.log("当前数组中的元素为:");
      for(var i = 0; i<array.length; i++){
        console.log(array[i]);
      };
    },10000);
  }
})