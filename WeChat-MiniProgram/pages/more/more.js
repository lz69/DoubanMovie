// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: [{ //模拟动态获取到的后台数据：数组对象格式
      id: 0,
      name: 'table-th-cell'
    },
    {
      id: 1,
      name: 'table-th-cell'
    },
    {
      id: 2,
      name: 'table-th-cell'
    },
    {
      id: 3,
      name: 'table-tr-cell'
    },
    {
      id: 4,
      name: 'table-tr-cell'
    },
    {
      id: 5,
      name: 'table-tr-cell'
    },
    {
      id: 6,
      name: 'table-tr-cell'
    },
    {
      id: 7,
      name: 'table-tr-cell'
    },
    {
      id: 8,
      name: 'table-tr-cell'
    },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.type)
    switch (option.type) {
      case 'moreshowing':
        wx.setNavigationBarTitle({
          title: '全部上映影片',
        })
      break;
    }
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