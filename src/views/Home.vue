<template>
    <div class="home">
        <el-container>
            <el-header>
                <!--<div class="logo">-->

                <!--</div>-->
                <!--导航菜单-->
                <el-row type="flex" justify="end">
                    <el-col :span="6">
                        <el-menu :default-active="activeIndex" style="border: none;" mode="horizontal"
                                 @select="handleSelect">
                            <el-menu-item index="1">关于</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">{{userName}}</template>
                                <el-menu-item index="2-1">已购景点</el-menu-item>
                                <el-menu-item index="2-2">留言反馈</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="3">登录</el-menu-item>
                            <el-menu-item index="4">注册</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>

            </el-header>

            <el-main>
                <!--轮播图-->
                <el-carousel :interval="4000" type="card" height="600px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

                <!--分割线-->
                <h2 style="text-align: center;">精选特惠</h2>
                <!--<el-divider content-position="center">精选特惠</el-divider>-->

                <!--卡片展示列表-->
                <el-row type="flex" justify="center">
                    <el-col :span="24">
                        <el-tabs v-model="activeName" @tab-click="">
                            <el-tab-pane label="城市1" name="first">
                                <el-row type="flex" justify="center" :gutter="20"
                                        style="flex-wrap: wrap;margin-top: 10px;">
                                    <el-col :span="6" v-for="(o, index) in 8" :key="o" style="margin-bottom: 10px;"
                                            class="card">
                                        <el-card :body-style="{ padding: '15px' }">
                                            <!--点击一张图即可大图预览该栏所有图片-->
                                            <el-image
                                                style="width: 100%;"
                                                :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                                                :preview-src-list="['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png']">
                                            </el-image>

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
                            <el-tab-pane label="城市2" name="second">
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
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>


            </el-main>
            <!--弹出登录框-->
            <el-dialog
                title="用户请登录"
                :visible.sync="showLogin"
                width="40%"
                height="40%"
            >
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="用户名" prop="userName">
                        <el-input
                            v-model="form.userName"
                            placeholder="请输入用户名"
                            clearable
                            prefix-icon="el-icon-user-solid"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            v-model="form.password"
                            placeholder="请输入密码"
                            show-password prefix-icon="el-icon-lock"
                            clearable></el-input>
                    </el-form-item>
                    <el-row type="flex" justify="center">
                        <el-button type="primary" @click="login">登录</el-button>
                    </el-row>
                </el-form>
            </el-dialog>

            <!--页脚-->
            <el-footer>
                <el-row type="flex" justify="center">
                    <el-col :span="3">
                        -更多旅游信息敬请期待-
                    </el-col>
                </el-row>
            </el-footer>


        </el-container>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                activeIndex: '1', // 默认选中的菜单
                showLogin: false, // 是否展示登录框
                activeName: 'first', // 默认城市名
                form: {
                    userName: '',
                    password: ''

                }, // 表单数据
                rules: {
                    userName: [
                        {
                            required: true,
                            min: 3,
                            max: 16,
                            message: '长度在 3-16 个字符之间',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            min: 8,
                            max: 16,
                            message: '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符',
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapState([
                'userName'
            ])
        },
        methods: {
            ...mapMutations([
                'setUserName'
            ]),
            login() {
                this.showLogin = false
                this.setUserName('Mark')
            },
            handleSelect(key, keyPath) {

                console.log(key, keyPath);
                switch (key) {
                    case '1':
                        break
                    case '2':
                        break
                    case '3':
                        this.showLogin = true
                        break
                    case '4':
                        break
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
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

    .el-tabs__nav-wrap {
        &:after {
            content: '';
            height: 100px;
            background-color: blue !important;
        }
    }
</style>
