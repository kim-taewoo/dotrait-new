import Vue from 'vue'
import Router from 'vue-router'
import MyCalendar from '@/components/MyCalendar'
import NewEvent from '@/components/NewEvent'
import EventAll from '@/components/EventAll'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/my-calendar',
      name: 'MyCalendar',
      component: MyCalendar
    },
    {
      path: '/new-event',
      name: 'NewEvent',
      component: NewEvent
    },
    {
      path: '/event-all',
      name: 'EventAll',
      component: EventAll
    },
  ]
})
