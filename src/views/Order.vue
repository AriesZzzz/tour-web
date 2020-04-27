<template>
    <div class="order">
        <el-table
            :data="orderData"
            style="width:100%;"
            stripe
            highlight-current-row
            @current-change="handleCurrentChange"
        >
            <el-table-column
                label="下单时间">
                <template slot-scope="{row}">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ row.createTime }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="景点名称">
                <template slot-scope="{row}">
                    <span style="margin-left: 10px">{{ row.scenicSpot.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="票价(￥)">
                <template slot-scope="{row}">
                    <span style="margin-left: 10px">{{ row.money }}</span>
                </template>
            </el-table-column>

            <el-table-column label="票数">
            <template slot-scope="{row}">
                <span style="margin-left: 10px">{{ row.ticketNum }}</span>
            </template>
        </el-table-column>

            <el-table-column label="状态">
                <template slot-scope="{row}">
                    <el-tag :type="state(row.state)">{{row.state}}</el-tag>
                </template>
            </el-table-column>
        </el-table>


    </div>

</template>

<script>

    import {
        reqOrderList
    } from 'api'

    export default {
        name: "order",
        data() {
            return {
                orderData: [], // 订单数据
                orderPages: null, // 订单页数对象
                currPage: 1, // 当前页数
                currOrderId: '', // 订单ID
            }
        },
        created() {
            this.getOrderList()

        },
        mounted() {

        },
        computed: {
            state() {
                return (state) => state === '代付款' ? 'danger' : 'success'
            }
        },
        methods: {
            handleCurrentChange(currentRow) {
                this.currOrderId = currentRow.orderId
            },

            async getOrderList() {
                let result = await reqOrderList(this.currPage)
                if (result.data.code === 0) {
                    this.orderData = result.data.data
                    this.orderPages = result.data.page
                } else {
                    this.$message.error(result.data.msg)
                }
            }
        },
    }
</script>

<style scoped>

</style>