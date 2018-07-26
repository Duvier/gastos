import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Account from '@/components/Account'
<<<<<<< HEAD
import Transaction from '@/components/Transaction'
=======
import Contador from '@/components/contador/Contador'
>>>>>>> 12724b3536e740b3b0cba3d4012d2b48c542f48f

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
<<<<<<< HEAD
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
=======
      path: '/prueba',
      name: 'Contador',
      component: Contador
>>>>>>> 12724b3536e740b3b0cba3d4012d2b48c542f48f
    },
  ]
})
