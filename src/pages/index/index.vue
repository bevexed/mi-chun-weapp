<template>
    <view class="content">
        <image class="logo" src="../../static/logo.png"></image>
        <view>
            <text class="title">{{title}}</text>
        </view>
    </view>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {}
    });
</script>

<style lang="scss">
    .content {
        text-align: center;
        height: upx(10);

        .logo {
            height: upx(10);
            width: upx(20);
        }
    }


</style>
