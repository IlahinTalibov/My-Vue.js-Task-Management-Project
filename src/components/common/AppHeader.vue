<template>
  <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
    <!-- Search -->
    <div class="flex items-center space-x-4 flex-1 max-w-md">
      <div class="relative flex-1">
        <input 
          type="text" 
          placeholder="Search"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>
    </div>

    <!-- User Info -->
    <div class="flex items-center space-x-6">
      <button class="relative text-gray-600 hover:text-gray-800">
        <span class="text-xl">🔔</span>
        <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      
      <button class="relative text-gray-600 hover:text-gray-800">
        <span class="text-xl">💬</span>
        <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="flex items-center space-x-3 cursor-pointer">
        <img 
          src="https://ui-avatars.com/api/?name=Jhon+Lever&background=3b82f6&color=fff" 
          class="w-10 h-10 rounded-full"
          alt="User"
        />
        <div>
          <p class="text-sm font-semibold text-gray-800">Jhon Lever</p>
          <p class="text-xs text-gray-500">UI Designer</p>
        </div>
        <span class="text-gray-400">▼</span>
      </div>
    </div>
  </header>
</template>