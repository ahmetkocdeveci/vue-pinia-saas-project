<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const itemRefs = ref([])

const setItemRef = (el, index) => {
  if (el) {
    itemRefs.value[index] = el
  }
}

const releases = ref([
  {
    date: 'Apr 1, 2025',
    title: 'Clippy Integration (Beta) 🐤',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop',
    description: "🎉 Meet your new productivity assistant! For April Fools' Day, we're introducing Clippy, your friendly (and slightly mischievous) helper. He's here to make your day a little brighter—and maybe a little more chaotic. 😜\n\nClippy pops up with tips, jokes, and the occasional dance across your dashboard. Don't worry, you can always dismiss him with a click (or just enjoy the nostalgia). 🐤",
    featuresTitle: 'Features:',
    features: ['💡 Pops up with helpful (and sometimes unhelpful) tips', '🕺 Animates across your dashboard with classic Clippy moves', '😂 Tells a random joke on demand', '❌ Can be dismissed with a single click', '🥚 Easter eggs for the curious'],
    behindTheScenes: "🎬 Our team had a blast bringing Clippy to life for a day. No productivity assistants were harmed in the making of this feature.\n\nDon't worry, Clippy will only stick around for a day. Or will he? 😉"
  },
  {
    date: 'Nov 12, 2024',
    title: 'Security Enhancements 🔒',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
    description: "🔒 Your data is safer than ever. This update brings a suite of new security features and compliance improvements, reflecting our ongoing commitment to protecting your business.\n\nWe've worked with security experts and listened to customer feedback to deliver the most requested enhancements. Security is never done, but this release is a big leap forward. 🛡️",
    featuresTitle: 'Enhancements:',
    features: ['🔑 Two-factor authentication (2FA) for all accounts', '🏢 SSO support for enterprise customers', '📜 GDPR and SOC 2 compliance updates', '📝 Improved audit logs and access controls', '⏳ Session timeout and device management', '🔐 Encrypted data at rest and in transit'],
    behindTheScenes: "🕵️‍♂️ We conducted a full security audit and implemented automated vulnerability scanning. Our team is now preparing for additional certifications and regular penetration testing.\n\nThank you for trusting us with your business—security will always be our top priority! 🙏"
  },
  {
    date: 'Oct 25, 2024',
    title: 'Public API Now Available 🛠️',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    description: "🛠️ Build your own integrations and automate workflows with our brand new public API! This is a huge step for our developer community, and we can't wait to see what you create.\n\nThe API gives you secure, programmatic access to all major resources in your workspace. From automating routine tasks to building custom dashboards, the possibilities are endless. 🤖",
    featuresTitle: 'Highlights:',
    features: ['🌐 RESTful endpoints for all major resources', '🔑 Secure API key authentication', '📚 Comprehensive documentation and code samples', '📡 Webhook support for real-time updates', '🚦 Rate limiting and monitoring for stability', '🗣️ Community forum for sharing projects and getting help'],
    behindTheScenes: "👨‍💻 We worked closely with early adopters to ensure the API is robust and easy to use. Our docs are open source—contributions and feedback are welcome!\n\nWe can't wait to see what you build—share your projects with us and help shape the next version of our API! 🚀"
  },
  {
    date: 'Oct 5, 2024',
    title: 'Advanced Analytics 📊',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    description: "📊 Gain deeper insights into your business with our new analytics dashboard! This release brings powerful tools to help you track, measure, and grow—all in one place.\n\nWe've reimagined analytics from the ground up, making it easier to visualize trends, monitor KPIs, and share reports with your team. Whether you're a data pro or just getting started, you'll find everything you need to make smarter decisions. 🧠",
    featuresTitle: 'New features:',
    features: ['📈 Customizable dashboards and reports', '⏱️ Real-time user and revenue tracking', '📤 Export data to CSV or Google Sheets', '📊 Visualize trends with interactive charts and graphs', '📧 Scheduled email reports for key metrics', '🔍 Drill-down filters for granular analysis'],
    behindTheScenes: "🛠️ We built a new analytics engine using scalable cloud infrastructure, ensuring fast queries and reliable data. Expect more integrations and advanced visualizations soon!\n\nWe're excited to see what insights you discover—let us know what you build with it! 🚀"
  },
  {
    date: 'Sep 15, 2024',
    title: 'Performance Boost ⚡️',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    description: "⚡ Our SaaS just got a whole lot faster! This update is all about speed, responsiveness, and a smoother experience for everyone. We know how important performance is, so we've made it a top priority for this release.\n\nFrom optimizing our backend infrastructure to fine-tuning the frontend, every part of the app has been reviewed and improved. You'll notice snappier load times, quicker navigation, and a more fluid feel throughout the platform. 🚀",
    featuresTitle: 'Improvements:',
    features: ['🚄 2x faster dashboard load times', '⏱️ Reduced API response latency by 40%', '🖼️ Optimized image delivery and caching for all devices', '🌀 Smoother transitions and navigation between pages', '🧠 Lower memory usage on mobile and desktop'],
    behindTheScenes: "🛠️ We introduced smarter caching, lazy loading, and database indexing. Our team also set up new monitoring tools to catch slowdowns before you do.\n\nLet us know if you notice the difference—and if there's anywhere else you'd like to see us speed things up! 💬"
  },
  {
    date: 'Aug 30, 2024',
    title: 'Mobile App Beta 📱',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    description: "📱 Take your SaaS dashboard anywhere! Our mobile app beta is now available for iOS and Android, bringing your workspace to your pocket. Stay productive and connected, wherever you are.\n\nWe designed the app from the ground up for speed and usability on small screens. Whether you're checking reports on the train or getting notifications on the go, the mobile app keeps you in the loop. 🚆",
    featuresTitle: 'Features:',
    features: ['📊 Access dashboards and reports on the go', '🔔 Push notifications for important updates', '📴 Offline support for uninterrupted productivity', '🤏 Optimized for touch and small screens', '🛡️ Secure biometric login (Face ID & Touch ID)', '⚡ Quick actions for common tasks'],
    behindTheScenes: "🧑‍💻 We built the app using the latest cross-platform tech, ensuring a native feel on both iOS and Android. Your feedback during beta will help us polish and prioritize new features.\n\nWe'd love your feedback as we prepare for the full launch! 🚀"
  },
  {
    date: 'Jul 20, 2024',
    title: 'Integrations Galore',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    description: "🔌 Connect your SaaS workspace to the tools you love! Our new integrations make it easy to automate and extend your workflow, saving you time and reducing manual work.\n\nThis release is just the beginning—integrations are now a first-class part of our platform. We've started with the most requested tools and will be adding more based on your feedback. 🗂️",
    featuresTitle: 'New integrations:',
    features: ['💬 Slack: Get real-time notifications and updates in your channels', '🐙 GitHub: Link commits and pull requests to your projects for better traceability', '🤖 Zapier: Automate repetitive tasks with 5,000+ apps', '📅 Google Calendar: Sync important dates and deadlines'],
    behindTheScenes: "🔧 We built a new integrations framework to make adding and managing connections seamless. Our API is now more robust, and we're working on an integrations marketplace for even more options.\n\nMore integrations are on the way—tell us which ones you want next! 📨"
  },
  {
    date: 'Jun 15, 2024',
    title: 'Dark Mode 🌙',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    description: "🌙 Give your eyes a break with our new Dark Mode! After many requests, we're thrilled to deliver a sleek, modern look that's easy on the eyes—day or night.\n\nSwitching themes is now effortless, and every component has been carefully tuned for contrast and accessibility. Whether you're burning the midnight oil or just prefer a darker palette, this update is for you. 🌓",
    featuresTitle: 'Improvements:',
    features: ['🌗 One-click theme toggle in the header', '🖥️ Automatic adaptation to system preferences', '🧩 Fully integrated with Nuxt UI components', '♿ Optimized for accessibility and contrast', '💾 Persistent theme preference across devices', '✨ Subtle animations for a polished feel'],
    behindTheScenes: "🎨 We refactored our color system and tested across dozens of devices to ensure a consistent experience. Expect more theme customization options soon!\n\nLet us know how you like the new look and if you spot any areas for improvement! 💬"
  },
  {
    date: 'May 10, 2024',
    title: 'Teams & Collaboration',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    description: "🤝 Collaboration just got easier! With Teams, you can now work together more efficiently and securely. This update is all about empowering organizations to scale and manage their members with confidence.\n\nWe listened to your feedback and built a flexible system for inviting colleagues, assigning roles, and tracking activity. Whether you're onboarding new hires or collaborating across departments, Teams has you covered. 👥",
    featuresTitle: "What's new:",
    features: ['✉️ Invite team members via email or shareable link', '🛡️ Assign roles (Admin, Member, Viewer) for granular access control', '🔔 Real-time activity tracking and notifications', '📊 Team-based dashboards and analytics for better insights', '🔄 Easy switching between multiple teams and organizations'],
    behindTheScenes: "🏗️ We re-architected our user management system to support organizations of any size. This paves the way for future features like SSO, advanced permissions, and audit logs.\n\nPerfect for startups and growing businesses. Try it out and streamline your workflow! 🚀"
  },
  {
    date: 'Apr 1, 2024',
    title: 'SaaS Launch 🚀',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop',
    description: "🚀 We're excited to announce the public launch of our SaaS platform! This milestone is the result of months of design, development, and feedback from our early users. Our goal: make it easier than ever to launch, manage, and grow your business online.\n\nFrom the first line of code, we focused on speed, reliability, and a delightful user experience. Whether you're a solo founder or a growing team, our platform is built to scale with you. 💡",
    featuresTitle: 'Highlights:',
    features: ['⚡ Fast, responsive dashboard UI for effortless navigation', '🔐 Seamless onboarding and secure authentication', '💳 Built-in billing and subscription management with Stripe integration', '🎨 Modern design system powered by Nuxt UI', '📱 Mobile-friendly and accessible from day one', '📚 Helpful documentation and in-app tips'],
    behindTheScenes: "🛠️ We've invested in a robust infrastructure to ensure uptime and performance. Our team has also set up automated testing and continuous deployment, so you'll always have the latest features and fixes.\n\nWe're just getting started—your feedback will help shape the future of our platform. Let us know what you think and what you'd like to see next! ✨"
  }
])

const formatText = (text) => text.split('\n\n')

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = itemRefs.value.findIndex(ref => ref === entry.target)
        if (index !== -1) {
          activeIndex.value = index
        }
      }
    })
  }, {
    rootMargin: '-20% 0px -70% 0px', 
    threshold: 0
  })

  setTimeout(() => {
    itemRefs.value.forEach(el => {
      if (el) observer.observe(el)
    })
  }, 100)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="changelog-page">
    <div class="container changelog-container">
      <header class="page-header">
        <h1>Changelog</h1>
      </header>

      <div class="changelog-list">
        <article 
          v-for="(release, index) in releases" 
          :key="index" 
          class="changelog-item"
          :class="{ 'is-active': activeIndex === index }"
          :ref="(el) => setItemRef(el, index)"
        >
          <div class="changelog-date">
            <time :class="{ 'active-text': activeIndex === index }">{{ release.date }}</time>
          </div>
          
          <div class="changelog-separator"></div>
          
          <div class="changelog-content">
            <div class="changelog-date-mobile">
              <time :class="{ 'active-text': activeIndex === index }">{{ release.date }}</time>
            </div>
            
            <h2 class="release-title">{{ release.title }}</h2>
            
            <div v-if="release.image" class="release-image">
              <img :src="release.image" :alt="release.title" loading="lazy" />
            </div>
            
            <div class="prose">
              <p v-for="(p, i) in formatText(release.description)" :key="'desc-'+i">{{ p }}</p>
              
              <h3 v-if="release.featuresTitle">{{ release.featuresTitle }}</h3>
              <ul v-if="release.features">
                <li v-for="(feat, i) in release.features" :key="'feat-'+i">{{ feat }}</li>
              </ul>
              
              <h3 v-if="release.behindTheScenes">Behind the scenes:</h3>
              <p v-for="(p, i) in formatText(release.behindTheScenes)" :key="'bts-'+i">{{ p }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.changelog-page { padding: 120px 0 80px; }
.changelog-container { max-width: 900px; margin: 0 auto; padding: 0 20px; }

.page-header { margin-bottom: 4rem; text-align: left; }
.page-header h1 { font-size: 2.8rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.02em; }

.changelog-list { display: flex; flex-direction: column; }

.changelog-item {
  display: grid;
  grid-template-columns: 140px 24px 1fr;
  gap: 2.5rem;
  position: relative;
}

.changelog-date {
  text-align: right;
  padding-top: 0.25rem;
}

.changelog-date time {
  position: sticky;
  top: 100px; 
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.active-text { color: var(--primary) !important; font-weight: 700 !important; }

.changelog-separator {
  position: relative;
  display: flex;
  justify-content: center;
}

.changelog-separator::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -4rem;
  width: 1px;
  background: var(--border-color);
}

.changelog-item:last-child .changelog-separator::before {
  bottom: 0; 
}

.changelog-separator::after {
  content: "";
  position: absolute;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-color);
  border: 2px solid var(--border-color);
  z-index: 1;
  transition: all 0.3s ease;
}

.changelog-item.is-active .changelog-separator::after {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
}

.changelog-content { padding-bottom: 5rem; }
.changelog-date-mobile { display: none; }

.release-title { font-size: 1.6rem; color: var(--text-main); margin-bottom: 1.5rem; font-weight: 700; line-height: 1.3; }

.release-image { margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); }
.release-image img { width: 100%; height: auto; display: block; object-fit: cover; }

.prose p { color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem; font-size: 1.05rem; }
.prose h3 { color: var(--text-main); font-size: 1.1rem; font-weight: 600; margin: 2rem 0 1rem 0; }
.prose ul { list-style: none; padding: 0; margin: 0 0 2rem 0; }
.prose li { color: var(--text-muted); line-height: 1.7; margin-bottom: 0.5rem; font-size: 1.05rem; display: flex; align-items: flex-start; }

@media (max-width: 768px) {
  .changelog-item { grid-template-columns: 24px 1fr; gap: 1.5rem; }
  .changelog-date { display: none; }
  .changelog-date-mobile { display: block; margin-bottom: 0.75rem; }
  .changelog-date-mobile time { color: var(--text-muted); font-size: 0.9rem; font-weight: 500; transition: color 0.3s; }
  .page-header h1 { font-size: 2.2rem; }
}
</style>