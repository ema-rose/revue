import { createRouter, createWebHistory } from 'vue-router';

//import Home from '@/views/Home'

// GUIDE: This file defines urls for the frontend
const routes = [
  {
    path: '/',
    name: 'what3words',
    component: () => import(/* webpackChunkName: "what3words" */ '@/views/what3words')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp')
  },
  {
    path: '/s/:name',
    name: 'Subvue',
    component: () => import(/* webpackChunkName: "subvue" */ '@/views/Subvue')
  },

  {
    path: '/what3words',
    name: 'what3words',
    component: () => import(/* webpackChunkName: "what3words" */ '@/views/what3words')
  },

  {
    path: '/s/:subvuePermalink/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '@/views/Post')
  },
  {
    path: '/u/:username',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User')
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: () => import(/* webpackChunkName: "create" */ '@/views/CreatePost')
  },
  {
    path: '/create/subvue',
    name: 'CreateSubvue',
    component: () => import(/* webpackChunkName: "createsubvue" */ '@/views/CreateSubvue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
