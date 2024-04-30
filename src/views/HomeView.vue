<script setup lang="ts">
import {defineComponent} from 'vue';

defineComponent({
  name: 'HomeView',
});
</script>
<template>
  <main>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <!--        <div class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"><a
                    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                    href="/components"><span>Browse components <span aria-hidden="true" class="hidden text-slate-400 sm:inline">→</span></span></a><a
                    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                    href="/templates"><span>Explore templates <span aria-hidden="true"
                                                                    class="hidden text-black/25 sm:inline">→</span></span></a>
                </div>-->
        <div
            class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg viewBox="0 0 1024 1024"
               class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
               aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"/>
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6"/>
                <stop offset="1" stop-color="#E935C1"/>
              </radialGradient>
            </defs>
          </svg>
          <div class="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bring all your favorite paper based recipes to one place and use AI to plan your meals.
              </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Dont know what to have tonight? Send a text message with what you feel like and get inspired with some dinner ideas</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="/auth/signin"
                 class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                started with Google</a>

            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
