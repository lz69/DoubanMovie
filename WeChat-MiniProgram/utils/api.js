const API_BASE = 'https://douban.uieee.com/v2/movie';
const API_IN_THEATERS = `${API_BASE}/in_theaters`;

/**
 * test
 */
function test() {
  wx.showToast({
    title: 'TEST',
  })
}

/**
 * 网络请求
 */
function request(url, data) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: {
        count: 20
      },
      header: {
        'content-type': 'application/text' // 默认值
      },
      method: 'GET',
      success:function(res) {
        if (res.statusCode === 200) {
          resolve(res.data.subjects);
        } else {
          reject();
        }
      },
      fail:function() {
        reject();
      }
    })
  })
}

/**
 * 搜索正在上映电影
 */
function requestInTheaters(data) {
  return request(API_IN_THEATERS, data);
}

module.exports = {
  test: test,
  requestInTheaters: requestInTheaters
}
