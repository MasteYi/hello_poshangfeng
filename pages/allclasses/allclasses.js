// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: '前端开发',
        children: [{
            child_id: 1,
            name: 'vue.js',
            image: "/images/icons/icon6/前端开发/Vue.svg",
            cate_class:'vue'
          },
          {
            child_id: 2,
            name: 'Typescript',
            image: "/images/icons/icon6/前端开发/typescript.svg",
            cate_class:'Typescript'
          },
          {
            child_id:3,
            name:'Node.js',
            image: "/images/icons/icon6/前端开发/Node.js.svg",
            cate_class:'node.js'
          },
          {
            child_id:4,
            name:'Html/css',
            image: "/images/icons/icon6/前端开发/html.svg",
            cate_class:'html/css'
          },
          {
            child_id:5,
            name:'JavaScript',
            image: "/images/icons/icon6/前端开发/JavaScript.svg",
            cate_class:'Javascript'
          },
          {
            child_id:6,
            name:'react.svg',
            image: "/images/icons/icon6/前端开发/react.svg",
            cate_class:'react'
          },
          {
            child_id:7,
            name:'小程序',
            image: "/images/icons/icon6/前端开发/小程序.svg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: '后端开发',
        children:[{
            child_id: 1,
            name: 'Java',
            image:"/images/icons/icon6/后端开发/java.svg",
            cate_class:'Java'
          },
          {
            child_id:2,
            name:'SpringBoot',
            image: "/images/icons/icon6/后端开发/bxl-spring-boot.svg"
          },
          {
            child_id:3,
            name:'C/C++',
            image: "/images/icons/icon6/后端开发/c++语言.svg"
          },
          {
            child_id:4,
            name:'django',
            image: "/images/icons/icon6/后端开发/django.svg"
          },
          {
            child_id:5,
            name:'Go',
            image: "/images/icons/icon6/后端开发/Go语言.svg"
          },
          {
            child_id:6,
            name:'php',
            image: "/images/icons/icon6/后端开发/php.svg"
          },
          {
            child_id:7,
            name:'Python',
            image: "/images/icons/icon6/后端开发/Python.svg",
            cate_class:'python'
          },
          {
            child_id:8,
            name:'Ruby',
            image: "/images/icons/icon6/后端开发/Ruby.svg",
            cate_class:'ruby'
          },
          {
            child_id:9,
            name:'爬虫',
            image: "/images/icons/icon6/后端开发/爬虫.svg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: '移动开发',
        children:[
          {
            chile_id:1,
            name:'Android',
            image:"/images/icons/icon6/移动开发/安卓.svg"
          },
          {
            chile_id:2,
            name:'iOS',
            image:"/images/icons/icon6/移动开发/IOS.svg"
          },
          {
            chile_id:3,
            name:'React native',
            image:"/images/icons/icon6/移动开发/bxl-react.svg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: '计算机基础',
        children:[
          {
            child_id:1,
            name:'数据结构',
            image:"/images/icons/icon6/计算机基础/大数据,数据结构,关系,关系分析,关系网,组织.svg",
            cate_class:"数据结构"
          },
          {
            child_id:2,
            name:'计算机网络',
            image:"/images/icons/icon6/计算机基础/路由器.svg",
          },
          {
            child_id:3,
            name:'数学基础',
            image:"/images/icons/icon6/计算机基础/数学.svg",
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: '前沿技术',
        children:[
          {
            chile_id:1,
            name:'微服务',
            image:"/images/icons/icon6/前沿技术/微服务.svg"
          },
          {
            chile_id:2,
            name:'区块链',
            image:"/images/icons/icon6/前沿技术/区块链.svg"
          },
          {
            chile_id:3,
            name:'深度学习',
            image:"/images/icons/icon6/前沿技术/07 深度学习.svg"
          },
          {
            chile_id:4,
            name:'机器学习',
            image:"/images/icons/icon6/前沿技术/icon-rgb_机器学习算法引擎.svg"
          },
          {
            chile_id:5,
            name:'自然语言处理',
            image:"/images/icons/icon6/前沿技术/nlp 自然语言处理.svg"
          },
          {
            child_id:6,
            name:'机器视觉',
            image:"/images/icons/icon6/前沿技术/机器视觉.svg",
          },
          {
            child_id:7,
            name:'以太坊',
            image:"/images/icons/icon6/前沿技术/ETC.svg",
          }

        ]
      },
      {
        cate_id: 6,
        cate_name: '云计算',
        children:[
          {
            chile_id:1,
            name:'云计算',
            image:"/images/icons/icon6/云计算/云计算.svg"
          },
          {
            chile_id:2,
            name:'aws',
            image:"/images/icons/icon6/云计算/aws.svg"
          },
          {
            chile_id:3,
            name:'hadoop',
            image:"/images/icons/icon6/云计算/Hadoop.svg"
          },
          {
            chile_id:4,
            name:'spark',
            image:"/images/icons/icon6/云计算/spark.svg"
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: '大数据',
        children:[
          {
            chile_id:1,
            name:'spark',
            image:"/images/icons/icon6/大数据/大数据.svg"
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: '运维&测试',
        children:[
          {
            chile_id:1,
            name:'Linux',
            image:"/images/icons/icon6/运维&测试/linux.svg"
          },
          {
            chile_id:2,
            name:'测试',
            image:"/images/icons/icon6/运维&测试/服务测试.svg"
          },
          {
            chile_id:3,
            name:'运维',
            image:"/images/icons/icon6/运维&测试/运维.svg"
          },
          {
            chile_id:4,
            name:'自动化运维',
            image:"/images/icons/icon6/运维&测试/自动化运维.svg"
          },
          {
            chile_id:5,
            name:'运维工具',
            image:"/images/icons/icon6/运维&测试/运维工具.svg"
          },
        ]
      },
      {
        cate_id: 9,
        cate_name: '数据库',
        children:[
          {
            chile_id:1,
            name:'mysql',
            image:"/images/icons/icon6/数据库/云数据库 RDS MySQL.svg"
          },
          {
            chile_id:2,
            name:'MongoDB',
            image:"/images/icons/icon6/数据库/云数据库MongoDB.svg"
          },
          {
            chile_id:3,
            name:'oracle',
            image:"/images/icons/icon6/数据库/oracle.svg"
          },
          {
            chile_id:4,
            name:'redis',
            image:"/images/icons/icon6/数据库/Redis 数据库.svg"
          }
        ]
      },
      {
        cate_id: 10,
        cate_name: '游戏',
        children:[
          {
            chile_id:1,
            name:'unity',
            image:"/images/icons/icon6/游戏/unity.svg"
          }
        ]
      }

    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
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

  /**a
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