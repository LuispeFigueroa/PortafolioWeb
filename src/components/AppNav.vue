<template>
  <nav>
    <button class="nav-logo" @click="scrollTo('hero')">LP<span>.</span></button>
    <ul class="nav-links">
      <li><button @click="scrollTo('about')">sobre mí</button></li>
      <li><button @click="scrollTo('stack')">stack</button></li>
      <li><button @click="scrollTo('projects')">proyectos</button></li>
      <li><button @click="scrollTo('contact')">contacto</button></li>
    </ul>
  </nav>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem;
  border-bottom: 0.5px solid var(--border);
  backdrop-filter: blur(12px);
  background: rgba(13,13,13,0.85);
}
.nav-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: var(--text);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-logo span { color: var(--accent); }
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.nav-links button {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.nav-links button:hover { color: var(--text); }
@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>