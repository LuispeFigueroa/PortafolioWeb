<template>
  <div>
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-glow"></div>
      <p class="hero-tag">// Estudiante UVG · CS · 5to semestre</p>
      <h1 class="hero-name">
        LUIS<br>
        PEDRO<br>
        <span class="line2">FIGUE<span class="accent">ROA</span></span>
      </h1>
      <div class="hero-bottom">
        <p class="hero-bio">
          <strong>Desarrollador full stack.</strong> Construyo desde la interfaz hasta la base de datos — con criterio sobre qué tecnología elegir y por qué. Prefiero entender las bases antes de usar atajos.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">PROYECTOS</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3</div>
            <div class="stat-label">DEPLOYS LIVE</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">C2</div>
            <div class="stat-label">INGLÉS</div>
          </div>
        </div>
      </div>
    </section>
    <!-- ABOUT -->
<section id="about">
  <div class="section-header reveal">
    <span class="section-num">01 //</span>
    <h2 class="section-title">Sobre mí</h2>
  </div>
  <div class="about-grid">
    <div class="about-text reveal">
      <p>Estudiante de <strong>Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala</strong>, 5to semestre. Colegio Internacional Montessori, bachillerato en Ciencias y Letras.</p>
      <p>Me interesa construir productos que resuelvan problemas reales, desde 0 — ya sea una idea propia o la de otra persona. Lo que me motiva no es terminar la tarea, sino entender qué estoy construyendo y poder defenderlo.</p>
      <p>Fuera del código: toco batería, bajo y guitarra. Hago jiu jitsu y MMA. Disciplinas distintas, misma lógica: la consistencia y la técnica siempre ganan al talento sin fundamento.</p>
      <div class="philosophy-block">
        <p>Estamos en un punto de inflexión en el desarrollo de software. Tomar el camino fácil con IA para todo el código es una trampa. Prefiero aprender las bases aunque sean tediosas — para poder trabajar junto a seniors que realmente saben.</p>
      </div>
    </div>
    <div class="about-aside reveal">
      <div class="aside-card">
        <div class="aside-card-title">EDUCACIÓN</div>
        <div class="edu-item">
          <div>
            <div class="edu-name">Universidad del Valle de Guatemala</div>
            <div class="edu-sub">Lic. Ingeniería en Ciencias de la Computación</div>
          </div>
          <div class="edu-year">2024–</div>
        </div>
        <div class="edu-item">
          <div>
            <div class="edu-name">Colegio Internacional Montessori</div>
            <div class="edu-sub">Bachillerato en Ciencias y Letras</div>
          </div>
          <div class="edu-year">2022–23</div>
        </div>
        <div class="distinction-badge">★ Estudiante distinguido UVG 2025</div>
      </div>
      <div class="aside-card">
        <div class="aside-card-title">CURSOS RELEVANTES</div>
        <div class="tag-list">
          <span class="tag" v-for="c in courses" :key="c">{{ c }}</span>
        </div>
      </div>
      <div class="aside-card">
        <div class="aside-card-title">IDIOMAS</div>
        <div class="tag-list">
          <span class="tag accent">Español — Nativo</span>
          <span class="tag purple">Inglés — C2</span>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const courses = [
  'Algoritmos y Estructura de Datos',
  'Bases de Datos',
  'Servidores y Sistemas Web',
  'Programación Plataformas Móviles',
  'Programación de Microprocesadores',
]

let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
onUnmounted(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3rem 5rem;
  position: relative;
  overflow: hidden;
}
.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,107,43,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,107,43,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, transparent 100%);
}
.hero-glow {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,107,43,0.07) 0%, transparent 70%);
  top: -100px; right: -100px;
  pointer-events: none;
}
.hero-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.2s forwards;
}
.hero-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.5rem, 9vw, 8rem);
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.4s forwards;
}
.hero-name .line2 {
  color: transparent;
  -webkit-text-stroke: 1px rgba(240,237,232,0.2);
}
.hero-name .accent { color: var(--accent); }
.hero-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.6s forwards;
}
.hero-bio {
  max-width: 480px;
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.75;
}
.hero-bio strong { color: var(--text); font-weight: 500; }
.hero-stats { display: flex; gap: 2.5rem; flex-shrink: 0; }
.stat-item { text-align: right; }
.stat-number {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2rem;
  color: var(--accent);
  line-height: 1;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  margin-top: 4px;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero { padding: 0 1.5rem 4rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; }
  .hero-stats { flex-direction: row; gap: 1.5rem; }
}
/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── SECTIONS ── */
section {
  padding: 6rem 3rem;
  position: relative;
  z-index: 1;
}
.section-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3.5rem;
}
.section-num {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.1em;
}
.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -0.02em;
}

/* ── ABOUT ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-text p {
  color: var(--muted);
  margin-bottom: 1.25rem;
  line-height: 1.8;
}
.about-text p strong { color: var(--text); font-weight: 500; }
.philosophy-block {
  border-left: 2px solid var(--accent);
  padding-left: 1.25rem;
  margin-top: 2rem;
}
.philosophy-block p { font-size: 0.95rem; font-style: italic; color: var(--muted); }
.about-aside { display: flex; flex-direction: column; gap: 1.5rem; }
.aside-card {
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}
.aside-card-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}
.tag-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 4px;
  border: 0.5px solid var(--border-bright);
  color: var(--muted);
}
.tag.accent { border-color: rgba(255,107,43,0.35); color: var(--accent); }
.tag.purple { border-color: rgba(192,132,252,0.35); color: var(--accent2); }
.edu-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 0;
  border-bottom: 0.5px solid var(--border);
}
.edu-item:last-of-type { border-bottom: none; }
.edu-name { font-size: 0.9rem; color: var(--text); }
.edu-sub { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }
.edu-year { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); white-space: nowrap; margin-left: 1rem; }
.distinction-badge {
  display: inline-block;
  background: rgba(255,107,43,0.08);
  border: 0.5px solid rgba(255,107,43,0.25);
  border-radius: 20px;
  padding: 6px 14px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.04em;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  section { padding: 4rem 1.5rem; }
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>