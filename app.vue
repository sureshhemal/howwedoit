<template>
    <Analytics />
    <AppLayout>
      <NuxtPage />
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from '~/layouts/AppLayout.vue'
import { Analytics } from '@vercel/analytics/nuxt'
</script>