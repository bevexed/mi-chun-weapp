<script lang="ts">
  import Vue from 'vue';
  import { mapActions } from 'vuex'

  export default Vue.extend({
    mpType: 'app',
    async onLaunch() {
      uni.getSetting({
        //@ts-ignore
        success: async (ott: any): void => {
          console.log(ott);
          if (ott.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            await this.login({ data: 1 });
						// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
						// 所以此处加入 callback 以防止这种情况
          } else {
           uni.navigateTo({
						 url:'/pages/login/login'
					 })
          }
        }
      });

    },
    onShow() {
      console.log('App Show')
    },
    onHide() {
      console.log('App Hide')
    },
    methods: {
      ...mapActions('User', ['login']),
    },
  });
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		background: #f2f2f2;
	}
</style>
