import { Configuration, OpenAIApi } from "openai";

export async function connection(text: string, lang: string) {
  const configuration = new Configuration({
    organization: "org-89XGHoeg68x692lZaqWwJ5k7",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: `Translate this: ${text} to ${lang}` }],
  });

  return response;
}
