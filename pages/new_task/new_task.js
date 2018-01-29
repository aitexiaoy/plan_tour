const { ajax_get}= require('../../global_config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
	  task_start_date:'2015-01-02',
	  task_number:3,
    task_address:'北京',
    geo:{
      lat:'39.928353',
      long:'116.416357'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  let now_date=new Date();
	  now_date = now_date.toLocaleDateString().replace(/['/']/g,'-');
	  this.setData({
		  task_start_date:now_date,
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
	
  },

/*** 选择出行目的地 */
  change_address(e){
    console.log('---------------------------------')
    this.setData(({
      task_address:e.detail.value.toString().replace(/[',']/g,'')
    }))
    console.log(this.data.task_address)
    this.get_jingweidu()
  },

/**** 获取地理经纬度坐标 */
  get_jingweidu(){
      let options={
        url:'/geocode/',
        data:{
          address: this.data.task_address,
        }
      }
      ajax_get(options).then((result)=>{
        console.log(result);
        this.setData({
          geo:{
            lat:result.latitude,
            long:result.longitude,
          }
        })
      }).catch((error)=>{
        console.log(error)
      })
  }
})