 - 小程序
   最廉价的App开发 简单，快速，高效
   前端入门最合适的综合应用
   组件 增强了的html标签
   swiper 
   js是脚本文件，
   .json是配置文件，
   .wxss是样式表文件，
   .wxml是页面结构文件，
   其中json和wxss文件为非必须（默认会继承app的json和wxss默认设置）。

  - vh相对单位
 - 看文档是最好的学习方式，indicator-dots="{{true}}"
 {{}} 模板编译符 值 {{}}
 - 数据绑定
   小程序的Page架构
   index.wxml 视图结构view 模板
   index.wxss 样式 类名
   {{}} 为模板绑定数据 slides 在js data里定义
   被模板访问到  wx:for="{{slides}}" item.header
   js Page({
     data:{
       
     }
   })


   - 小程序内置的编辑器很好用
     pages/index/index.wxml/wxss|js|json
     把应用连接起来，
     wx.navigateTo

  - app.js app.json app.wxss 会作用于全局
  