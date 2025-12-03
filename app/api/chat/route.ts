import { NextRequest, NextResponse } from 'next/server';

// Portfolio context for the AI to use
const PORTFOLIO_CONTEXT = `
You are a helpful AI assistant for a developer portfolio website.

About the Developer:
- Full-stack developer specializing in modern web technologies
- Experienced with React, Next.js, TypeScript, and AI integration
- Passionate about creating elegant solutions to complex problems
- Works on diverse projects from e-commerce platforms to AI-powered applications

Skills:
- React & Next.js for building dynamic web applications
- TypeScript for type-safe development
- Tailwind CSS for styling
- Python for backend and AI integration
- Git & GitHub for version control
- AI/ML integration and chatbot development

Projects include:
- E-Commerce Platform with Next.js and Stripe
- AI Chatbot Assistant with OpenAI integration
- Task Management Application with real-time collaboration
- Weather Dashboard with API integration

When answering questions:
- Be friendly and helpful
- Provide specific information about the developer's skills and projects
- Encourage visitors to check out the Projects, Skills, and Contact pages
- Keep responses concise but informative
`;

// Intentionally referenced to avoid lint warning about unused variable. 
void PORTFOLIO_CONTEXT;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // For demonstration purposes, this uses a simple response
    // To implement with GitHub Models, uncomment and configure the code below:
    
    /*
    // Uncomment and add your GitHub token to use real AI responses
    const endpoint = "https://models.github.ai/inference";
    const model = "openai/gpt-4.1-mini"; // Cost-effective and fast
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      throw new Error('GITHUB_TOKEN not configured');
    }

    const response = await fetch(`${endpoint}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: PORTFOLIO_CONTEXT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    return NextResponse.json({ message: aiMessage });
    */

    // Temporary demo responses (remove when implementing real AI)
    const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
    
    let demoResponse = "I'm a demo AI assistant. To enable real AI responses, configure your GitHub token in the API route.";
    
    if (lastUserMessage.includes('project')) {
      demoResponse = "This portfolio features several impressive projects including an E-Commerce Platform, AI Chatbot Assistant, and Task Management Application. Check out the Projects page to see more details!";
    } else if (lastUserMessage.includes('skill') || lastUserMessage.includes('technology')) {
      demoResponse = "The developer is skilled in React, Next.js, TypeScript, Python, Tailwind CSS, and AI integration. Visit the Skills page to see the full technology stack!";
    } else if (lastUserMessage.includes('contact') || lastUserMessage.includes('hire')) {
      demoResponse = "Interested in working together? Head over to the Contact page to send a message. The developer is always open to new opportunities!";
    } else if (lastUserMessage.includes('hello') || lastUserMessage.includes('hi')) {
      demoResponse = "Hello! Welcome to this portfolio. I can help you learn about the developer's skills, projects, and experience. What would you like to know?";
    }

    return NextResponse.json({ message: demoResponse });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
