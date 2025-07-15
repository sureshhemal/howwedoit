<template>
  <div class="max-w-4xl mx-auto py-16">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-6 text-primary-600">Howwedoit</h1>
      <p class="text-xl text-primary-500 italic">Mastering the craft of modern web application development</p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex-1">
          <h2 class="text-3xl font-semibold mb-4 text-primary-500">Discover the Art of <span class="text-accent-500">Laravel & Vue.js</span></h2>
          <p class="text-lg text-gray-700 mb-6">Welcome to our curated collection of advanced techniques, practical insights, and elegant solutions for Laravel and Vue.js developers.</p>
          <p class="text-gray-600 mb-8">Whether you're building complex applications or optimizing your workflow, our expert guides will help you write cleaner, more efficient code.</p>
        </div>
        <div class="flex-1 flex justify-center">
          <div class="relative">
            <div class="absolute -left-6 -top-6 w-20 h-20 bg-primary-100 rounded-lg opacity-50"/>
            <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-accent-100 rounded-lg opacity-50"/>
            <div class="relative z-10 px-6 py-8 bg-gradient-to-br from-primary-100 to-accent-50 rounded-lg shadow-md">
              <div class="flex gap-5 mb-4">
                <div class="w-3 h-3 rounded-full bg-accent-500"/>
                <div class="w-3 h-3 rounded-full bg-primary-500"/>
                <div class="w-3 h-3 rounded-full bg-gray-300"/>
              </div>
              <div class="font-mono text-sm text-gray-800">
                <div class="text-primary-600">// Laravel & Vue.js integration</div>
                <div class="ml-4 text-gray-700">function <span class="text-accent-600">howWeDoit</span>() {</div>
                <div class="ml-8 text-gray-700">return <span class="text-accent-500">'elegant solutions'</span>;</div>
                <div class="ml-4 text-gray-700">}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <span class="text-primary-600 text-xl font-bold">#1</span>
        </div>
        <h3 class="text-xl font-bold text-primary-600 mb-2">Laravel Techniques</h3>
        <p class="text-gray-600">Dive into advanced Laravel patterns, elegant solutions, and performance optimization.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
          <span class="text-accent-500 text-xl font-bold">#2</span>
        </div>
        <h3 class="text-xl font-bold text-accent-500 mb-2">Vue.js Mastery</h3>
        <p class="text-gray-600">Explore reactive components, state management, and creating smooth user interfaces.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 flex items-center justify-center mb-4">
          <span class="text-primary-500 text-xl font-bold">#3</span>
        </div>
        <h3 class="text-xl font-bold text-primary-500 mb-2">Full-Stack Integration</h3>
        <p class="text-gray-600">Learn how to seamlessly connect Laravel backends with Vue.js frontends for modern apps.</p>
      </div>
    </div>

    <div class="text-center text-gray-500">
      <p>Sharing our expertise since 2025</p>
    </div>
  </div>
</template>
