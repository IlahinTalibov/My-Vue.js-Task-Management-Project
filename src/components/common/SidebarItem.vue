<template>
  <router-link
    :to="item.route"
    class="flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors"
    :class="isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'"
  >
    <span>{{ item.icon }}</span>
    <span class="text-sm font-medium">{{ item.name }}</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.item.route)
</script>