import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Target,
  ShieldCheck,
  Rocket,
  Brain,
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative hidden lg:flex justify-center items-center"
    >
      {/* Background Glow Effects */}

      <div className="absolute h-112.5 w-112.5 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="absolute h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute h-75 w-75 rounded-full bg-blue-500/20 blur-[100px]" />

      {/* Floating Dashboard Card */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="relative w-105 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"
      >
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Resume Analysis
            </h2>

            <p className="text-sm text-gray-400">
              AI Generated Report
            </p>
          </div>

          <CheckCircle2 className="text-green-400" size={28} />
        </div>

        {/* Uploaded Resume */}

        <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="rounded-lg bg-blue-500/20 p-3">
            <FileText className="text-blue-400" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              resume.pdf
            </h3>

            <p className="text-sm text-gray-400">
              Successfully uploaded
            </p>
          </div>
        </div>

        {/* Scores */}

        <div className="mt-8 space-y-6">
          <Score
            icon={<Target size={18} />}
            title="Match Score"
            score={92}
          />

          <Score
            icon={<ShieldCheck size={18} />}
            title="ATS Score"
            score={88}
          />

          <Score
            icon={<Rocket size={18} />}
            title="Hire Readiness"
            score={90}
          />
        </div>

        {/* Missing Skills */}

        <div className="mt-8">
          <h3 className="mb-3 font-semibold text-white">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">
              Docker
            </span>

            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">
              AWS
            </span>

            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">
              Kubernetes
            </span>
          </div>
        </div>

        {/* AI Feedback */}

        <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <Brain className="text-violet-400" size={20} />

            <h3 className="font-semibold text-white">
              AI Feedback
            </h3>
          </div>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Strong frontend development skills. Improve cloud
            technologies and containerization to increase your ATS
            score.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Score = ({ icon, title, score }) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-300">
          {icon}
          <span>{title}</span>
        </div>

        <span className="font-bold text-white">
          {score}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-cyan-400"
        />
      </div>
    </div>
  );
};

export default DashboardPreview;