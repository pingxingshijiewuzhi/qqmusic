import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './views/recommend.vue'
import Rank from './views/rank.vue'
import Singer from './views/singer.vue'
import Search from './views/search.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
