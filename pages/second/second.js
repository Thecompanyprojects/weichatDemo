// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!'
  },
  
  addTest(){
    console.log("hello weichat");
    //点击了模态弹窗
    wx.showModal({
      title: '提示',
      content: '模态弹窗',
      success: function (res) {
          if (res.confirm) {
              console.log('用户点击确定')
          }else{
             console.log('用户点击取消')
          }
      }
    })
  },
  onReady: function () {
     this.toast = this.selectComponent("#toast");
     
  },

  tableClick:function(){
    wx.navigateTo({
      url: '../message/message'
    })
  },

  //跳转到彩云天气API
  tableClick2(){
    wx.navigateTo({
      url: '../weather/weather'
    })
  },

  tableClick3(){
    wx.navigateTo({
      url: '../formtext/formtext?idStr=1234'
    })

  },

  tableClick4:function(){
    wx.navigateTo({
      url: '../echartsview/echartsview'
    })
    // this.changeTitle()
  },

  tableClick5:function(){
    wx.navigateTo({
      url: '../unfold/unfold'
    })
  },

  tableClick6:function(){
    wx.navigateTo({
      url: '../unfold2/newunfold'
    })
  },

  tableClick7:function(){
    wx.navigateTo({
      url: '../dropdown/dropdown'
    })
  },

  changeTitle:function(){
    console.log('修改标题');
    wx.setNavigationBarTitle({
      title: "修改标题"
    })
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
      console.log("start");
      wx.setNavigationBarTitle({
        title: "这是标题"
      })
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

  }

  
  
})
