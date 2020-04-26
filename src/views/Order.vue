<template>
    <div class="order">
        <!--<form id="order" name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=LopT8q2nS4QW3UPBTUNmIw6r%2BchCw%2FaaYjss6Iq8WZyvoe3Cc5%2BHpH3jTZZuDSqAlJYQ9z65AJtFlcJVR%2Fj97xudB3x41llvFKgEqglDFNjpy9TSYcYGNPC56giOCPlPc2TtimHULj5rslS6mhaad%2BW%2FQcHv9mCTw%2BkqFH9FC9vo4tbRzLlQa%2FaOi7P5bK6IbTWL%2FYCmsSgmDye70pA41QCHWlzvttHdCboAC9wRs5Fq%2FWXb9imXmr60RDXbkXDiaFCwlwKZ4HTeYCajQUq5ayKZhfzY2Ue0q6TRH55K6wMV4lwR7aRcXO5LclohSehExG%2BYpv%2FIAVgLjAOFDsJVVg%3D%3D&return_url=http%3A%2F%2F%E5%85%AC%E7%BD%91%E5%9C%B0%E5%9D%80%2FreturnUrl&notify_url=http%3A%2F%2F120.24.186.190%3A8080%2Ftravel%2Fjson%2Fuser%2Forder%2Fadd&version=1.0&app_id=2016101700705301&sign_type=RSA2&timestamp=2020-04-25+21%3A27%3A20&alipay_sdk=alipay-sdk-java-3.7.110.ALL&format=json">
            <input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;15878212401791899434800&quot;,&quot;total_amount&quot;:&quot;169.00&quot;,&quot;subject&quot;:&quot;九寨沟风景区&quot;,&quot;body&quot;:&quot;·九寨沟是一条被森林所覆盖的山沟，因有九个藏族村寨坐落在这片高山湖泊群中而得名。 ·世界自然遗产、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络。&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
            <input type="submit" value="立即支付" style="display:none" >
        </form>-->
    </div>

</template>

<script>
    import {
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex'
    import {
        addOrder,
        reqOrderList

    } from 'api'

    export default {
        name: "order",
        data() {
            return {}
        },
        created() {
            this.addUserOrder()

        },
        mounted() {
            document.getElementById("order").submit();
        },
        computed: {
            ...mapState([
                ''
            ])
        },
        methods: {
            ...mapMutations([
                ''
            ]),
            async addUserOrder() {
                let result = await reqOrderList()
            }
        },
    }
</script>

<style scoped>

</style>