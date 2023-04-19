import { Configuration, OpenAIApi } from "openai";


export async function connection(text: string, lang: string) {
  const configuration = new Configuration({
    organization: "org-89XGHoeg68x692lZaqWwJ5k7",
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: `From now on, you will be a translator. Translate this: ${text} to ${lang}`,
      },
    ],
  });

  return response;
}
