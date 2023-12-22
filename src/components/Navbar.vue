<template>
  <nav class="bg-gray-800 p-4 m-0 fixed w-full top-0">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo or Brand -->
      <router-link to="/" class="text-white font-bold">Hatod Taka</router-link>

      <!-- Navigation Links -->
      <div class="space-x-4">
        <!-- Profile Link (conditionally displayed based on the current page) -->
        <router-link v-if="isPassengerPage" to="/passenger-profile" class="text-white hover:text-gray-300">
          Profile
        </router-link>
        <router-link v-else-if="isDriverPage" to="/driver-info" class="text-white hover:text-gray-300">
          Profile
        </router-link>

        <!-- Back to Standby Button (conditionally displayed based on the current page) -->
        <button v-if="showBackButton" @click="backToStandby" class="text-white hover:text-gray-300">
          Back to Standby
        </button>
      </div>

      <!-- Logout Button -->
      <button @click="handleLogout" class="text-white hover:text-gray-300">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const showBackButton = ref(false);
const router = useRouter();

const isPassengerPage = computed(() => router.currentRoute.value.name === 'passenger-page');
const isDriverPage = computed(() => router.currentRoute.value.name === 'driver-page');

const toggleProfileView = () => {
  showBackButton.value = !showBackButton.value;
};

const backToStandby = () => {
  router.push('/standby');
};

const handleLogout = () => {
  router.push('/');
};
</script>
