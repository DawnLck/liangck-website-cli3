<template>
    <div class="about">
        <Row type="flex" justify="center" align="top">
            <Col :xs="22" :sm="22" :md="20" :lg="10">
                <Card>
                    <div class="mr-myresume-left">
                        <div class="myresume">
                            <Row id="info_basic" :style="{height: '10rem'}" class="verticalAlign_middle">
                                <Col span="4">
                                    <img class="mr_headimg" id="userpic"
                                         src="//www.lgstatic.com/i/image/M00/BA/E7/CgqKkVjGPu2ACQuoAABNstySON8414.jpg" alt="头像">
                                </Col>
                                <Col span="20" :style="{paddingLeft: '2rem', fontSize: '1.2rem'}">
                                    <div class="basic-info">
                                        <div class="basic-name-area">
                                            <h2 class="basic-name female">梁朝凯</h2>
                                            <i class="icon-sex icon-sex__male "></i>
                                        </div>
                                        <p class="basic-self">
                                            <span class="basic-school">浙江工业大学 / </span>
                                            <span class="basic-edu">硕士 / </span>
                                            <span class="basic-end-year">2019年毕业 /   </span>
                                            <span class="basic-age">正年轻</span>
                                        </p>
                                        <p>
                                            <Icon type="md-call" class="icon"/>
                                            <span>15757115330</span>
                                        </p>
                                        <p>
                                            <Icon type="ios-mail" class="icon"/>
                                            <span>youchoudeyu@qq.com</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Divider></Divider>

                            <Row id="info_introduce">
                                <h2 class="second_title">
                                    自我描述
                                </h2>
                                <Row :style="{paddingBottom: '1rem'}">
                                    <Tag type="border" color="primary">充满活力</Tag>
                                    <Tag type="border" color="primary">对一切事物充满好奇</Tag>
                                    <Tag type="border" color="primary">认认真真学习</Tag>
                                    <Tag type="border" color="primary">踏踏实实编程</Tag>
                                </Row>
                                <div class="per-self_content">
                                    <div class="per-self_des">
                                        <p class="p_content">
                                            我拥有三年的前端开发经验，熟练掌握Javascript以及Vue这样的MVVM框架，充分理解前端开发对于视觉设计、用户体验和网站性能的重要性，具有接近全栈开发的能力，崇尚“认认真真学习，踏踏实实编程”。</p>
                                        <p class="p_content">我会以成为一个卓越的前端工程师为己任，努力前行。</p>
                                        <p><br></p>
                                    </div>
                                </div>
                            </Row>

                            <Divider></Divider>

                            <Row id="info_education">
                                <h2 class="second_title">
                                    教育经历
                                </h2>
                                <Row class="verticalAlign_middle" :style="{marginBottom: '1rem'}">
                                    <Col span="4" offset="2">
                                        <img src="//www.lgstatic.com/i/image/M00/AD/50/CgqKkVi1E6CACykiAAAOWLB1szU36.jpeg"
                                             class="logo" alt="学校Logo">
                                    </Col>
                                    <Col span="18">
                                        <p class="exp-list_time">2016.9 ~ 2019.6</p>
                                        <h4>浙江工业大学</h4>
                                        <p>研究生 / 硕士 / 全日制 / 软件工程</p>
                                    </Col>
                                </Row>
                                <Row class="verticalAlign_middle">
                                    <Col span="4" offset="2">
                                        <img src="//www.lgstatic.com/i/image/M00/AD/50/CgqKkVi1E6CACykiAAAOWLB1szU36.jpeg"
                                             class="logo" alt="学校Logo">
                                    </Col>
                                    <Col span="18">
                                        <p class="exp-list_time">2012.9 ~ 2016.6</p>
                                        <h4>浙江工业大学</h4>
                                        <p>本科生 / 学士 / 全日制 / 软件工程</p>
                                    </Col>
                                </Row>
                            </Row>
                            <Divider></Divider>

                            <Row id="info_intern">
                                <h2 class="second_title">
                                    实习经历
                                </h2>
                                <Row :style="{marginBottom: '1rem'}">
                                    <Row>
                                        <Col span="6" style="text-align: center">
                                            <img src="../assets/netease.jpg" style="width: 80%;">
                                        </Col>
                                        <Col span="18">
                                            <p class="exp-list_time">2017.12 ~ 2018.06</p>
                                            <h4 class="name">网易（杭州）网络有限公司 / 雷火游戏部 / 网站组</h4>
                                        </Col>
                                        <Row :style="{paddingBottom: '1rem'}">
                                            <Tag type="border">H5游戏</Tag>
                                            <Tag type="border">Web前端开发</Tag>
                                            <Tag type="border">Phaser.js</Tag>
                                        </Row>
                                    </Row>
                                    <Row>
                                        <p class="p_content">
                                            在这六个月里，参与了网易与美泰合作，也是网易首次在海外发布的H5游戏产品：UNO！游戏的制作，该产品于17年12月25日在Facebook Messenger上线，首周即获得了Facebook官方的全球推荐，首月即有超过300万的玩家体验了全新的UNO手游。在该项目中，负责基于Phaser.js框架的游戏开发，涵盖了音效、设置面板、语言包等功能以及APP版本UNO游戏的账号中心制作。
                                        </p>
                                    </Row>
                                </Row>
                            </Row>
                            <Divider></Divider>

                            <Row id="info_project">
                                <h2 class="second_title">
                                    项目经历
                                </h2>
                                <Row>
                                    <h4 style="text-align: center">基于深度感知的网页信息提取平台</h4>
                                    <p style="text-align: center" class="exp-list_time">2017.03 ~ 2017.12</p>
                                    <div class="exp-project_des">
                                        <p class="p_content">使用DNN神经网络，从微博、论坛、贴吧等相似的网站中提取并训练模型，实现输入一个网址，便能在极短的时间内有效提取其中的关键网页信息，和以往的方法不同点在于，所有的网页都可以依照这个规则实现，无需再根据每个网页的类型设计一个网页信息提取器。</p>
                                        <p class="p_content"> 大致流程可以分为两块，一是基于DOM树结合视觉信息进行规则性地判定大致的DOM类型， 二是通过一个三层的前馈神经网络进行样本训练，给出DOM类型的概率，最后通过权重结合判定信息，给出目标样本DOM点的相关类型，从而实现多类别的网页信息提取，在以往正文提取的基础上，拓宽提取的类型，更具有适应性和泛化能力。</p>
                                        <p><br></p>
                                    </div>
                                </Row>

                                <Row>
                                    <h4 style="text-align: center">基于深度感知的智慧城市管理解决方案平台</h4>
                                    <p style="text-align: center" class="exp-list_time">2015.09 ~ 2016.06</p>
                                    <div class="exp-project_des">
                                        <p class="p_content"> 从微博、wiki、论坛等各类信息聚合渠道，通过社交网络的传递路径，抓取与给定的关键字相匹配的数据。同时，以数据深度感知的角度，通过改进的数据语义化挖掘算法，从海量数据中提取并压缩信息，最终通过数据可视化的技术展现，挖掘其中的规律。</p>
                                        <p><br></p>
                                    </div>
                                </Row>

                                <Row>
                                    <h4 style="text-align: center">中国人脑功能区精确定位高维可视化在线平台 前端开发及文档编写</h4>
                                    <p style="text-align: center" class="exp-list_time">2014.10 ~ 2015.10</p>
                                    <div class="exp-project_des">
                                        <p class="p_content"> 平台向专业医学人员及相关研究者提供一个中国人脑功能区精确定位高维可视化系统——包括完整大脑图集的精确功能区显示，在线脑纤维成像及指标计算与分析，临床辅助输出报告。基于现有的技术，将人脑纤维数据通过一定的算法进行分析处理，得到相应的处理报告，并以三维可视的模型呈现在网页端。便于研究者或应用者进行分析。</p>
                                        <p><br></p>
                                    </div>
                                </Row>
                            </Row>
                            <Divider></Divider>

                            <Row>
                                <h2 class="second_title">
                                    社交主页
                                </h2>
                                <Row :style="{overflow: 'hidden'}">
                                    <div style="padding-left: 2rem; margin-bottom: 1rem;"  class="verticalAlign_middle">
                                        <img src="https://www.lgstatic.com/common/image/social/default@2x.png"
                                             alt="My Website" style="min-height: 2rem; margin-right: 1rem;">
                                        <a href="http://liangck.com" target="_blank" style="font-size: 1.2rem;">http://liangck.com/</a>
                                    </div>
                                    <div style="padding-left: 2rem; margin-bottom: 1rem;"  class="verticalAlign_middle">
                                        <img src="https://www.lgstatic.com/common/image/social/segmentfault@2x.png"
                                             alt="My Website" style="min-height: 2rem; margin-right: 1rem;">
                                        <a href="https://segmentfault.com/blog/dawnlck" target="_blank" style="font-size: 1.2rem;">https://segmentfault.com/blog/dawnlck</a>
                                    </div>
                                    <div style="padding-left: 2rem; margin-bottom: 1rem;"  class="verticalAlign_middle">
                                        <img src="https://www.lgstatic.com/common/image/social/github@2x.png"
                                             alt="My Website" style="min-height: 2rem; margin-right: 1rem;">
                                        <a href="https://github.com/DawnLck" target="_blank" style="font-size: 1.2rem;">https://github.com/DawnLck</a>
                                    </div>
                                </Row>
                            </Row>
                            <Divider></Divider>
                            <div class="mr_bottom_r">
                                <span>简历更新于</span><span class="upResumeTime">2018-10-04</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col :xs="0" :sm="0" :md="0" :lg="4" style="margin-left: 1rem">
                <Card>
                    <h3 class="second_title">
                        求职意向
                    </h3>
                    <div class="subCard">
                        <p>
                            <Icon type="ios-briefcase" class="icon" />
                            <span>Web前端开发</span>
                        </p>
                        <p>
                            <Icon type="md-time" class="icon"/>
                            <span>全职</span>
                        </p>
                        <p>
                            <Icon type="md-locate" class="icon"/>
                            <span>浙江 · 杭州</span>
                        </p>
                        <p>
                            <Icon type="ios-card" class="icon"/>
                            <span>14 ~ 22k / 面议</span>
                        </p>
                        <p>
                            <Icon type="ios-analytics" class="icon"/>
                            <span>积极找工作中 / 随时入岗</span>
                        </p>
                    </div>
                </Card>
                <Card style="margin-top: 1rem;" :style="{padding: 0}">
                    <div class="subNav">
                        <ul>
                            <li>
                                <Icon type="ios-briefcase" class="icon" />
                                <span>自我描述</span>
                            </li>
                            <li>
                                <Icon type="md-time" class="icon"/>
                                <span>教育经历</span>
                            </li>
                            <li>
                                <Icon type="md-locate" class="icon"/>
                                <span>实习经历</span>
                            </li>
                            <li>
                                <Icon type="ios-card" class="icon"/>
                                <span>项目经历</span>
                            </li>
                            <li>
                                <Icon type="ios-analytics" class="icon"/>
                                <span>社交主页</span>
                            </li>
                        </ul>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'about'
}
</script>

<style lang="scss" scoped>
    $primary: #2d8cf0;

    .about {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        /*font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;*/
        margin: 1rem 0;
        h4 {
            color: #333;
        }
        p {
            letter-spacing: 1px;
            color: #666;
            &.p_content{
                text-indent: 2rem;
            }
        }
        img.logo{
            width: 80%;
            max-width: 4rem;
        }

        .mr_headimg{
            width: 100%;
            min-width: 4rem;
        }
    }

    .subCard{
        font-size: 1rem;
        padding-left: 2rem;
        p{
            margin-bottom: .6rem;
        }
    }
    .subNav{
        ul{
            list-style: none;
            li{
                height: 3rem;
                font-size: 1rem;
                padding-left: 2rem;
                display: flex;
                align-items: center;
                cursor: pointer;
                &:hover{
                    background: #FAFAFA;
                }
            }
            .icon{
                margin-right: 1rem;
            }
        }
    }

    .exp-list_time{
        font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica,serif;
    }

    .icon {
        color: $primary;
        vertical-align: text-bottom;
        font-size: 1.2rem;
        margin-right: .4rem;
    }

    .second_title {
        border-left: .4rem solid $primary;
        padding-left: .4rem;
        margin-bottom: 1rem;
    }

    .verticalAlign_middle {
        display: flex;
        align-items: center;
    }
</style>
