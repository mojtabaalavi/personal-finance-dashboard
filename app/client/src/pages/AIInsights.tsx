import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import styles from './AIInsights.module.css';

const AIInsights: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: 'Hello! I am your MJ Solutionss AI assistant. How can I help you with your finances today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now().toString(), role: 'user', content: input };
    setMessages([...messages, newMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "That's an interesting question about your expenses. Based on your current trends, you could save approximately $300 more per month by reducing your 'Dining Out' category."
      }]);
    }, 1000);
  };

  return (
    <div className={styles.insightsPage}>
      <div className={styles.sidebar}>
        <h3>Financial Analytics</h3>
        <div className={styles.suggestionCard}>
          <Sparkles size={18} />
          <p>You have 12 uncategorized transactions from last week. Shall we categorize them?</p>
          <button>Review Now</button>
        </div>
        <div className={styles.statBox}>
          <span>Weekly Spending Score</span>
          <strong>84 / 100</strong>
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
        </div>

        <form className={styles.chatInput} onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask me about your spending or tax..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIInsights;
