<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store/modules/user'

const router = useRouter()
const userStore = useUserStore()

defineProps({
    msg: String
})

const active = ref(0)

function btnCLick() {
    userStore.login()
    Toast("something happend!")
}

function btnRouterLink() {
    router.push('/login')
}

function onClickRight() {

}

function btnSetUser() {
    userStore.setUserInfo()
}

function btnSetData() {
    userStore.$patch(state => {
        state.token = 'x-token-custom',
            state.userInfo = Object.assign({}, state.userInfo, {
                name: 'sara',
                age: 18
            })
    })
}

const count = ref(0)
</script>

<template>
    <van-nav-bar title="v3-template-h5" right-text="按钮" @click-right="onClickRight" />
    <div class="mt-8">
        <h1>{{ msg }}</h1>
        <van-space class="ml-2 mr-2">
            <van-button type="primary" @click="btnCLick">Pinia Login()</van-button>
            <van-button type="success" @click="btnRouterLink">Login Page</van-button>
            <van-button type="primary" @click="btnSetUser">Set User</van-button>
            <van-button type="warning" @click="btnSetData">Set Data</van-button>
        </van-space>

        <div class="card">
            <button type="button" @click="count++">count is {{ count }}</button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>

        <p>
            Check out
            <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue +
            Vite
            starter
        </p>
        <p>
            Install
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
            in your IDE for a better DX
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</template>

<style scoped>
/* .container {
    width: 100vw;
    min-height: 100vh;
} */

.read-the-docs {
    color: #888;
}
</style>
