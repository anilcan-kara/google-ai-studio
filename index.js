const { GoogleGenerativeAI } = require('@google/generative-ai');

const MODEL_NAME = 'gemini-1.0-pro';
const API_KEY = Bun.env.API_KEY;

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const chat = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chat.sendMessage('Hello, how are you today?');
  const response = result.response;

  console.log(response.text());
}

runChat();
