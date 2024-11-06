<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/photography">Photography</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
