import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, FileText, Target, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <FileText size={24} />,
    text: "Parsing your resume...",
  },
  {
    icon: <Brain size={24} />,
    text: "Extracting skills...",
  },
  {
    icon: <BarChart3 size={24} />,
    text: "Calculating ATS score...",
  },
  {
    icon: <Target size={24} />,
    text: "Matching job description...",
  },
  {
    icon: <Sparkles size={24} />,
    text: "Generating AI feedback...",
  },
];

const Loading = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + 1;
      });
    }, 40);

    const stepTimer = setInterval(() => {
      setStep((prev) => {
        if (prev === steps.length - 1) return prev;
        return prev + 1;
      });
    }, 900);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">

      <div className="absolute h-112.5 w-112.5 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute h-87.5 w-87.5 rounded-full bg-violet-500/20 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-130 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
      >
        <h1 className="text-center text-4xl font-black text-white">
          ResumeAI
        </h1>

        <p className="mt-2 text-center text-gray-400">
          AI Resume Analysis
        </p>

        <div className="mt-10 flex justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          >
            <Brain
              size={70}
              className="text-blue-400"
            />
          </motion.div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between text-sm text-gray-300">
            <span>Analyzing...</span>
            <span>{progress}%</span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-800">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-cyan-400"
            />
          </div>
        </div>

        <motion.div
          key={step}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-10 flex items-center gap-4 rounded-xl bg-black/20 p-5"
        >
          <div className="text-blue-400">
            {steps[step].icon}
          </div>

          <p className="text-lg text-white">
            {steps[step].text}
          </p>
        </motion.div>

        <p className="mt-8 text-center text-gray-400">
          Please wait while our AI analyzes your resume.
        </p>
      </motion.div>
    </div>
  );
};

export default Loading;