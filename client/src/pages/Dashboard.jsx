import AtsCard from '@/components/AtsCard';
import FeedbackCard from '@/components/FeedbackCard';
import MatchScoreCard from '@/components/MatchScoreCard';
import ReadinessCard from '@/components/ReadinessCard';
import SkillCard from '@/components/SkillCard';
import SummaryCard from '@/components/SummaryCard';
import api from '@/services/api';
import React, { useState } from 'react'


const Dashboard = () => {
    const [resume , setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysis , setAnalysis] = useState(null)
    const [loading , setLoading] = useState(false)


    const analyzeResume = async () => {

        if(!resume) {
            return;
        }

        if(!jobDescription){
            return;
        }
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("resume" , resume);
            formData.append("jobDescription" , jobDescription)

            const response = await api.post(
                "/resume/analyze",
                formData
            )
            console.log(response.data)
            setAnalysis(response.data)

        } catch (error) {
            console.error("There is an internal server error" , error);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div>
        <input type="file" 
        accept='.pdf'
        onChange={(e) => setResume(e.target.files[0])} />
        <textarea placeholder='Enter the jobDescription' 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)}
        />
        <button onClick={analyzeResume} 
        disabled = {loading} >{loading ? "Analyzing" : "Analyze"}</button>
        
        {analysis && (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8" >
        <SummaryCard
            summary={analysis.summary}
        />

        <MatchScoreCard
            score={analysis.matchScore}
        />

        <AtsCard
            score={analysis.atsScore}
        />

        <ReadinessCard
            score={analysis.readiness}
        />

        <SkillCard
            resumeSkills={analysis.resumeSkills}
            missingSkills={analysis.missingSkills}
        />

        <FeedbackCard
            feedback={analysis.feedback}
        />
    </div>
)}
    </div>
  )
}

export default Dashboard