// pages/subject-list/subject-list.js
Page({
  data: {
    list: [],
    start: 0,
    loading: false,
    type:""
  },
  onLoad: function (options) {
    console.log(options)
    let { type } = options;
    this.setData({
      type
    })
    this.loadData(type)
  },
  loadData(type) {
    wx.showLoading({
      title: '拼命加载中...',
      mask: true
    })
    let { list, start, loading } = this.data;
    this.setData({
      loading: true
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/list/?tag=${type}&start=${start}`,
      success: (res) => {
        list.push(...res.data.subjects)
        wx.hideLoading();
        start += 20;
        this.setData({
          list: list,
          loading: false,
          start:start          
        })
        wx.setNavigationBarTitle({
          title: type,
        })
      }
    })
  },
  lower() {
    if (!this.data.loading) {
      this.loadData(this.data.type)
    }
  },
  tap(e) {
    //console.log(e)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
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