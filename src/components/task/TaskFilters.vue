<template>
  <div class="flex items-center space-x-4">
    <div class="flex items-center space-x-2">
      <span class="text-sm text-gray-600">Lead</span>
      <div class="flex -space-x-2">
        <img 
          v-for="i in 2" 
          :key="i"
          src="https://ui-avatars.com/api/?name=User&background=random"
          class="w-8 h-8 rounded-full border-2 border-white"
          alt="Team member"
        />
        <span class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
          +8
        </span>
      </div>
    </div>

    <div class="h-6 w-px bg-gray-300"></div>

    <div class="flex items-center space-x-2">
      <span class="text-sm text-gray-600">Team</span>
      <div class="flex -space-x-2">
        <img 
          v-for="i in 2" 
          :key="i"
          src="https://ui-avatars.com/api/?name=Team&background=random"
          class="w-8 h-8 rounded-full border-2 border-white"
          alt="Team member"
        />
        <span class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
          +18
        </span>
      </div>
    </div>
  </div>
</template>