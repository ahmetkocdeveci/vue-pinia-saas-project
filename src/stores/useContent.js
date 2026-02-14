import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state: () => ({
    hero: {
      title: 'Build the Software of the Future Today',
      highlight: 'SaaS Template',
      description: 'A high-performance and fully customizable template structure modernized with Vue 3, Pinia, and Vanilla CSS.',
      cta: 'Start for Free',
      secondaryCta: 'Read Documentation',
      videoUrl: 'https://www.youtube.com/embed/FzKCajlHABE'
    },
    features: [
      {
        id: 'modern-saas',
        title: 'Built for Modern SaaS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        description: 'Everything you need to scale your SaaS project effortlessly.',
        items: [{ icon: '🚀', text: 'Optimized for Core Web Vitals.' }],
        reverse: false
      },
      {
        id: 'ui-comp',
        title: 'Powered by Vue Components',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
        description: 'Access a completely customizable component library.',
        items: [{ icon: '📦', text: '100+ beautifully styled components.' }],
        reverse: true
      }
    ],
    gridFeatures: [
      { title: 'Beautiful Design System', desc: 'Semantic color aliases and comprehensive design tokens.', icon: '🎨' },
      { title: 'Accessible by Default', desc: 'Built on robust accessibility standards.', icon: '♿' },
      { title: 'Developer Experience', desc: 'Auto-imports and hot module replacement.', icon: '💻' },
      { title: 'SEO Optimized', desc: 'Automatic meta tags and sitemap generation.', icon: '🔍' },
      { title: 'Production Ready', desc: 'Error handling and security best practices.', icon: '🛡️' },
      { title: 'Infinitely Customizable', desc: 'Override any style with Vanilla CSS.', icon: '⚙️' }
    ],
    pricing: [
      { 
        name: 'Starter', 
        price: '0', 
        features: ['Limited Projects', 'Basic Support', 'Community Access'], 
        buttonText: 'Start for Free', 
        popular: false 
      },
      { 
        name: 'Professional', 
        price: '29', 
        features: ['Unlimited Projects', 'Priority Support', 'Custom Analytics'], 
        buttonText: 'Get Started', 
        popular: true 
      },
      { 
        name: 'Enterprise', 
        price: '99', 
        features: ['Unlimited Everything', '24/7 Dedicated Agent', 'SSO Integration'], 
        buttonText: 'Contact Us', 
        popular: false 
      }
    ],
    posts: [
      {
        id: 1,
        featured: true,
        category: 'Cooking',
        slug: 'culinary-wonders-of-asia',
        title: 'Exploring the Culinary Wonders of Asia',
        excerpt: 'Embark on a tantalizing expedition through the diverse and enchanting flavors of Asia.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
        date: 'Aug 25, 2023',
        author: { name: 'Alexia Wong', avatar: 'https://i.pravatar.cc/150?u=alexia' }
      },
      {
        id: 2,
        category: 'Nature',
        slug: 'majestic-peaks',
        title: 'Discovering the Majestic Peaks',
        excerpt: 'Embark on an unforgettable odyssey through the Pyrenees, where majestic peaks and lakes await.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        date: 'Jul 8, 2022',
        author: { name: 'Nicolas Maillet', avatar: 'https://i.pravatar.cc/150?u=nicolas' }
      },
      {
        id: 3,
        category: 'Science',
        slug: 'unveiling-the-marvel',
        title: 'Unveiling the Marvel',
        excerpt: 'The journey to create the James Webb Space Telescope was one of the most ambitious projects.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
        date: 'Dec 12, 2020',
        author: { name: 'Josh Bayers', avatar: 'https://i.pravatar.cc/150?u=josh' }
      },
      {
        id: 4,
        category: 'Health',
        slug: 'benefits-of-meditation',
        title: 'The Benefits of Meditation',
        excerpt: 'The benefits of meditation and mindfulness practices on mental health are well documented.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
        date: 'Apr 23, 2021',
        author: { name: 'Rebecca Millers', avatar: 'https://i.pravatar.cc/150?u=rebecca' }
      }
    ],
    testimonials: [
      { quote: "Nuxt UI transformed how we build. Quality is exceptional.", author: "Sarah Chen", role: "CTO", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { quote: "Perfect Lighthouse scores out of the box.", author: "Emily Zhang", role: "Lead Architect", avatar: "https://i.pravatar.cc/150?u=emily" }
    ]
  }),
  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find(p => p.slug === slug),
    featuredPost: (state) => state.posts.find(p => p.featured),
    regularPosts: (state) => state.posts.filter(p => !p.featured)
  }
})