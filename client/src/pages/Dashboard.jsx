import { useLocation, Navigate } from "react-router-dom";

import SummaryCard from "@/components/SummaryCard";
import MatchScoreCard from "@/components/MatchScoreCard";
import ReadinessCard from "@/components/ReadinessCard";
import SkillCard from "@/components/SkillCard";
import FeedbackCard from "@/components/FeedbackCard";
import AtsCard from "@/components/AtsCard";

const Dashboard = () => {
  const { state } = useLocation();

  const analysis = state?.analysis || JSON.parse(sessionStorage.getItem("analysis"));

  // Prevent users from opening /dashboard directly
  if (!analysis) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-black">
            Resume Analysis
          </h1>

          <p className="mt-4 text-gray-400">
            AI-powered analysis of your resume
          </p>

        </div>

        {/* Score Cards */}

        <div className="grid gap-6 md:grid-cols-3">

          <MatchScoreCard
            score={analysis.matchScore}
          />

          <AtsCard
            score={analysis.atsScore}
          />

          <ReadinessCard
            score={analysis.readiness}
          />

        </div>

        {/* Summary */}

        <div className="mt-8">

          <SummaryCard
            summary={analysis.summary}
          />

        </div>

        {/* Skills */}

        <div className="mt-8">

          <SkillCard
            resumeSkills={analysis.resumeSkills}
            missingSkills={analysis.missingSkills}
          />

        </div>

        {/* Feedback */}

        <div className="mt-8" >

          <FeedbackCard
            feedback={analysis.feedback}
          />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;