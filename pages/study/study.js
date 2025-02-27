// pages/study/study.js
const URL = "http://192.168.8.110:8080/buied";
const app = getApp();
import {
  homedata
} from '../../data/homedata.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myclasses: null,
    myclassesdata:[]
  },



  gotoViedo() {
    wx.navigateTo({
      url: '/pages/classstudy/classstudy',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myclassesdata = homedata[2];
    console.log(myclassesdata);
    this.setData({
      myclassesdata
    })
    const username = app.globalData.username
    wx.request({
      url: URL,
      method: 'GET',
      data: {
        username
      },
      success(res) {
        let temp = res.data;
        let myclasses = [];
        temp = Array.from(temp);
        myclasses = temp;
        myclasses.forEach(function (item, index, arr) {
          if (item === ",") {
            myclasses.splice(index, 1);
          }
        });
        console.log(myclasses);
        that.setData({
          myclasses
        })
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
    wx.showNavigationBarLoading();
    var that = this;
    const username = app.globalData.username
    wx.request({
      url: URL,
      method: 'GET',
      data: {
        username
      },
      success(res) {
        let temp = res.data;
        let myclasses = [];
        temp = Array.from(temp);
        myclasses = temp;
        myclasses.forEach(function (item, index, arr) {
          if (item === ",") {
            myclasses.splice(index, 1);
          }
        });
        console.log(myclasses);
        that.setData({
          myclasses
        })
      }
    })
    wx.stopPullDownRefresh({
      success: (res) => {
        wx.showToast({
          title: '加载中',
          icon:'loading',
          duration:300
        })
        wx.hideNavigationBarLoading()
      },
    })
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