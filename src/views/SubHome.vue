<template>
    <div class="home">


        <!--轮播图-->
        <el-carousel :interval="4000" type="card" height="600px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

        <!--分割线-->
        <h1 style="text-align: center;font-size: 36px;margin: 80px 0;">精选特惠</h1>
        <!--<el-divider content-position="center">精选特惠</el-divider>-->

        <!--卡片展示列表-->
        <el-row type="flex" justify="center" style="position: relative;">
            <div class="filter-input">
                <el-input
                    placeholder="搜索"
                    prefix-icon="el-icon-search"
                    v-model="searchFilter"
                    @input="getTourData"
                >
                </el-input>
            </div>
            <el-col :span="24">
                <el-tabs v-model="activeName" @tab-click="">
                    <el-tab-pane label="四川" name="first">
                        <el-row type="flex" justify="center" :gutter="20"
                                style="flex-wrap: wrap;margin-top: 10px;">
                            <el-col :span="6" v-for="item in tourData" :key="item.name" style="margin-bottom: 10px;"
                                    class="card">
                                <el-card :body-style="{ padding: '15px' }">
                                    <!--点击一张图即可大图预览该栏所有图片-->
                                    <el-image
                                        style="width: 100%;"
                                        :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                                        :preview-src-list="['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png']">
                                    </el-image>

                                    <div style="padding: 14px;">
                                        <span>{{item.name}}</span>
                                        <div class="bottom clearfix">
                                            <span class="time">{{ item.address }}</span>
                                            <el-button type="text" class="button"
                                                       @click="goToDetail(item.scenicSpotId)">查看详情
                                            </el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <!--<el-tab-pane label="城市2" name="second">
                        <el-row type="flex" justify="center">
                            <el-col :span="8" v-for="(o, index) in 6" :key="o">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                        class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ 2020 }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="城市3" name="third">
                        <el-row type="flex" justify="center">
                            <el-col :span="8" v-for="(o, index) in 6" :key="o">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                        class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ 2020 }}</time>
                                            <el-button type="text" class="button">登录</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="城市4" name="fourth">
                        <el-row type="flex" justify="center">
                            <el-col :span="8" v-for="(o, index) in 6" :key="o">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                        class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ 2020 }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>-->
                </el-tabs>
            </el-col>
        </el-row>

        <el-row type="flex" justify="end">
            <el-col :span="8">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="8"
                    :total="20">
                </el-pagination>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        reqTourInfo
    } from 'api'

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                searchFilter: '',
                activeName: 'first', // 默认选中的菜单
                currPageInfo: null, // 当前页面信息
                tourData: [], // 旅游数据
                citys: [
                    '四川',
                    '浙江',
                    '广州',
                    '甘肃'
                ], // 城市信息
            }
        },
        created() {
            this.getTourData()
        },
        computed: {},
        methods: {
            async getTourData() {
                let result = await reqTourInfo(this.searchFilter)
                if (result.data.code === 0) {
                    this.currPageInfo = result.data.page
                    this.tourData = result.data.data
                } else {
                    this.$message.error('请求失败')
                }
            },
            goToDetail(id) {
                this.$router.push({
                    name: '详情',
                    params: {
                        id
                    }
                })
            }
        },


    }
</script>
<style lang="scss" scoped>
    .filter-input {
        width: 200px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 999;
    }

    .card {
        transition: all .6s ease;

        &:hover {
            /*transform: scale(1.1);*/
        }
    }

    .logo {
        display: inline-block;
        width: 50vw;
        height: 100%;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    /deep/ .el-tabs__nav-wrap {
        /*width: 40%;*/
        &:after {
            content: '';
            height: 100px;
            background-color: transparent !important;
        }
    }

    .el-dialog__header {
        text-align: center;
    }
</style>
