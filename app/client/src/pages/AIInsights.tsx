import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import styles from './AIInsights.module.css';
import api from '../services/api';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const AIInsights: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'assistant', 
      content: 'Hello! I am your MJ Solutions AI assistant. How can I help you with your finances today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { 
      id: Date.now().toString(), 
      role: 'user', 
      content: input 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Call real AI service
      const response = await api.post('/api/ai/chat', {
        messages: [...messages, userMessage].slice(-10).map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.data.response || response.data.message || 'I apologize, but I couldn\'t generate a response. Please try again.',
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      
      // Fallback response on error
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting to the AI service right now. Please try again in a moment.',
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.insightsPage}>
      <div className={styles.sidebar}>
        <h3>Financial Analytics</h3>
        <div className={styles.suggestionCard}>
          <Sparkles size={18} />
          <p>Ask me about your spending patterns, savings goals, or tax optimization strategies.</p>
        </div>
        <div className={styles.statBox}>
          <span>AI Insights Available</span>
          <strong>Powered by Ollama</strong>
        </div>
        <div className={styles.quickActions}>
          <h4>Quick Actions</h4>
          <button onClick={() => setInput('Analyze my spending this month')}>
            📊 Analyze Spending
          </button>
          <button onClick={() => setInput('How can I save more money?')}>
            💰 Savings Tips
          </button>
          <button onClick={() => setInput('Review my property portfolio')}>
            🏠 Property Review
          </button>
        </div>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.messageList}>
          {messages.map(msg => (
            <div key={msg.id} className={`${styles.message} ${styles[msg.role]}`}>
              <div className={styles.avatar}>
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={styles.bubble}>{msg.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <div className={styles.avatar}>
                <Bot size={18} />
              </div>
              <div className={styles.bubble}>
                <Loader2 className={styles.spinner} size={18} />
                <span className={styles.loadingText}>Thinking...</span>
              </div>
            </div>
          )}
        </div>

        <form className={styles.chatInput} onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask me about your spending, savings, or tax..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" disabled={!input.trim() || isLoading}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIInsights;
