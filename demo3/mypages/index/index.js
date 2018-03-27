Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgData:[],
    inputVal:''
  },
  inputChange(ev){
    this.setData({
      inputVal:ev.detail.value
    })
  },
  addMsg(){
    let list = this.data.msgData;
    list.push({
      msg:this.data.inputVal
    });

    this.setData({
      msgData:list,
      inputVal:""
    });

    wx.setStorage({
      key: 'key',
      data: this.data.msgData
    })

  },

  delMsg(ev){
    let n = ev.target.dataset.index;
    let list = this.data.msgData;
    list.splice(n,1);

    this.setData({
      msgData: list
    })
  },

  edMsg(ev){
    console.log(ev);
    this.msgData.class = 'editing'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getStorage({
      key:'key',
      success(res){
        console.log(res);
        _this.setData({
          msgData: res.data
        })
      },
      fail() {
        console.log('设置缓存失败')
      }
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