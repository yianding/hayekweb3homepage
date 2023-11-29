//引入定义Store的方法
import { defineStore } from 'pinia'

const useAppData = defineStore('appData', {
  state () {
    return {
      wallet: '',
      isVip: false,
      isLogin: false,
      daiToken: null,
      movie: null,
      selAgent: null
    }
  }
})

export {useAppData};