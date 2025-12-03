# Portfolio Website

A modern, AI-integrated portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with dark mode support
- 🚀 Server-side rendering with Next.js App Router
- 🎨 Beautiful UI with Tailwind CSS
- 🤖 AI-powered chatbot assistant
- 📝 Dynamic blog posts with slug-based routing
- 💼 Projects showcase with detailed pages
- 🛠️ Skills section with individual skill pages
- 📬 Contact form for inquiries
- 🔍 SEO-optimized pages

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **AI Integration:** GitHub Models (OpenAI GPT-4.1-mini)
- **Fonts:** Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                      # Next.js App Router pages
│   ├── AboutMe/             # About page
│   ├── BlogPosts/           # Blog listing & [slug] pages
│   ├── Contact/             # Contact form page
│   ├── Projects/            # Projects listing & [slug] pages
│   ├── Skills/              # Skills listing & [slug] pages
│   ├── api/chat/            # AI chatbot API route
│   ├── layout.tsx           # Root layout with navbar & chatbot
│   └── page.tsx             # Landing page
├── Components/              # Reusable components
│   ├── ai-chat-box.tsx     # AI chatbot component
│   └── ui/                  # UI components
│       ├── navbar.tsx
│       ├── profilePicture.tsx
│       └── skillsCard.tsx
├── lib/                     # Utilities & data
│   ├── slugs/              # Slug utilities & dummy data
│   │   ├── blog_posts.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   └── types.ts            # TypeScript type definitions
├── Data/                    # Legacy data files (can be removed)
└── public/                  # Static assets
    └── images/             # Image assets
```

## Customization

### 1. Update Personal Information

Edit the following files to customize content:

- **Landing Page:** `app/page.tsx`
- **About Me:** `app/AboutMe/page.tsx`
- **Contact Info:** `app/Contact/page.tsx`

### 2. Add Your Projects

Edit `lib/slugs/projects.tsx`:

```typescript
{
  slug: 'your-project-slug',
  title: 'Your Project Title',
  image: '/images/your-project.jpg',
  paragraph: 'Your project description...',
  techStackUsed: [
    { name: 'Next.js', image: '/images/nextjs-icon.svg' },
    // Add more tech stack items
  ],
  githubLink: 'https://github.com/yourusername/project',
  websiteLink: 'https://your-project.com',
}
```

### 3. Add Your Skills

Edit `lib/slugs/skills.tsx`:

```typescript
{
  slug: 'your-skill',
  title: 'Your Skill Name',
  technologyImage: '/images/skill-logo.svg',
  whyParagraph: 'How you use this skill...',
}
```

### 4. Add Blog Posts

Edit `lib/slugs/blog_posts.tsx`:

```typescript
{
  slug: 'your-blog-post',
  title: 'Your Blog Post Title',
  authorName: 'Your Name',
  authorImage: '/images/your-photo.jpg',
  date: '2024-12-01',
  subHeading: 'Your subheading',
  paragraph: 'Your blog post content...',
  paragraphImage: '/images/blog-image.jpg', // Optional
}
```

### 5. Add Images

Place your images in `public/images/` and reference them as `/images/filename.jpg`

### 6. Enable AI Chatbot (Optional)

To enable real AI responses in the chatbot:

1. Get a GitHub Personal Access Token (PAT) from [GitHub Settings](https://github.com/settings/tokens)

2. Add it to your environment variables:
```bash
# .env.local
GITHUB_TOKEN=your_github_token_here
```

3. Uncomment the AI integration code in `app/api/chat/route.ts`

4. Install required dependencies:
```bash
npm install @azure-rest/ai-inference @azure/core-auth
# or
npm install openai
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js.

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with Next.js, TypeScript, and Tailwind CSS
