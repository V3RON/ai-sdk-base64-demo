import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import fs from 'node:fs/promises';
import path from 'node:path';

const file = await fs.readFile(path.join(import.meta.dirname, './image.png'));

const { text } = await generateText({
  model: openai('gpt-4o'),
  system: 'You are a friendly assistant!',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: 'What do you see?' },
        {
          type: 'image',
          image: file.buffer,
          mimeType: 'image/png',
        },
      ],
    },
  ],
});

console.log(text);
