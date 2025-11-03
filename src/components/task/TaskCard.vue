<template>
  <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    <!-- Title -->
    <div class="flex justify-between items-start mb-3">
      <h3 class="font-semibold text-gray-800">{{ task.title }}</h3>
      <button class="text-gray-400 hover:text-gray-600">⋮</button>
    </div>

    <!-- Priority Badge -->
    <span :class="['inline-block px-2 py-1 rounded text-xs font-medium mb-3', getPriorityClass(task.priority)]">
      {{ task.priority }}
    </span>

    <!-- Progress Bar -->
    <div class="mb-3">
      <div class="flex justify-between text-xs text-gray-500 mb-1">
        <span>{{ task.progress }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-1.5">
        <div 
          :class="['h-1.5 rounded-full', getProgressColor(task.priority)]" 
          :style="{ width: task.progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between">
      <!-- Team Avatars -->
      <div class="flex items-center space-x-1">
        <div class="flex -space-x-2">
          <div 
            v-for="i in 2" 
            :key="i"
            class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"
          ></div>
        </div>
        <span class="text-xs text-gray-500 ml-1">+{{ task.team }}</span>
      </div>

      <!-- Stats -->
      <div class="flex items-center space-x-3 text-gray-400 text-xs">
        <div class="flex items-center space-x-1">
          <span>🔗</span>
          <span>{{ task.attachments }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span>💬</span>
          <span>{{ task.comments }}</span>
        </div>
      </div>
    </div>

    <!-- Date -->
    <div class="flex items-center justify-end mt-2 text-xs text-gray-400">
      <span>🕐 {{ task.date }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

const getPriorityClass = (priority) => {
  const classes = {
    'High': 'bg-blue-100 text-blue-600',
    'Low': 'bg-orange-100 text-orange-600',
    'Normal': 'bg-cyan-100 text-cyan-600'
  }
  return classes[priority] || 'bg-gray-100 text-gray-600'
}

const getProgressColor = (priority) => {
  const colors = {
    'High': 'bg-blue-500',
    'Low': 'bg-orange-500',
    'Normal': 'bg-cyan-500'
  }
  return colors[priority] || 'bg-gray-500'
}
</script>