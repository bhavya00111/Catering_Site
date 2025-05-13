<template>
  <nav class="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md">
    <router-link to="/" class="font-bold text-lg">Gourmet Catering</router-link>
    <!--<div class="text-2xl font-bold mb-4 md:mb-0">
      Gourmet Catering
    </div>-->
    <div class="flex flex-col md:flex-row gap-4">
      <router-link to="/about" class="text-gray-700 hover:text-gray-900">About</router-link>
      <router-link to="/menu" class="text-gray-700 hover:text-gray-900">Menu</router-link>
      <router-link to="/contact" class="text-gray-700 hover:text-gray-900">Contact</router-link>
    </div>
  </nav>
</template>
