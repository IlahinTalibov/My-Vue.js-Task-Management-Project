import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/layout/MainLayout.vue'
import TaskBoard from '@/views/TaskBoard.vue'
import Dashboard from '@/views/Dashboard.vue'
import Employees from '@/views/Employees.vue'
import Performance from '@/views/Performance.vue'
import Profile from '@/views/Profile.vue'
import Notification from '@/views/Notification.vue'
import Chat from '@/views/Chat.vue'
import Invoice from '@/views/Invoice.vue'
import Events from '@/views/Events.vue'
import Project from '@/views/Project.vue'
import LeaveManagement from '@/views/LeaveManagement.vue'
import Payment from '@/views/Payment.vue'
import Lead from '@/views/Lead.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/Dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'taskboard',
        name: 'TaskBoard',
        component: TaskBoard
      },
      {
        path: 'employees',
        name: 'Employees',
        component: Employees
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'performance',
        name: 'Performance',
        component: Performance
      },
       {
        path: 'notification',
        name: 'Notification',
        component: Notification
      },
       {
        path: 'chat',
        name: 'Chat',
        component: Chat
      },
        {
        path: 'invoice',
        name: 'Invoice',
        component: Invoice
      },
          {
        path: 'events',
        name: 'Events',
        component: Events
      },
          {
        path: 'project',
        name: 'Project',
        component: Project
      },
        {
        path: 'leavemanagement',
        name: ' LeaveManagement',
        component: LeaveManagement
      },
        {
        path: 'payment',
        name: 'Payment',
        component: Payment
      },
      {
        path: 'lead',
        name: 'Lead',
        component: Lead
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router