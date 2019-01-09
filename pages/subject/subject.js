// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        type:"爱情",
        url:"../../assets/images/aiqing.png"
      },
      {
        type: "动画",
        url: "../../assets/images/donghua.png"
      },
      {
        type: "动作",
        url: "../../assets/images/dongzuo.png"
      },
      {
        type: "喜剧",
        url: "../../assets/images/xiju.png"
      },
      {
        type: "科幻",
        url: "../../assets/images/kehuan.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  tap(e){
    wx.navigateTo({
      url: `/pages/subject-list/subject-list?type=${e.currentTarget.dataset.type}`
    })
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
  
  }
})