<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribed:', email.value)
    alert('Bültene başarıyla abone oldunuz!')
    email.value = ''
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">SaaS<span>App</span></div>
          <p class="brand-desc">
            Build production-ready SaaS applications with our powerful components, authentication flows, and enterprise features.
          </p>
        </div>
        
        <div class="footer-links-grid">
          <div class="link-column">
            <h3>Resources</h3>
            <a href="#">Help center</a>
            <router-link to="/docs">Docs</router-link>
            <a href="#">Roadmap</a>
            <router-link to="/changelog">Changelog</router-link>
          </div>
          
          <div class="link-column">
            <h3>Features</h3>
            <a href="#">Affiliates</a>
            <a href="#">Portal</a>
            <a href="#">Jobs</a>
            <a href="#">Sponsors</a>
          </div>
          
          <div class="link-column">
            <h3>Company</h3>
            <a href="#">About</a>
            <router-link to="/pricing">Pricing</router-link>
            <a href="#">Careers</a>
            <router-link to="/blog">Blog</router-link>
          </div>

          <div class="link-column newsletter-column">
            <h3>Subscribe to our newsletter</h3>
            <form @submit.prevent="handleSubscribe" class="newsletter-form">
              <input 
                type="email" 
                v-model="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" class="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          Built with Vue 3 • © {{ new Date().getFullYear() }}
        </div>
        
        <div class="social-links">
          <a href="#" aria-label="Discord">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
          </a>
          <a href="#" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 80px 0 40px; border-top: 1px solid var(--border-color); background: var(--nav-bg); }
.footer-top { display: flex; gap: 4rem; justify-content: space-between; margin-bottom: 4rem; flex-wrap: wrap; }
.footer-brand { flex: 1; min-width: 280px; max-width: 320px; }
.logo { font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.logo span { color: var(--primary); }
.brand-desc { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; }
.footer-links-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1.8fr; gap: 2.5rem; flex: 3; }
.link-column h3 { color: var(--text-main); font-weight: 600; font-size: 0.95rem; margin-bottom: 1.25rem; }
.link-column a { display: block; color: var(--text-muted); text-decoration: none; margin-bottom: 0.85rem; font-size: 0.9rem; font-weight: 500; transition: color 0.2s ease; }
.link-column a:hover { color: var(--text-main); }
.newsletter-form { display: flex; background: var(--input-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.35rem; margin-top: 0.5rem; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
.newsletter-form:focus-within { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2); }
.newsletter-form input { flex: 1; background: transparent; border: none; padding: 0.5rem 0.75rem; color: var(--text-main); font-size: 0.9rem; outline: none; min-width: 0; }
.newsletter-form input::placeholder { color: var(--text-muted); }
.btn-subscribe { background: var(--text-main); color: var(--bg-color); border: none; padding: 0.4rem 0.85rem; border-radius: 6px; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: opacity 0.3s; }
.btn-subscribe:hover { opacity: 0.9; }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; border-top: 1px solid var(--border-color); }
.copyright { color: var(--text-muted); font-size: 0.9rem; }
.social-links { display: flex; gap: 1.5rem; align-items: center; }
.social-links a { color: var(--text-muted); transition: color 0.2s ease; display: flex; align-items: center; justify-content: center; }
.social-links a:hover { color: var(--text-main); }
@media (max-width: 1024px) {
  .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .footer { padding: 60px 0 30px; }
  .footer-top { flex-direction: column; gap: 3rem; }
  .footer-brand { max-width: 100%; }
  .footer-links-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-bottom { flex-direction: column; text-align: center; gap: 1.5rem; }
  .social-links { order: -1; }
}
</style>