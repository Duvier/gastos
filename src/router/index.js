import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Account from '@/components/Account'
import Contador from '@/components/contador/Contador'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/prueba',
      name: 'Contador',
      component: Contador
    },
  ]
})
