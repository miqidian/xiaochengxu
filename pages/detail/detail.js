import util from '../../utils/util.js'

Page({
  data: {
    detailData:{},
    loading:true
  },
  onLoad: function (options) {
    this.loadData(options.id)
  },
  loadData(id){
    wx.showLoading({
      title: '数据拼命加载中...',
      mask:true
    })
    let arryData = []
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/detail?id=${id}`,
      success:(res) =>{
        this.setData({
          detailData:res.data,
          loading:false
        })
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        wx.hideLoading()

        wx.getStorage({
          key: 'dianying',
          success: function (res) {
            arryData = res.data
            console.log(arryData)
            arryData.unshift(res.data)
            console.log(arryData, '2')
            wx.setStorage({
              key: 'dianying',
              data: arryData
            })
          },
          fail:function(res){
            console.log('----获取失败----')
            console.log(res)
          }
        })

        /* let history_film = []
        var date = util.getDate()
        var dateTime = util.getTime()

        wx.getStorage({
          key: 'dianying',
          success: function(res) {            
            history_film = res.data
            //今天的数据
            let today_data = {
              date: date,
              film: []
            }

            //当前的数据
            let now_data = {
              dateTime: dateTime,
              data: res.data
            }

            today_data.film.push(now_data)

            if (history_film.length == 0) {
              history_film.push(today_data)
            } else if (history_film[0].date == date) {
              for (let i = 0, len = history_film[0].film.length; i < len; i++) {
                if (history_film[0].film[i].data.id == data.id) {
                  history_film[0].film.splice(i, 1)
                }
              }
              history_film[0].film.push(now_data)
            } else {
              history_film.push(today_data)
            }
            wx.setStorage({
              key: 'dianying',
              data: history_film
            })
          },
          fail: function (res) {
            console.log('----获取失败----')
            console.log(res)
          }
        }) */   
      }
    })
  }
})