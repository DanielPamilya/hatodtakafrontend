<template>
    <div class="pt-16">
        <h1 class="text-3xl font-bold mb-4">HATODTAKA</h1>
        <div class="flex overflow-hidden max-w-screen-md mx-auto">
            <!-- First Card -->
            <div class="w-1/2">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <img src="../assets/driver.jpg" alt="Photo 1" class="w-full h-50 object-cover mb-4 rounded-md">
                    <button
                        @click="handleStartDriving"
                        class="w-full rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Start Driving
                    </button>
                </div>
            </div>

            <!-- Second Card -->
            <div class="w-1/2">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <img src="../assets/passenger.jpg" alt="Photo 2" class="w-full h-50 object-cover mb-4 rounded-md">
                    <button
                        @click="handleFindARide"
                        class="w-full rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Find A Ride
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import http from '@/helpers/http'
import axios from 'axios';

const router = useRouter()
const handleStartDriving = () => {
    http().get('/api/driver')
        .then((response) => {
            if(response.data.driver){
                router.push({
                    name: 'standby'
                })
            }else{
                router.push({
                    name: 'driver'
                })
            }
        })
        .catch((error) => {
            console.error(error)
        })
}

const handleFindARide = () =>{
    router.push({
        name: 'location'
    })
}

</script>