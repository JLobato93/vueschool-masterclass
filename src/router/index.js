import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreadShow from "../components/ThreadShow";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/thread',
      name: 'ThreadShow',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
