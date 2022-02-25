// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    hiddenName:true,
    
    success: "",
    result:{
      weaid:            "",
      days:             "",
      week:             "",
      cityno:           "",
      citynm:           "",
      cityid:           "",
      temperature:      "",
      temperature_curr: "",
      humidity:         "",
      aqi:              "",
      weather:          "",
      weather_curr:     "",
      weather_icon:     "",
      weather_icon1:    "",
      wind:             "",
      winp:             "",
      temp_high:        "",
      temp_low:         "",
      temp_curr:        "",
      humi_high:        "",
      humi_low:         "",
      weatid:           "",
      weatid1:          "",
      windid:           "",
      winpid:           "",
      weather_iconid:   "",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindgetWeather:function(){
    this.myLoadFrom();
  },

  myLoadFrom:function(){
    var that = this;//把this对象复制到临时变量that
    const wxreq = wx.request({
      url: 'http://api.k780.com/?app=weather.today&weaId=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res){
        that.setData({
           citynm:res.data.result.citynm,
           temperature:res.data.result.temperature,
           week:res.data.result.week,
        })
      },
      fail: function (res){
        console.log(res.data);
      }
    })
  },
  click:function(e){
    this.setData({
        hiddenName:!this.data.hiddenName
    })
}
})