// pages/formtext/formtext.js

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infoMess: '',
    userName: '',
    userN:'',
    passWd: '',
    passW:'',
    idStr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    this.setData({
        idStr:options.idStr
    })
    console.log("接收的数据为：" + this.data.idStr);
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

  //用户名和密码输入框事件
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
    console.log(this.data.userN);
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  loginBtnClick:function(){

    console.log(this.data.userN);
    console.log(this.data.passW);

    if(this.data.userN.length == 0 || this.data.passW.length == 0){
      this.setData({
        infoMess:'温馨提示：用户名和密码不能为空！',
      })
    }else{
      this.setData({
        userName:'用户名：'+this.data.userN,
        passWd:'密码：'+this.data.passW
      })
    }
  },
  //重置按钮点击事件
  resetBtnClick:function(e){
    this.setData({
      infoMess: '',
      userName: '',
      userN:'',
      passWd: '',
      passW:'',
    })
  },
})