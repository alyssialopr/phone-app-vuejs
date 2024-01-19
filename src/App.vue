<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav>
        <RouterLink to="/journal">Journal</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
      </nav>
<RouterView />
</template>


<style scoped>

nav {
  position: absolute;
  top:0;
  left:0;
  margin-top: 10px;
  font-size: 12px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
