<!-- components/DriverProfile.vue -->
<template>
  <div class="pt-16 mt-5">
    <Navbar />
    <h1 class="text-3xl font-semibold mb-4">Driver Profile</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <p>Name: {{ driver.name }}</p>
      <p>Year: {{ driver.year }}</p>
      <p>Make: {{ driver.make }}</p>
      <p>Model: {{ driver.model }}</p>
      <p>Color: {{ driver.color }}</p>
      <p>License Plate: {{ driver.license_plate }}</p>
    </div>
  </div>
</template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  import { ref, onMounted } from 'vue';
  import http from '@/helpers/http';
  import axios from 'axios';
  
  const driver = ref({});
  const loading = ref(true);
  const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/driver', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    console.log('Driver Info Response:', response);
    driver.value = response.data;
    
  } catch (error) {
    console.error('Driver Info Error:', error);
    error.value = 'Failed to fetch driver information';
  } finally {
    loading.value = false;
  }
});

  </script>
  