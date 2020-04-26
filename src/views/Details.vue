<template>
    <div class="details">
        <div class="img">
            <el-carousel
                height="500px"
                direction="vertical">
                <el-carousel-item v-for="img in detail.imgUrls" :key="img">
                    <el-image
                        style="width: 100%;"
                        :src="img"
                        fit="contain"
                    >

                    </el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="detail">
            <p class="area-name">{{detail.name}}</p>
            <p style="color: #aaa">景点介绍:</p>
            <p style="line-height: 25px;">{{detail.introduction}}</p>
            <p style="color: #aaa">所属地区:</p>
            <p>{{detail.address}}</p>
            
            <div class="area-bottom">
                <el-alert
                    :title="detail.remark"
                    type="warning">
                </el-alert>
                <p style="text-align: right;"><b style="font-size: 60px;color: red;">￥{{detail.ticketPrice}}</b></p>
            </div>
            <p style="text-align: center;">
                <el-button type="danger" icon="el-icon-goods">加入订单</el-button>
            </p>


        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex'
    import {
        findDetailById
    } from 'api'

    export default {
        name: "datails",
        data() {
            return {
                detail: null, // 详情
            }
        },
        created() {
            this.getDetail()
        },
        computed: {
            ...mapState([])
        },
        methods: {
            async getDetail() {
                let result = await findDetailById(this.$route.params.id)
                if (result.data.code === 0) {
                    this.detail = result.data.data
                } else {
                    this.$message.error(result.data.msg)
                }
            }
        }
    }
</script>

<style scoped>
    .details {
        display: flex;
    }

    .img {
        flex: 2;
        height: 600px;
    }

    .detail {
        flex: 2;
        height: 600px;
        padding: 40px;
    }

    .detail p {
        margin-top: 40px;
    }

    .area-name {
        font-weight: 800;
        font-size: 30px;
        text-align: center;
        margin-top: 0 !important;
    }
    .area-bottom {
        display: flex;
        margin-top: 20px;
        height: 108px;
    }
</style>