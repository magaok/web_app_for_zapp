import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CitizenReport from '../views/CitizenReport.vue'
import Tickets from '../views/Tickets.vue'
import Jobs from '../views/Jobs.vue'
import Places from '../views/Places.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/citizenreport',
    name: 'citizenreport',
    component: CitizenReport
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: Tickets
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/places',
    name: 'places',
    component: Places
  }
]

const router = new VueRouter({
  routes
})

export default router
