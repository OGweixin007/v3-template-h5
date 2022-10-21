import { defineStore } from "pinia";

export const useUserStore = defineStore('app-user', {
    state: () => ({
        userInfo: {
            name: 'Tom',
            isAdmin: true
        },
        token: 'x-token'
    }),
    getters: {
        getUserInfo(state) {
            return state.userInfo
        },
        getToken(state) {
            return state.token
        }
    },
    actions: {
        login() {
            console.log('login... :>> ');
        },
        setUserInfo() {
            this.userInfo.name = 'Alex'
            
        }
    }

})