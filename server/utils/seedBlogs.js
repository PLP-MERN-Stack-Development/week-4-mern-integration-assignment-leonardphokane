const Blog = require('../models/blogModel');

const seedBlogs = async () => {
  const entries = [
    {
      title: 'Afrofuturist Vision',
      body: 'Exploring tech through culture. Where code meets mythos.'
    },
    {
      title: 'Tech and Identity',
      body: 'How software reflects selfhood across continents and timelines.'
    },
    {
      title: 'Zulutech Origins',
      body: 'Building digital legacy through intentional backend design.'
    }
  ];

  try {
    await Blog.deleteMany();            // 🧹 Clear the deck
    await Blog.insertMany(entries);     // 🌱 Plant new content
    console.log('✅ Blog data seeded successfully');
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};

module.exports = seedBlogs;
