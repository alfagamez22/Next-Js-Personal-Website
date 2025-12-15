'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MessageSquare, X, Send, User, RefreshCw } from 'lucide-react';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPhp, SiPython, SiGit, SiGithub, SiPostgresql, SiMysql, SiCplusplus, SiDocker } from 'react-icons/si';

// Data Structure for Tech Stack
const techStackData = [
  { id: 'node', icon: <SiNodedotjs className="w-full h-full text-green-600" />, title: "Node.js", bg: "bg-green-500/10", border: "border-green-500/20" },
  { id: 'ts', icon: <SiTypescript className="w-full h-full text-blue-600" />, title: "TypeScript", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { id: 'next', icon: <SiNextdotjs className="w-full h-full text-white" />, title: "Next.js", bg: "bg-slate-700/50", border: "border-slate-600" },
  { id: 'php', icon: <SiPhp className="w-full h-full text-indigo-600" />, title: "PHP", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { id: 'python', icon: <SiPython className="w-full h-full text-yellow-500" />, title: "Python", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { id: 'git', icon: <SiGit className="w-full h-full text-orange-600" />, title: "Git", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { id: 'github', icon: <SiGithub className="w-full h-full text-white" />, title: "GitHub", bg: "bg-slate-700/50", border: "border-slate-600" },
  { id: 'react', icon: <SiReact className="w-full h-full text-cyan-400" />, title: "React", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { id: 'postgres', icon: <SiPostgresql className="w-full h-full text-cyan-500" />, title: "PostgreSQL", bg: "bg-cyan-600/10", border: "border-cyan-600/20" },
  { id: 'mysql', icon: <SiMysql className="w-full h-full text-cyan-300" />, title: "MySQL", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { id: 'docker', icon: <SiDocker className="w-full h-full text-blue-800" />, title: "Docker", bg: "bg-blue-600/10", border: "border-blue-600/20" },
  { id: 'cpp', icon: <SiCplusplus className="w-full h-full text-blue-800" />, title: "C++", bg: "bg-blue-800/10", border: "border-blue-800/20" },
  { id: 'excel', icon: <PiMicrosoftExcelLogoFill className="w-full h-full text-green-300" />, title: "Excel", bg: "bg-green-500/10", border: "border-green-500/20" },
];

interface Message {
  id: number;
  type: 'ai' | 'user';
  text: string;
  timestamp: string;
  contentType?: 'techStack' | string;
}

export default function AIChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  // Represents whether the Gemini AI is online (true) or offline (false).
  // Independent of `isOpen` (which controls the chat window visibility).
  const [geminiOnline, setGeminiOnline] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      text: "Hi there! 👋 I'm your Portfolio Assistant. I can tell you about my projects, skills, or experience. What would you like to know?",
      timestamp: ''
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => {
        if (prev[0].timestamp === '') {
          const newMessages = [...prev];
          newMessages[0] = {
            ...newMessages[0],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          return newMessages;
        }
        return prev;
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (e: React.FormEvent | null, overrideText: string | null = null) => {
    if (e) e.preventDefault();
    const text = overrideText || inputValue;
    if (!text.trim()) return;

    // Add User Message
    const userMsg: Message = {
      id: Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Response Logic
    setTimeout(() => {
      let responseContent;
      let contentType = 'text'; // 'text' or 'techStack'

      if (text.toLowerCase().includes('tech') || text.toLowerCase().includes('stack') || text.toLowerCase().includes('skills')) {
        responseContent = "Here are the technologies I work with. I specialize in the Backend development and have experienced making Python projects and SQL database management as well.";
        contentType = 'techStack';
      } else if (text.toLowerCase().includes('project')) {
         responseContent = "I've worked on several key projects, including an E-commerce dashboard using Next.js and a Real-time Chat App using Socket.io. Would you like to see a demo link?";
      } else if (text.toLowerCase().includes('experience') || text.toLowerCase().includes('work')) {
         responseContent = "I have experience as a lead developer and project manager in developing a Full-stack web application for our Thesis which was deployed in AWS and as for the custom trained AI model it was deployed in Runpod.";
      } else {
         responseContent = "Right now i'm a demo AI assistant. as Im still under development, I can provide basic info about my projects, skills, and experience.";
      }

      const aiMsg: Message = {
        id: Date.now() + 1,
        type: 'ai',
        text: responseContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        contentType: contentType
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">
        
        {/* Chat Window */}
        <div 
          onWheel={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className={`
            transition-all duration-300 ease-in-out transform origin-bottom-right
            ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'}
            w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)]
            bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 
            rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-slate-800
          `}
        >
          {/* Header */}
          <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shadow-lg ring-2 ring-slate-800 overflow-hidden">
                  <Image 
                    src="/images/ai-logo.svg" 
                    alt="AI Assistant" 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setGeminiOnline(!geminiOnline)}
                  title={geminiOnline ? 'Gemini online — click to set offline' : 'Gemini offline — click to set online'}
                  aria-pressed={!geminiOnline}
                  className="absolute bottom-0 right-0 w-3 h-3 flex items-center justify-center focus:outline-none"
                >
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${geminiOnline ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${geminiOnline ? 'bg-green-500 border-2 border-slate-900' : 'bg-red-500 border-2 border-slate-900'}`}></span>
                </button>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Portfolio Assistant</h3>
                 <p className="text-xs font-medium text-blue-300">Powered by Gemini</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setMessages([{ id: 1, type: 'ai', text: "Chat cleared! How can I help?", timestamp: new Date().toLocaleTimeString() }])}
                className="p-2 hover:bg-slate-700/50 rounded-full text-slate-400 hover:text-white transition-colors"
                title="Reset Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[90%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                  {/* Avatar */}
                  <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center ${msg.type === 'user' ? 'bg-slate-700' : 'bg-transparent overflow-hidden'}`}>
                     {msg.type === 'user' ? (
                       <User className="w-3 h-3 text-slate-300" />
                     ) : (
                       <Image src="/images/ai-logo.svg" alt="AI" width={24} height={24} className="w-full h-full object-cover" />
                     )}
                  </div>

                  {/* Bubble */}
                  <div className="flex flex-col space-y-2">
                    <div className={`
                      group relative px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'}
                    `}>
                      {msg.text}
                      <span className={`
                        text-[10px] absolute bottom-0 mb-[-1.2rem] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-500
                        ${msg.type === 'user' ? 'right-0' : 'left-0'}
                      `}>
                        {msg.timestamp}
                      </span>
                    </div>

                    {/* Rich Content: Tech Stack Grid */}
                    {msg.contentType === 'techStack' && (
                      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-3 grid grid-cols-4 gap-2 animate-in fade-in zoom-in duration-300">
                        {techStackData.map((tech) => (
                          <div key={tech.id} className={`flex flex-col items-center justify-center p-2 rounded-xl border ${tech.bg} ${tech.border} hover:scale-105 transition-transform cursor-default group/icon`}>
                             <div className="w-6 h-6 mb-1">
                               {tech.icon}
                             </div>
                             <span className="text-[10px] text-slate-300 font-medium truncate w-full text-center opacity-70 group-hover/icon:opacity-100">{tech.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start w-full">
                <div className="flex items-end gap-2">
                   <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                     <Image src="/images/ai-logo.svg" alt="AI" width={24} height={24} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1 items-center h-10">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800/30 border-t border-slate-700/50 backdrop-blur-sm">
            
            {/* Quick Actions / Suggestions */}
            {messages.length < 3 && !isTyping && (
               <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar mask-gradient-right">
                 {[
                    { label: 'Tech Stack',},
                    { label: 'Projects',},
                    { label: 'Experience',  }
                  ].map((chip) => (
                   <button 
                    key={chip.label}
                    onClick={() => handleSend(null, `Tell me about your ${chip.label}`)}
                    className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-full text-xs text-slate-300 transition-all active:scale-95"
                   >
                     {chip.label}
                   </button>
                 ))}
               </div>
            )}

            <form onSubmit={(e) => handleSend(e)} className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything..."
                className="w-full bg-slate-950/50 border border-slate-700 text-slate-200 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder-slate-500 transition-all shadow-inner"
              />
              
              <div className="absolute right-2 flex items-center space-x-1">
                {inputValue && (
                  <button 
                    type="submit"
                    title="Send Message"
                    className="p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg transition-all duration-200 transform active:scale-95 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
            <div className="text-center mt-2 flex items-center justify-center gap-1">
               <span className="text-[10px] text-slate-500">AI can make mistakes.</span>
            </div>
          </div>
        </div>

        {/* Toggle Button (FAB) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
          className={`
            relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl 
            transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30
            ${isOpen ? 'bg-slate-800 rotate-90 text-slate-200' : 'bg-blue-600 hover:bg-blue-500 text-white rotate-0'}
          `}
        >
          <div className="absolute inset-0 rounded-full border border-white/10"></div>
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
          
          
        </button>
      </div>
  );
}
