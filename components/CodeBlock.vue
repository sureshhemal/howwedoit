<template>
  <div
      class="my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10"
  >
    <div class="not-prose">
      <div
          class="flex min-h-[3rem] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent"
      >
        <div
            class="-mb-px flex gap-4 text-xs font-medium"
            role="tablist"
            aria-orientation="horizontal"
        >
          <button
              v-for="(tab, index) in tabs"
              :key="tab.label"
              :class="[
              'border-b py-3 transition',
              selected === index
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-300',
            ]"
              role="tab"
              type="button"
              :aria-selected="selected === index"
              @click="selected = index"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="ml-auto flex items-center gap-2">
          <button
            class="rounded px-2 py-1 text-xs font-medium text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
            @click="copyCode"
          >
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
      </div>

      <div class="group">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.label"
          :class="['p-4', selected !== index && 'hidden']"
        >
          <pre class="text-sm text-zinc-100 overflow-x-auto"><code>{{ tab.code }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [
      {
        label: 'Example',
        code: '// No code provided'
      }
    ],
    validator: (value) => {
      return value.every(tab => typeof tab.label === 'string' && typeof tab.code === 'string')
    }
  }
})

// Track the selected tab index
const selected = ref(0)

// Handle copy functionality
const copied = ref(false)

function copyCode() {
  // Get the code from the current selected tab
  const codeToCopy = props.tabs[selected.value].code

  // Use the clipboard API to copy the text
  navigator.clipboard.writeText(codeToCopy)
    .then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000) // Reset after 2 seconds
    })
    .catch(err => {
      console.error('Could not copy code: ', err)
    })
}
</script>
