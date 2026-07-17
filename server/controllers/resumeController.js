import fs from "fs";
import {PDFParse} from "pdf-parse";
import { summarizeResume } from "../services/huggingface/summarizer.js";;
import { cosineSimilarity } from "../services/similarity/cosine.js";
import { extractSkills } from "../services/skills/extractSkill.js";
import { generateEmbeddings } from "../services/huggingface/embeddings.js";
import { calculateATSScore } from "../services/ats/ats.js";
import { generateFeedback } from "../services/huggingface/feedback.js";
import { calculateReadiness } from "../services/readiness/readinessScore.js";

export const analyzeResume = async (req, res) => {

    try {
        if(!req.file?.buffer) {
           return res.status(400).json({
            success: false,
            message: "Please provide the resume file"
           })
        }
        const parser = new PDFParse({
            data: req.file.buffer
        });
        let resumeText;
        try {
            const data = await parser.getText();
            resumeText = data.text?.trim();
        } finally {
            await parser.destroy();
        }

        const { jobDescription } = req.body;

        if(!jobDescription){
            return res.status(400).json({
                success: false,
                message: "Please provide both resume-text and jobDescription"
            })
        }

        // AI Summary
        const summary = await summarizeResume(resumeText);

        // Embeddings
        const resumeEmbedding = await generateEmbeddings(resumeText);
        const jobEmbedding = await generateEmbeddings(jobDescription);

        // Readiness
        const feedback = await generateFeedback(resumeText, jobDescription);

        // Cosine Similarity
        const similarity = cosineSimilarity(
            resumeEmbedding,
            jobEmbedding
        );

        // Ats Score
        const atsScore = calculateATSScore(
            resumeText,
            similarity * 100
        )

        // Skills
        const resumeSkills = extractSkills(resumeText);
        const jdSkills = extractSkills(jobDescription);

        const missingSkills = jdSkills.filter(
            (skill) => !resumeSkills.includes(skill)
        );

          //calculate readiness score

        const readiness = calculateReadiness(
            similarity * 100,
            atsScore,
            missingSkills,
            jdSkills
        )

        res.status(200).json({
            success: true,
            summary,
            matchScore: (similarity * 100).toFixed(2),
            atsScore,
            readiness,
            resumeSkills,
            jdSkills,
            missingSkills,
            feedback   
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Resume analysis failed",
        });
    }
};