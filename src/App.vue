<template>
    <div id="app" class="layout">
        <Layout :style="{paddingBottom: '12rem'}">
            <Header class="header">
                <Row type="flex" justify="space-between">
                    <Col :xs="20" :sm="20" :md="20" :lg="8" class="layout-logo">
                        云中的猫
                    </Col>
                    <Col :xs="0" :sm="0" :md="0" :lg="16">
                        <div class="layout-nav">
                            <Menu mode="horizontal" theme="light" active-name="0" class="clearfix">
                                <MenuItem name="0" to="/">
                                    <Icon type="ios-navigate"></Icon>
                                    首页 | Home
                                </MenuItem>
                                <MenuItem name="1" to="/about">
                                    <Icon type="md-information-circle"/>
                                    简历 | About Me
                                </MenuItem>
                                <!--<MenuItem name="2" to="/project">-->
                                    <!--<Icon type="ios-keypad"></Icon>-->
                                    <!--项目 | Project-->
                                <!--</MenuItem>-->
                                <MenuItem name="3" to="/blog">
                                    <Icon type="ios-analytics"></Icon>
                                    博客 | Blog
                                </MenuItem>
                                <!--<MenuItem name="4" to="/lab">-->
                                    <!--<Icon type="ios-paper"></Icon>-->
                                    <!--实验 | Lab-->
                                <!--</MenuItem>-->
                            </Menu>
                        </div>
                    </Col>
                    <Col :xs="4" :sm="4" :md="4" :lg="0">
                        <a href="#menu" id="toggle" @click="toggleMenu" :class="{on: toggleActive}"><span></span></a>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="0" id="toggleMenu" :class="{on: toggleActive}">
                        <Divider v-show="toggleActive" :style="{margin: 0}"></Divider>
                        <Menu mode="horizontal" theme="light" active-name="0" class="clearfix">
                            <MenuItem :name="item.index" :to="item.route" v-for="item in menu" :key="item.index" class="toggleMenu-item">
                                <Icon :type="item.icon"></Icon>
                                <span v-text="item.name">
                                </span>
                            </MenuItem>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Layout class="content">
                <router-view></router-view>
            </Layout>
            <Footer class="footer">
                <Row type="flex" justify="center" :style="{backgroundColor:'white'}">
                    <Col :xs="0" :sm="0" :md="0" :lg="3">
                        <h2></h2>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="4">
                        <h2>坐标</h2>
                        <p>
                            <Icon type="ios-navigate"/>
                            浙江 · 杭州
                        </p>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="4">
                        <h2>我的联系方式</h2>
                        <p>
                            <Icon type="ios-mail"/>
                            youchoudeyu@qq.com
                        </p>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="4">
                        <h2>关于本站</h2>
                        <p>此站是Liangck的个人小站，已经在
                            <a href="https://gitee.com/youchoudeyu/liangck_website" title="网页模板" target="_blank">码云</a>
                            上开源，本喵会持续维护和更新的，感谢大家的支持，特别感谢
                            <a>我的宝宝LGY</a>
                            对本网站的关注和鼓励，啵一个mua~(*/ω＼*)
                        </p>
                    </Col>
                    <Col :xs="0" :sm="0" :md="0" :lg="3">
                        <h2></h2>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      isCollapsed: true,
      toggleActive: false,
      menu: [
        {
          index: 0,
          name: '首页 | Home',
          route: '/',
          icon: 'ios-navigate'
        },
        {
          index: 1,
          name: '简历 | About Me',
          route: '/about',
          icon: 'md-information-circle'
        },
        {
          index: 2,
          name: '博客 | Blog',
          route: '/blog',
          icon: 'ios-analytics'
        }
      ]
    }
  },
  methods: {
    toggleMenu (e) {
      console.log('Toggle ... ')
      this.toggleActive = !this.toggleActive
    }
  }
}
</script>

<style lang="scss">
    $primary: #2d8cf0;
    #app {
        /*background: #f5f7f9;*/
        position: relative;
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #000;

        .header{
            background: white;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
            margin-bottom: 0;
            z-index: 999;
            height: auto;
        }
        .content{
            min-height: 46rem;
            background: white;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        }
        .footer {
            padding-top: 1rem;
            position: absolute;
            bottom: 0;
            width: 100%;
            background: white;
        }
    }

    .layout-logo {
        width: 10rem;
        /*height: 30px;*/
        /*line-height: 30px;*/
        /*background: #5b6270;*/
        border-radius: 3px;
        float: left;
        position: relative;
        /*top: 15px;*/
        /*left: 20px;*/

        color: black;
        font-size: 2rem;
        font-weight: bolder;
    }

    .layout-nav {
        float: right;
        margin: 0 20px 0 auto;
    }

    .clearfix:before, .clearfix:after {
        display: block;
        content: '';
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }

    .ivu-col {
        min-height: 2rem;
    }

    .ivu-menu-horizontal.ivu-menu-light:after {
        background: none !important;
    }

    #toggle {
        display: block;
        width: 28px;
        height: 30px;
        margin: 30px auto 10px;
        span{
            position: relative;
            display: block;
            &:after, &:before{
                content: "";
                position: absolute;
                left: 0;
                top: -9px;
            }
            &:after{
                top: 9px;
            }
        }
        span, span:before, span:after{
            width: 100%;
            height: .2rem;
            background-color: #888;
            transition: all 0.3s;
            backface-visibility: hidden;
            border-radius: 2px;
        }
        /* on activation */
        &.on{
            span{
                background-color: transparent;
                &:before{
                    transform: rotate(45deg) translate(5px, 5px);
                }
                &:after{
                    transform: rotate(-45deg) translate(7px, -8px);
                }
            }
        }
    }
    #toggleMenu{
        height: 0;
        min-height: 0;
        transition: height 600ms ease-out;
        overflow: hidden;

        &.on{
            height: 10rem;
            border-top: 1px solid $primary;
        }
        .toggleMenu-item{
            width: 100%;
            text-align: left;
            margin: 0;
            padding: 0;
            height: 3rem;
            line-height: 3rem;
        }
    }
</style>
