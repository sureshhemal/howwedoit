<template>
    <Analytics />
    <SpeedInsights />
    <AppLayout>
      <NuxtPage />
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from '~/layouts/AppLayout.vue'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>