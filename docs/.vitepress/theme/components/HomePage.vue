<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <h1>
        {{ siteInfo.titleBefore }} <span class="gradient-text">{{ siteInfo.titleGradient }}</span>
      </h1>
      <p class="hero-subtitle">{{ siteInfo.subtitle }}</p>
      <div class="hero-actions">
        <a href="/projects" class="hero-btn-primary">
          {{ siteInfo.primaryButton }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a :href="siteInfo.githubUrl" target="_blank" class="hero-btn-secondary">
          <svg class="gh-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          {{ siteInfo.secondaryButton }}
        </a>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section" id="projects">
      <div class="section-header">
        <h2>{{ siteInfo.sectionTitle }}</h2>
      </div>
      <a :href="siteInfo.githubUrl" target="_blank" class="more-btn">
        {{ siteInfo.moreProjects }}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>

      <div class="cards">
        <a v-for="p in projects" :key="p.id" :href="'https://github.com/' + p.repo" target="_blank" class="card">
          <div class="card-icon" :style="{ background: p.iconColor }">
            <img :src="'/icons/' + p.icon + '.svg'" :alt="p.title" />
          </div>
          <div class="card-body">
            <h3>{{ p.title }}</h3>
            <p class="desc">{{ p.description }}</p>
          </div>
        </a>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner">
        <h2>{{ siteInfo.ctaTitle }}</h2>
        <p>{{ siteInfo.ctaDesc }}</p>
        <div class="cta-btns">
          <a :href="siteInfo.githubUrl" target="_blank" class="cta-primary">
            {{ siteInfo.ctaPrimary }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="https://github.com/ap01082/tunnel-manager/issues/new" target="_blank" class="cta-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            {{ siteInfo.ctaSecondary }}
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <div class="footer-left">
        <p>{{ siteInfo.footerText }}</p>
        <a v-if="siteInfo.icpRecord" :href="siteInfo.icpUrl || '#'" target="_blank" class="icp-link" rel="noopener">{{ siteInfo.icpRecord }}</a>
      </div>
      <div class="social-links">
        <a :href="siteInfo.githubUrl" target="_blank" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
      </div>
    </footer>

    <!-- Bottom-right floating icon -->
    <a v-if="siteInfo.showBottomIcon" :href="siteInfo.bottomIconUrl || siteInfo.githubUrl" target="_blank" class="bottom-float" :title="siteInfo.bottomIconTitle || 'GitHub'" rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    </a>
  </div>
</template>

<script setup>
const projects = __PROJECTS__
const siteInfo = __SITE_INFO__
</script>
