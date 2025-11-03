<template>
  <div class="flex-shrink-0 w-80">
    <!-- Column Header -->
    <div :class="[column.color, 'text-white rounded-lg p-4 mb-4 flex items-center justify-between']">
      <div class="flex items-center space-x-2">
        <h2 class="font-semibold">{{ column.title }}</h2>
        <span class="bg-white bg-opacity-30 rounded-full w-6 h-6 flex items-center justify-center text-sm">
          {{ column.count }}
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <button class="hover:bg-white hover:bg-opacity-20 rounded p-1">+</button>
        <button class="hover:bg-white hover:bg-opacity-20 rounded p-1">⋮</button>
      </div>
    </div>

    <!-- Task Cards -->
    <div class="space-y-3">
      <TaskCard 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
      />
    </div>
  </div>
</template>

<script setup>
import TaskCard from './TaskCard.vue'

defineProps({
  column: {
    type: Object,
    required: true
  },
  tasks: {
    type: Array,
    default: () => []
  }
})
</script>