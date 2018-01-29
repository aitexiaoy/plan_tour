// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  tour_name_value_a: '',
	  tour_date_value_a: '',
	  tour_date_a:'',
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
  /*** 任务名字输入框 */
  tour_name_value:function(e) {
	  this.setData({
		  tour_name_value_a:e.detail.value,
	  })
  },
  /*** 输入日期 */
  tour_date_value: function (e) {
	  this.setData({
		  tour_date_value_a: e.detail.value,
	  })
  },
  /*** 选择日期 */
  tour_date(e){
	  this.setData({
		  tour_date_a:e.detail.value,
	  })
  },
  /*** 提交按钮 */
  submit_tour_new() {
	  let that = this;
	  console.log(this.data);
  },
})

