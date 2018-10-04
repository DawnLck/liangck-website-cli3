<template>
    <div id="app" class="layout">
        <Layout :style="{paddingBottom: '12rem'}">
            <Header class="header">
                <Row type="flex" justify="space-between">
                    <Col :xs="24" :sm="24" :md="24" :lg="8" class="layout-logo">
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
                                <MenuItem name="2" to="/project">
                                    <Icon type="ios-keypad"></Icon>
                                    项目 | Project
                                </MenuItem>
                                <MenuItem name="3" to="/blog">
                                    <Icon type="ios-analytics"></Icon>
                                    博客 | Blog
                                </MenuItem>
                                <MenuItem name="4" to="/lab">
                                    <Icon type="ios-paper"></Icon>
                                    实验 | Lab
                                </MenuItem>
                            </Menu>
                        </div>
                    </Col>
                </Row>

            </Header>
            <Layout :style="{backgroundColor:'white', minHeight: '46rem'}">
                <router-view></router-view>
            </Layout>
            <Footer class="footer">
                <Row :style="{backgroundColor:'white'}">
                    <Col :xs="0" :sm="0" :md="0" :lg="3">
                        <h2></h2>
                    </Col>
                    <Col :xs="12" :sm="12" :md="12" :lg="4">
                        <h2>坐标</h2>
                        <p>
                            <Icon type="ios-navigate"/>
                            浙江 · 杭州
                        </p>
                    </Col>
                    <Col :xs="12" :sm="12" :md="12" :lg="4">
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
      isCollapsed: true
    }
  }
}
</script>

<style lang="scss">
    #app {
        /*background: #f5f7f9;*/
        position: relative;
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #000;

        .header{
            background: white;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
            margin-bottom: 3px;
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
</style>
