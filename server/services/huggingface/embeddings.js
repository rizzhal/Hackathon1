import { InferenceClient } from "@huggingface/inference";

const accessToken = process.env.HF_API_KEY;

if(!accessToken){
    throw new Error("HF_API_KEY is not configured")
}

const client = new InferenceClient(accessToken)

export const generateEmbeddings = async (text) => {
    const embedding = await client.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: text.substring(0, 3000)
    })

    return embedding;
}
