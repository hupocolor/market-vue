import { defineStore } from "pinia";

export const useUserStroe = defineStore('user',{
    state: ()=>{
        return{
            token: '',
            isLogin: 0
        }
    },
    actions:{
        setToken(token){
            this.token = token;
        },
        setIsLogin(isLogin){
            this.isLogin = isLogin;
        }
    },
    persist:{
        storage: window.localStorage,
        enabled: true,
        starategies: [{
            key: 'market_user',
            store: localStorage
        }]
    }
})