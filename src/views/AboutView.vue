<template>
  <div>
    <main>
      <div class="container max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-8 mx-auto">
        <div class="flex">
          <div class="w-2/3 p-4">
            <div class="mx-auto max-w-xl col-md-10 text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                Its really easy to to get started..
                <br> <br>
              </h2>
              <h2 class="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
                Upload a photo and we will do the rest
              </h2>
            </div>
          </div>
          <div class="w-1/2 p-4 mx-1">
            <div class="mx-auto max-w-xl col-md-10 text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <div class="mx-auto max-w-xxl text-center lg:mx-0 lg:flex-auto lg:text-right">
                <input type="file" id="fileInput" class="rounded-md bg-gray-800  max-w-xxl px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700" @change="handleFileUpload" accept="image/*" capture="environment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const handleFileUpload = (event: any) => {
      const file = event.target.files[0];
      console.log(file);

      const formData = new FormData();

      formData.append('file', file);

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    };

    return {
      handleFileUpload,
    };
  }
});
</script>
