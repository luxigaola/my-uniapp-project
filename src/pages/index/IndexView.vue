<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <uni-easyinput focus v-model="password" placeholder="请输入内容"></uni-easyinput>
    </view>
  </view>
</template>

<script setup>
import useUserStore from '@/store/useUserStore'
const user = useUserStore()
const password = ref('')
const title = ref('uniapp例子')
console.log(user.token)
console.log(import.meta.env.VITE_PATH)
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
