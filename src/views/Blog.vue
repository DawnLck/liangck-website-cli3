<template>
    <div class="my-blog">
        <Layout :style="{padding: '0 24px 24px'}">
            <Row type="flex" justify="center" :style="{padding: '1rem 0 0'}">
                <Col :xs="20" :sm="20" :md="16" :lg="12">
                    <h1>
                        <span style="color: #2d8cf0;">#</span>&nbsp;&nbsp;一只猫的博客
                    </h1>
                    <small>和大家一起学习前端后端相关的知识哈，有些时候也会聊聊算法[]~(￣▽￣)~*</small>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col :xs="20" :sm="20" :md="16" :lg="12">
                    <Card :key="item.time" v-for="item in blogs" :style="{margin: '1rem 0'}">
                        <div>
                            <h2 class="title" style="overflow: hidden">
                                <Icon type="ios-paper" style="color: #333;"/>
                                <a :href="item.url" v-text="item.title" target="_blank"></a>
                            </h2>

                            <Row :style="{padding: '0 1rem',margin: '.2rem 0'}" class="subRow">
                                <img src="https://static.segmentfault.com/v-5badf55c/global/img/logo-b.svg">
                                <Icon type="ios-calendar" class="icon"/>
                                <div class="date inlineBlock" v-text="item.time"></div>
                                发布
                                &nbsp;
                                <div v-if="item.zan > 0" style="display: inline-block">
                                    <Icon type="md-thumbs-up" class="icon"/>
                                    <div class="zan inlineBlock" v-text="item.zan"></div>
                                    赞
                                </div>
                            </Row>

                            <p style="padding: 0 1rem" v-text="item.abstract+'...'"></p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data: function () {
    return {
      blogs: [{ 'title': '【前端芝士树】Js中的闭包是怎么一回事 && 笔试问题集锦', 'url': 'https://segmentfault.com/a/1190000016489582', 'time': '9月21日', 'abstract': '这涉及到var作为变量声明的关键词时所出现的一些问题。比如，var 的 变量提升 以及 函数级作用域', 'zan': '2' }, { 'title': '【前端芝士树】Vue - 路由懒加载  - 实践所遇问题摘记', 'url': 'https://segmentfault.com/a/1190000016418202', 'time': '9月16日', 'abstract': '首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：', 'zan': '0' }, { 'title': '【论文阅读】Web Data Extraction Based On Visual Information', 'url': 'https://segmentfault.com/a/1190000016366643', 'time': '9月12日', 'abstract': '《Web Data Extraction Based On Visual Information and Partial Tree Alignment》 会议见刊：2014 11th Web Information System and Application Conference引用：GB/T 7714Fan S, Wang X, Dong Y. Web Data Ex...', 'zan': '0' }, { 'title': '【前端芝士树】for循环 + setTimeout', 'url': 'https://segmentfault.com/a/1190000016336095', 'time': '9月10日', 'abstract': '首先需要被提及的是setTimeout的事件机制，我们都知道js是单线程的，在它的事件队列中，同步优先于异步优先于回调。', 'zan': '0' }, { 'title': '【前端芝士树】如何对元素块实现垂直居中？', 'url': 'https://segmentfault.com/a/1190000016294678', 'time': '9月6日', 'abstract': '【前端芝士树】如何对元素块实现垂直居中？ 1/利用Flex布局来实现极速居中 The HTML {代码...} The CSS {代码...} 2/利用CSS和JS实现固定长宽容器的极速居中 The HTML {代码...} Horizontal and vertical centeri...', 'zan': '7' }, { 'title': '【前端芝士树】Vue.js面试题整理 / 知识点梳理', 'url': 'https://segmentfault.com/a/1190000016268245', 'time': '9月4日', 'abstract': 'ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。', 'zan': '57' }, { 'title': '【前端面试】 - 观远数据电话面试题', 'url': 'https://segmentfault.com/a/1190000016254269', 'time': '9月3日', 'abstract': '空类型：undefined null 值类型：基本数据类型 String Number Boolean引用型：复杂数据类型 Object Array 对象', 'zan': '2' }, { 'title': '【算法研究】网页信息提取 文献总结-差异和对比', 'url': 'https://segmentfault.com/a/1190000016032185', 'time': '8月16日', 'abstract': '《An Analytic Hierarchy Process Based Comparative Study of Web Data Extraction Approaches》2017介绍了结构化信息提取的发展过程，从算法角度进行分类和分析', 'zan': '0' }, { 'title': '【论文简读】 Deep web data extraction based on visual', 'url': 'https://segmentfault.com/a/1190000015903503', 'time': '8月6日', 'abstract': '《Deep web data extraction based on visual information processing》作者 J Liu 上海海事大学 2017 AIHC会议登载引用 Liu J, Lin L, Cai Z, et al. Deep web data extraction based on visual information pro...', 'zan': '0' }, { 'title': '【前端芝士树】详解CSS盒模型、BFC、OffsetWidth&ClientWidth&ScrollWidth', 'url': 'https://segmentfault.com/a/1190000015832011', 'time': '7月31日', 'abstract': '本文将从盒模型开始，一步步涉及一些常见的前端笔试和面试点 主要参考自第一篇文章，然而笔者在读的时候未觉详尽，便又去网上查阅了一番，扩充了其内容，希望也能给同学们提供一些参考。', 'zan': '1' }, { 'title': 'Bootstrap4 食用摘记（非入门教程）', 'url': 'https://segmentfault.com/a/1190000015555978', 'time': '7月6日', 'abstract': '这篇文章主要记录了自己在bootstrap3转bootstrap4的时候遇到的一些，非入门教程附上官方教程链接 [链接]', 'zan': '1' }, { 'title': 'Puppeteer 初探', 'url': 'https://segmentfault.com/a/1190000015371795', 'time': '6月24日', 'abstract': 'Puppeteer是一个Node库，它提供了一个高级API来通过DevTools协议控制无头 Chrome或Chromium ，它也可以配置为使用完整（非无头）Chrome或Chromium。', 'zan': '1' }, { 'title': 'Log4js 2.9.0 日志管理插件', 'url': 'https://segmentfault.com/a/1190000015334798', 'time': '6月20日', 'abstract': 'Node端的日志插件Log4js，以后版本更新了继续跟进 安装&&版本 {代码...} {代码...} 最简单的写法 {代码...} 稍微具体一些 {代码...} 输出结果 {代码...} 参考文献[链接]', 'zan': '0' }],
      welcome: 'Welcome'
    }
  }
}
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
    }

    .inlineBlock {
        display: inline-block;
    }

    p, small {
        color: #666;
        font-size: medium;
    }

    .icon {
        vertical-align: text-bottom;
        font-size: 1rem;
        color: #666;
        margin-right: .2rem;
    }

    .subRow {
        letter-spacing: 1px;
        font-size: .8rem;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        img {
            height: 1rem;
            position: relative;
            top: .3rem;
            margin-right: .6rem;
        }

    }
</style>
