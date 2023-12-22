import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LandingView from '@/views/landingView.vue'
import LocationView from '@/views/LocationView.vue'
import MapView from '@/views/MapView.vue'
import TripView from '@/views/TripView.vue'
import DriverView from '@/views/DriverView.vue'
import StandbyView from '@/views/StandbyView.vue'
import DrivingView from '@/views/DrivingView.vue'
import DriverProfile from '@/components/DriverProfile.vue';
import axios from 'axios'
import { isEqual } from 'fast-deep-equal';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView
    },
    {
      path: '/standby',
      name: 'standby',
      component: StandbyView
    },
    {
      path: '/driver',
      name: 'driver',
      component: DriverView
    },
    {
      path: '/driving',
      name: 'driving',
      component: DrivingView
    },
    { path: '/driver-info', 
      name: 'driver-info',
      component: DriverProfile 
    },
  ]
})

router.beforeEach((to, from) => {
  if(to.name === 'login'){
    return true
  }

  if(!localStorage.getItem('token')){
    return{
      name: 'login'
    }
  }
  
 checkTokenAuthenticity()
})

const checkTokenAuthenticity = () => {
  axios.get('http://127.0.0.1:8000/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response) => {})
  .catch((error) => {
    localStorage.removeItem('token')
    router.push({
      name: 'login'
    })
  })
}

export default router
