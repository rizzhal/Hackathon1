import { InferenceClient } from "@huggingface/inference";

const accessToken = process.env.HF_API_KEY

if(!accessToken){
    throw new Error("HF_TOKEN not configured")
}
const client = new InferenceClient(accessToken);

function parseFeedback(content) {
    if (typeof content !== "string") {
        throw new Error("Feedback model returned an empty response");
    }

    // Models commonly return JSON inside a Markdown code fence even when
    // instructed to return JSON only.
    const cleaned = content
        .trim()
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/, "")
        .trim();

    try {
        return JSON.parse(cleaned);
    } catch {
        throw new Error(`Feedback model returned invalid JSON: ${content}`);
    }
}

export async function generateFeedback(resumeText, jobDescription) {
    const response = await client.chatCompletion({
        model: "Qwen/Qwen2.5-7B-Instruct",

        messages: [
            {
                role: "system",
                content:
                    "You are an expert HR recruiter."
            },
            {
                role: "user",
                content: `
Analyze this resume.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY JSON.

{
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}
`
            }
        ],

        max_tokens: 500
    });

    return parseFeedback(response.choices?.[0]?.message?.content);
}
