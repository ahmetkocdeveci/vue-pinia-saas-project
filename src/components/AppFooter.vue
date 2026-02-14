<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-info">
        <div class="logo">SaaS<span>App</span></div>
        <p>We build the technologies of the future with Vue 3 and modern architecture.</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h4>Product</h4>
          <router-link to="/">Features</router-link>
          <router-link to="/pricing">Pricing</router-link>
        </div>
        <div class="link-group">
          <h4>Support</h4>
          <router-link to="/blog">Blog</router-link>
          <a href="#">Documentation</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 SaaS App. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 80px 0 40px; border-top: 1px solid var(--border-color); background: var(--nav-bg); }
.footer-content { display: flex; justify-content: space-between; margin-bottom: 40px; }
.footer-info p { color: var(--text-muted); max-width: 250px; margin-top: 1rem; }
.footer-links { display: flex; gap: 4rem; }
.link-group h4 { margin-bottom: 1.5rem; color: var(--text-main); }
.link-group a { display: block; color: var(--text-muted); text-decoration: none; margin-bottom: 0.75rem; transition: 0.3s; }
.link-group a:hover { color: var(--primary); }
.footer-bottom { text-align: center; color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 40px; }
</style>