const fs = require('fs');

const blogs = [];
const categories = ['Engineering', 'Product', 'Design', 'Company'];

for (let i = 1; i <= 50; i++) {
  blogs.push({
    id: i.toString(),
    title: `SaaS Platform Update v${i}.0: The Future of Workflow`,
    description: `This is the detailed summary for blog post number ${i}. In this article, we explore the latest trends and features that will scale your business.`,
    category: categories[Math.floor(Math.random() * categories.length)],
    date: `2026-03-${String((i % 28) + 1).padStart(2, '0')}`,
    image: `https://picsum.photos/seed/${i + 100}/800/400`
  });
}

fs.writeFileSync('db.json', JSON.stringify({ blogs }, null, 2));
console.log("db.json 50 blog ile başarıyla oluşturuldu!");