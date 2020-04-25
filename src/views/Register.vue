<template>
    <div class="register">
        <el-container>
            <el-header>

            </el-header>
            <el-main class="banner">
                <div class="form-container">

                    <el-form
                        ref="form"
                        :model="form"
                        :rules="rules"
                        label-width="80px"
                        label-position="top"
                        style="width: 80%;margin: 20px auto;"
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
                            <el-button type="primary" @click="register" size="medium">注册</el-button>
                        </el-row>
                    </el-form>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex'
    import {
        reqRegister
    } from 'api'

    export default {
        name: "Register",
        data() {
            return {
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
                ''
            ])
        },
        methods: {
            ...mapMutations([]),
            async register() {
                let result = await reqRegister(this.form.userName, this.form.password)
                if (result.data.code === 0) {
                    this.$message.success('恭喜你注册成功!')
                    this.$router.push({path: '/'})
                } else if (result.data.code === 201) {
                    this.$message.error('你的账号已存在!')
                } else {
                    this.$message.error(result.data.msg)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .register {
        height: 100vh;
        background-color: rgb(240, 240, 240);

    }

    .banner {
        height: 496px;
        background: url('../assets/img/reg-banner.jpg') -300px;
        background-size: cover;
        position: relative;
    }

    .form-container {
        width: 400px;
        height: 400px;
        background-color: #fff;
        position: absolute;
        right: 200px;
        top: 40px;
    }
</style>