import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Account from '@/components/Account'
import Transaction from '@/components/Transaction'

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
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
  ]
})
