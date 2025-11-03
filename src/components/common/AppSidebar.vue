<template>
  <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
    <!-- Logo -->
    <div class="p-6 flex items-center space-x-2">
      <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
        C
      </div>
      <span class="text-xl font-bold text-gray-800">CLEARIQ</span>
    </div>

    <!-- Menu -->
    <nav class="flex-1 px-4 py-2 overflow-y-auto">
      <div class="mb-4">
        <p class="text-xs text-gray-400 font-semibold mb-2 px-2">MENU</p>
        <SidebarItem 
          v-for="item in menuItems" 
          :key="item.name"
          :item="item"
        />
      </div>

      <div>
        <p class="text-xs text-gray-400 font-semibold mb-2 px-2">ACCOUNT</p>
        <SidebarItem 
          v-for="item in accountItems" 
          :key="item.name"
          :item="item"
        />
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'

const menuItems = ref([
  { name: 'Dashboard', icon: '📊', route: '/dashboard' },
  { name: 'Employees', icon: '👥', route: '/employees' },
  { name: 'Task board', icon: '✓', route: '/taskboard', active: true },
  { name: 'Events', icon: '📅', route: '/events' },
  { name: 'Project', icon: '📁', route: '/project' },
  { name: 'Leave Management', icon: '🏖️', route: '/leavemanagement' },
  { name: 'Payment', icon: '💳', route: '/payment' },
  { name: 'Performance', icon: '📈', route: '/performance' },
  { name: 'Lead', icon: '🎯', route: '/lead' },
  { name: 'Invoice', icon: '🧾', route: '/invoice' }
])

const accountItems = ref([
  { name: 'Profile', icon: '👤', route: '/profile' },
  { name: 'Chat', icon: '💬', route: '/chat' },
  { name: 'Notification', icon: '🔔', route: '/notification' }
])
</script>