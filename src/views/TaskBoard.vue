<template>
  <div>
    <!-- Page Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-bold text-gray-800">Task Board</h1>
        <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2">
          <span>+</span>
          <span>Create List</span>
        </button>
      </div>

      <TaskFilters />
    </div>

    <!-- Progress Bar -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-gray-600">Overall Progress</span>
        <span class="text-sm font-semibold text-gray-800">40%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style="width: 40%"></div>
      </div>
    </div>

    <!-- Task Columns -->
    <div class="flex space-x-6 overflow-x-auto pb-4">
      <TaskColumn
        v-for="column in columns"
        :key="column.id"
        :column="column"
        :tasks="getTasksByStatus(column.status)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskColumn from '@/components/task/TaskColumn.vue'
import TaskFilters from '@/components/task/TaskFilters.vue'
import { useTasks } from '@/composables/useTasks'

const { tasks } = useTasks()

const columns = ref([
  { id: 1, title: 'Pending', status: 'pending', color: 'bg-blue-500', count: 3 },
  { id: 2, title: 'Inprogress', status: 'inprogress', color: 'bg-orange-500', count: 3 },
  { id: 3, title: 'One Hold', status: 'onhold', color: 'bg-cyan-500', count: 3 }
])

const getTasksByStatus = (status) => {
  return tasks.value.filter(task => task.status === status)
}
</script>