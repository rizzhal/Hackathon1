import fs from "fs"
import {PDFParse} from "pdf-parse";

export const uploadResume = async (req , res) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF in the resume field"
            })
        }
        const parser = new PDFParse({ data: req.file.buffer });
        const data = await parser.getText();   
        await parser.destroy()

        res.status(200).json({
            success: true,
            extractedText: data.text
        });
        
    } catch (error) {
        console.log("Resume parsing error:", error)
        res.status(500).json({
            success: false,
            message: "Unable to parse pdf"
        });
    }
}