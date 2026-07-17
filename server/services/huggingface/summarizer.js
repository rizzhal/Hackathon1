import "dotenv/config";
import { InferenceClient } from "@huggingface/inference"

const accessToken = process.env.HF_API_KEY;

if (!accessToken) {
    throw new Error("HF_API_KEY is not configured");
}

const client = new InferenceClient(accessToken)

export async function summarizeResume(text) {
    const result = await client.summarization({
        model: "facebook/bart-large-cnn",
        inputs: text.substring(0,3000)
    })
    return result.summary_text;
}   
