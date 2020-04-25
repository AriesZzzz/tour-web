<template>
    <div id="app">
        <el-container>
            <el-header>
                <!--导航菜单-->
                <el-row type="flex" justify="end">
                    <el-col :span="6">
                        <el-menu :default-active="activeIndex" style="border: none;" mode="horizontal"
                                 @select="handleSelect">
                            <el-menu-item index="5">

                            </el-menu-item>
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">{{userName}}</template>
                                <el-menu-item index="2-1" style="text-align: center">已购景点</el-menu-item>
                                <el-menu-item index="2-2" style="text-align: center">留言反馈</el-menu-item>
                                <el-menu-item index="2-3" style="text-align: center" :disabled="!isLogin">退出登录</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="3" :disabled="isLogin">登录</el-menu-item>
                            <el-menu-item index="4">注册</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <!--路由视图在此切换-->
                <router-view v-title="$route.name"/>
            </el-main>
            <!--页脚-->
            <el-footer>
                <el-row type="flex" justify="center">
                    <el-col :span="3">
                        -更多旅游信息敬请期待-
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
        <!--弹出登录框-->
        <el-dialog
            title="用户请登录"
            :visible.sync="showLogin"
            width="30%"
        >
            <el-form
                ref="form"
                :model="form"
                :rules="rules"
                label-width="80px"
                label-position="top"
            >
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
                <el-row type="flex" justify="center" style="margin-top: 70px;">
                    <el-button type="primary" @click="login">登录</el-button>
                </el-row>
            </el-form>
        </el-dialog>


    </div>
</template>
<script>

    import {
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex'
    import {
        reqRegister,
        reqLogin
    } from 'api'

    export default {
        name: 'app',
        data() {
            return {
                isLogin: false, // 是否登录
                activeIndex: '1', // 默认选中菜单
                showLogin: false, // 是否展示登录框
                activeName: 'first', // 默认城市名
                form: {  // 表单数据
                    userName: '',
                    password: ''

                },
                // 验证规则
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
        created() {
        },
        computed: {
            ...mapState([
                'userName'
            ])
        },
        methods: {
            ...mapMutations([
                'setUserName',
                'logout'
            ]),
            async login() {
                // if (this.userName !== '游客') return this.$message.warning('你已经登录，请勿重复登录！')
                let result = await reqLogin(this.form.userName, this.form.password)
                if (result.data.code === 0) {
                    let user = result.data.data.number
                    this.$message.success('登录成功！')
                    this.setUserName(user)
                    this.showLogin = false
                    this.isLogin = true
                } else {
                    this.$message.error(result.data.msg)
                }


            },
            // 退出登录
            clickLogout() {
                this.$confirm('确认退出登录？')
                    .then(() => {
                        this.logout()
                        this.isLogin = false
                    })
                    .catch(() => {

                    });
            },
            handleSelect(key) {
                console.log(key)
                switch (key) {
                    // 首页
                    case '1':
                        this.$router.push({name: '首页'})
                        break
                    // 用户名
                    case '2':
                        break
                    // 退出登录
                    case '2-3':
                        this.clickLogout()
                        break
                    // 登录
                    case '3':
                        this.showLogin = true
                        break
                    // 注册
                    case '4':
                        this.$router.push({name: '注册'})
                        break
                }
            }
        },
        watch: {
            $route(newVal, oldVal) {
                if (oldVal.name === '注册') {
                    if (!this.isLogin)
                        this.showLogin = true
                }
                // 根据当前路由决定选中选项
                this.activeIndex = {
                    '首页': '1',
                    '注册': '4'
                }[this.$route.name]
            }
        },
    }
</script>
