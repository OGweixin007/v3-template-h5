<template>
  <div class="container">
    <van-nav-bar
      title="login"
      left-arrow
      left-text="home"
      @click-left="onClickLeft"
    ></van-nav-bar>
    <div class="mt-8">
      <van-image
        width="100"
        height="100"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script set>
import { ref } from 'vue'
import router from '../../router'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const onSubmit = (values) => {
      console.log('submit', values)
    }

    function onClickLeft() {
      router.push('home')
    }

    return {
      username,
      password,
      onSubmit,
      onClickLeft
    }
  }
}
</script>
