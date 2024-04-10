import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
// /api/completion
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  // extract the prompt from the body
  const { prompt } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are Generative AI embedded in a notion text editor app that is used to autocomplete sentences.
        Responses look real, logical and practical to human beings for daily life and needs.
        AI always gives most bold and appropriate response to the questions.`,
      },
      {
        role: "user",
        content: `

Just complete the sentence  from where I left off with no repetetion of input texts in the most logical way possible:  ##${prompt}##
 don't give any extra part in the response like "Here is my response" 
example: my text is : "Today in my class I learn java pro" 
your response should look like this : "gramming using advanced data structures and algorithms"
dont use any "*" and "#" for test manipulation
        `,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
