import { Ollama } from 'ollama';

const ollama = new Ollama({ host: process.env.OLLAMA_BASE_URL || 'http://localhost:11434' });


export const generateCompletion = async (prompt: string) => {
  try {
    const response = await ollama.generate({
      model: process.env.OLLAMA_MODEL || 'llama3',
      prompt: prompt,
      stream: false
    });
    return response.response;
  } catch (error) {
    console.error('Ollama Error:', error);
    throw new Error('AI Service communication failed');
  }
};

export const chatWithAI = async (messages: { role: string, content: string }[]) => {
  try {
    const response = await ollama.chat({
      model: process.env.OLLAMA_MODEL || 'llama3',
      messages: messages,
      stream: false
    });
    return response.message.content;
  } catch (error) {
    console.error('Ollama Chat Error:', error);
    throw new Error('AI Chat failed');
  }
};
