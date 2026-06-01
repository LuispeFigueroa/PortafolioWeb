<template>
  <nav>
    <a href="#hero" class="nav-logo">LP<span>.</span></a>
    <ul class="nav-links">
      <li><a href="#about">sobre mí</a></li>
      <li><a href="#stack">stack</a></li>
      <li><a href="#projects">proyectos</a></li>
      <li><a href="#contact">contacto</a></li>
    </ul>
  </nav>
</template>

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
}
.nav-logo span { color: var(--accent); }
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>