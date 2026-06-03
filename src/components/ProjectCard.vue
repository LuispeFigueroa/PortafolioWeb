<template>
  <div class="project-entry" :class="{ 'full-width': project.full, 'featured': project.featured }">
    <div class="project-visual" :class="project.bgClass">
<img v-if="project.img" :src="project.img" :alt="project.name" class="project-img" />      <div class="project-visual-bg">{{ project.label }}</div>
      <div v-if="project.featured" class="featured-badge">★ Destacado</div>
    </div>
    <div class="project-info">
      <div>
        <div class="project-num">{{ project.num }} / {{ project.type }}</div>
        <h3 class="project-name" :style="{ color: project.accentColor }">{{ project.name }}</h3>
        <p class="project-desc">{{ project.desc }}</p>
        <div class="project-tech">
          <span class="tech-pill" v-for="t in project.tech" :key="t">{{ t }}</span>
        </div>
        <div class="project-highlights" v-if="project.highlights.length">
          <div class="highlight-item" v-for="h in project.highlights" :key="h">
            <div class="highlight-dot" :style="{ background: project.accentColor }"></div>
            {{ h }}
          </div>
        </div>
      </div>
      <div class="project-links">
        <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-primary" :style="{ background: project.accentColor }">Ver demo</a>
        <span v-else class="btn btn-disabled">Deploy pendiente</span>
        <a :href="project.repo" target="_blank" class="btn btn-secondary">GitHub</a>
        <a v-if="project.repoBack" :href="project.repoBack" target="_blank" class="btn btn-secondary">Backend</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.project-entry {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 0.5px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: var(--surface);
  transition: border-color 0.3s;
}
.project-entry:hover { border-color: var(--border-bright); }
.project-entry.full-width { grid-template-columns: 220px 1fr; }
.project-entry.featured {
  grid-template-columns: 1fr;
  grid-template-rows: 420px auto;
  border-color: rgba(255,179,71,0.25);
}
.project-entry.featured:hover { border-color: rgba(255,179,71,0.5); }

.project-visual {
  position: relative;
  min-height: 320px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-entry.full-width .project-visual { min-height: 200px; }
.project-entry.featured .project-visual { min-height: 420px; }

.project-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: blur(1px) brightness(0.6);
  transition: filter 0.4s;
}
.project-entry:hover .project-img {
  filter: blur(1px) brightness(0.5);
}

.project-visual-bg {
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 4rem;
  letter-spacing: -0.04em;
  opacity: 0.6;
  color: var(--text);
  user-select: none;
}
.project-entry.featured .project-visual-bg {
  font-size: 8rem;
  opacity: 0.04;
}

.featured-badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: #ffb347;
  background: rgba(255,179,71,0.1);
  border: 0.5px solid rgba(255,179,71,0.35);
  border-radius: 20px;
  padding: 5px 14px;
}

.vis-tienda { background: linear-gradient(135deg, #1a0a00 0%, #0d0500 100%); }
.vis-lineup { background: linear-gradient(135deg, #1a0a1a 0%, #0d050d 100%); }
.vis-onta   { background: linear-gradient(135deg, #0a001a 0%, #05000d 100%); }
.vis-calc   { background: linear-gradient(135deg, #1a1000 0%, #0d0800 100%); }
.vis-snake  { background: linear-gradient(135deg, #001a0a 0%, #000d05 100%); }

.project-info {
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 0.5px solid var(--border);
}
.project-entry.featured .project-info {
  border-left: none;
  border-top: 0.5px solid var(--border);
  padding: 2rem 2.5rem;
}
.project-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}
.project-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  line-height: 1.1;
}
.project-entry.featured .project-name { font-size: 2.5rem; }
.project-desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}
.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.67rem;
  padding: 3px 9px;
  border-radius: 3px;
  background: rgba(255,255,255,0.04);
  border: 0.5px solid var(--border-bright);
  color: var(--muted);
}
.project-highlights { margin-bottom: 1.5rem; }
.highlight-item {
  font-size: 0.8rem;
  color: var(--muted);
  padding: 0.3rem 0;
  border-bottom: 0.5px solid var(--border);
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
}
.highlight-item:last-child { border-bottom: none; }
.highlight-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}
.project-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  padding: 8px 18px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
  border: none;
  display: inline-block;
  cursor: pointer;
}
.btn-primary { color: #0d0d0d; font-weight: 500; }
.btn-primary:hover { filter: brightness(1.1); }
.btn-secondary {
  background: transparent;
  border: 0.5px solid var(--border-bright);
  color: var(--muted);
}
.btn-secondary:hover { color: var(--text); border-color: rgba(255,255,255,0.3); }
.btn-disabled {
  background: transparent;
  border: 0.5px solid var(--border);
  color: var(--muted);
  opacity: 0.45;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .project-entry,
  .project-entry.full-width,
  .project-entry.featured { grid-template-columns: 1fr; grid-template-rows: auto; }
  .project-visual { min-height: 200px; }
  .project-entry.featured .project-visual { min-height: 240px; }
  .project-info { border-left: none; border-top: 0.5px solid var(--border); }
}
</style>